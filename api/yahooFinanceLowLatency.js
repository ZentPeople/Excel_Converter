const axios = require("axios");

const yahooFinanceLowLatency = axios.create({
  baseURL: "https://yahoo-finance-low-latency.p.rapidapi.com/v2/finance",
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
    useQueryString: true,
  },
});

module.exports = yahooFinanceLowLatency;
