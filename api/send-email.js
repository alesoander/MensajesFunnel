module.exports = async (req, res) => {
    // Enable CORS - restrict to GitHub Pages domain
    const allowedOrigins = [
        'https://alesoander.github.io',
        'http://localhost:3000',
        'http://localhost:8000'
    ];
    
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin) || !origin) {
        res.setHeader('Access-Control-Allow-Origin', origin || '*');
    }
    
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;

        // Validate required fields
        if (!data.wespeak_link_de_acceso || !data.firstname_responsable_onboarding || 
            !data.opportunityname || !data.email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Get N8N webhook URL from environment variable
        const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://n8n.srv1010580.hstgr.cloud/webhook-test/8efad83b-804c-4201-9e9e-d8b185c7a59f';

        // Send form data to N8N webhook
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!webhookResponse.ok) {
            throw new Error(`Webhook request failed with status ${webhookResponse.status}`);
        }

        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully to N8N webhook' 
        });

    } catch (error) {
        console.error('Error sending to webhook:', error);
        res.status(500).json({ 
            error: 'Failed to send message',
            details: error.message 
        });
    }
};
