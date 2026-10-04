const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/video', async (req, res) => {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).json({ error: 'URL target diperlukan' });
    }

    try {
        const response = await axios.get(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://narto.in/',
                'Origin': 'https://narto.in',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'id-ID,id;q=0.9,en;q=0.8'
            },
            timeout: 10000
        });

        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).json({ 
            error: 'Gagal mengambil data dari target', 
            details: error.message 
        });
    }
});

module.exports = app;
