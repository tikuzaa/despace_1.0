// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to get access token
app.post('/login/oauth/access_token', async (req, res) => {
    const { client_id, client_secret, code } = req.body;

    try {
        const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id,
            client_secret,
            code
        }, {
            headers: {
                'Accept': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching access token:", error);
        res.status(500).json({ error: 'Failed to fetch access token' });
    }
});

// Route to get user data
app.get('/user', async (req, res) => {
    const access_token = req.headers['authorization'].split(' ')[1];

    try {
        const response = await axios.get('https://api.github.com/user', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
});

// Route to get pull requests
app.get('/repos/:owner/:repo/pulls', async (req, res) => {
    const access_token = req.headers['authorization'].split(' ')[1];
    const { owner, repo } = req.params;

    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching pull requests:", error);
        res.status(500).json({ error: 'Failed to fetch pull requests' });
    }
});

// Route to get issues
app.get('/repos/:owner/:repo/issues', async (req, res) => {
    const access_token = req.headers['authorization'].split(' ')[1];
    const { owner, repo } = req.params;

    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching issues:", error);
        res.status(500).json({ error: 'Failed to fetch issues' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});