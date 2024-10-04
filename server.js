const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/say', async (req, res) => {
    try {
        const keyword = req.query.keyword;
        const lambdaURL = 'https://g813w3vuk4.execute-api.us-east-1.amazonaws.com/default/myFunction';
        const response = await axios.get(lambdaURL, {
            params: { keyword }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
