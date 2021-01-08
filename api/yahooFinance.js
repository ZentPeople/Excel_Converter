const axios = require("axios");

const yahooFinance = axios.create({
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "901fc31141msh9b1a2a61a735ef3p13909ejsn71de2f72c8eb",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    useQueryString: true,
  },
});

module.exports = yahooFinance;
