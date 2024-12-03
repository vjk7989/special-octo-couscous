const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3007;

// Defining Binance API URL 
const key = "https://api.binance.com/api/v3/ticker/price?symbol=";

const currencies = ["BTCUSDT", "DOGEUSDT", "LTCUSDT", "ETHUSDT", "XRPUSDT", "BNBUSDT", "SOLUSDT"];

// Function to fetch prices
const fetchPrices = async () => {
    const prices = {};
    for (const currency of currencies) {
        try {
            const url = key + currency;
            const response = await fetch(url);
            const data = await response.json();
            prices[data['symbol']] = data['price'];
        } catch (error) {
            console.error(`Error fetching price for ${currency}:`, error);
        }
    }
    return prices; 
};


app.get('/prices', async (req, res) => {
    const prices = await fetchPrices(); // Fetch prices on each request
    res.json(prices); // Send the fetched prices as response
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
