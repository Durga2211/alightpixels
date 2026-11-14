import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function contactApiPlugin() {
  const DATA_DIR = path.resolve(__dirname, 'data');
  const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(ENQUIRIES_FILE)) {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2));
  }

  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
            if (body.length > 1e6) req.destroy();
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              if (!data.name || !data.email || !data.service || !data.message) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                  success: false,
                  error: 'Missing required fields (name, email, service, message).'
                }));
                return;
              }

              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(data.email)) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                  success: false,
                  error: 'Invalid email address provided.'
                }));
                return;
              }

              const enquiryRecord = {
                id: 'enq_' + Date.now(),
                receivedAt: new Date().toISOString(),
                ip: req.socket.remoteAddress || '127.0.0.1',
                name: String(data.name).trim(),
                email: String(data.email).trim().toLowerCase(),
                phone: String(data.phone || '').trim(),
                company: String(data.company || '').trim(),
                service: String(data.service).trim(),
                timeline: String(data.timeline || '').trim(),
                message: String(data.message).trim()
              };

              let existing = [];
              try {
                existing = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf8'));
              } catch (e) {
                existing = [];
              }
              existing.push(enquiryRecord);
              fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf8');

              console.log(`[ENQUIRY RECEIVED] ${enquiryRecord.name} <${enquiryRecord.email}> for ${enquiryRecord.service}`);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({
                success: true,
                message: 'Enquiry received successfully. Studio team will respond within 24 hours.',
                enquiryId: enquiryRecord.id
              }));
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({
                success: false,
                error: 'Server error processing enquiry.'
              }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), contactApiPlugin()],
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
