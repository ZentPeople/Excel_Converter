const axios = require("axios");

const yahooFinanceLowLatency = axios.create({
  baseURL: "https://yahoo-finance-low-latency.p.rapidapi.com/v2/finance",
  headers: {
    "x-rapidapi-key": "901fc31141msh9b1a2a61a735ef3p13909ejsn71de2f72c8eb",
    "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
    useQueryString: true,
  },
});

module.exports = yahooFinanceLowLatency;
