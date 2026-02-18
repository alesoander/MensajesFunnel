// Vercel Serverless Function
// This function receives form data and forwards it to N8N webhook
// Note: Requires Node.js 18+ for native fetch support (Vercel default)
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get N8N webhook URL from environment variable
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

    if (!N8N_WEBHOOK_URL) {
        console.error('N8N_WEBHOOK_URL environment variable is not set');
        return res.status(500).json({ 
            error: 'Server configuration error. Please contact administrator.',
            details: 'N8N_WEBHOOK_URL environment variable is missing'
        });
    }

    try {
        // Forward the request to N8N webhook
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error(`N8N webhook responded with status: ${response.status}`);
        }

        const data = await response.json().catch((err) => {
            console.warn('N8N response is not JSON:', err.message);
            return {};
        });
        
        return res.status(200).json({ 
            success: true,
            message: 'Message sent successfully',
            data 
        });
    } catch (error) {
        console.error('Error forwarding to N8N:', error);
        return res.status(500).json({ 
            error: 'Failed to send message',
            details: error.message
        });
    }
};
