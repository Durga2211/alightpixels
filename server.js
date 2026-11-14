/**
 * ALIGHT PIXELS — Creative Production Studio
 * Production Server & Contact API Endpoint (ES Module)
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
// If dist folder exists from vite build, serve that, else serve __dirname
const PUBLIC_DIR = fs.existsSync(DIST_DIR) ? DIST_DIR : __dirname;
const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(ENQUIRIES_FILE)) {
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2));
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle Contact API
  if (req.url === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) {
        req.destroy();
      }
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
        console.error('API Error processing enquiry:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          error: 'Internal server error processing enquiry.'
        }));
      }
    });
    return;
  }

  // Static File Serving
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') {
    reqPath = '/index.html';
  }

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  // If not found in PUBLIC_DIR (e.g. assets folder when dist is used), check root __dirname
  if (!fs.existsSync(filePath)) {
    const fallbackPath = path.join(__dirname, safePath);
    if (fs.existsSync(fallbackPath)) {
      filePath = fallbackPath;
    }
  }

  fs.stat(filePath, (err, stats) => {
    // SPA fallback: if file does not exist and it's not an asset, serve index.html
    if (err || !stats.isFile()) {
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(indexPath).pipe(res);
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Range request for MP4 video
    if (ext === '.mp4' && req.headers.range) {
      const range = req.headers.range;
      const total = stats.size;
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : total - 1;
      const chunksize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType
      });

      fs.createReadStream(filePath, { start, end }).pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`  ALIGHT PIXELS STUDIO REACT APP RUNNING`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  Serving:     ${PUBLIC_DIR}`);
  console.log(`=================================================\n`);
});
