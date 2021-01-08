const axios = require("axios");

const yahooFinance = axios.create({
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    useQueryString: true,
  },
});

module.exports = yahooFinance;
