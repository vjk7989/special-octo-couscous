# special-octo-couscous
priceTracker using binance api and get data in realtime using postman


---

# Binance API Price Fetcher

This is a Node.js application that fetches and displays the current prices of selected cryptocurrencies from the Binance API. The application uses the **Express.js** framework and provides an API endpoint to retrieve cryptocurrency prices.

---

## Features

- Fetches real-time prices for popular cryptocurrencies:
  - Bitcoin (BTC)
  - Dogecoin (DOGE)
  - Litecoin (LTC)
  - Ethereum (ETH)
  - Ripple (XRP)
  - Binance Coin (BNB)
  - Solana (SOL)
- Simple and lightweight implementation.
- Exposes an API endpoint (`/prices`) to fetch the latest prices in JSON format.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. Clone the repository or copy the source code to your project directory:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the required dependencies:

   ```bash
   npm install express node-fetch
   ```

---

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. Open your browser or use a tool like `curl` or Postman to access the API:

   ```
   http://localhost:3007/prices
   ```

   The response will be a JSON object containing the current prices of the selected cryptocurrencies:

   ```json
   {
     "BTCUSDT": "30000.00",
     "DOGEUSDT": "0.07",
     "LTCUSDT": "90.00",
     "ETHUSDT": "2000.00",
     "XRPUSDT": "0.50",
     "BNBUSDT": "250.00",
     "SOLUSDT": "30.00"
   }
   ```

---

## Project Structure

- `app.js`: Main application file that defines the Express server and fetches prices from the Binance API.

---

## Error Handling

- If there’s an error fetching the price of a cryptocurrency, it logs the error to the console and skips the respective currency.

---

## Contributing

Feel free to submit issues or create pull requests for any improvements or additional features.

---



---

