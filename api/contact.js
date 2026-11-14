export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { name, email, service, message } = data;

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields (name, email, service, message).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address provided.'
      });
    }

    console.log(`[ENQUIRY RECEIVED] ${name} <${email}> for ${service}`);

    return res.status(200).json({
      success: true,
      message: 'Enquiry received successfully. Studio team will respond within 24 hours.',
      enquiryId: 'enq_' + Date.now()
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error processing enquiry.'
    });
  }
}

