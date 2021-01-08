const { validationResult } = require("express-validator/check");

const yahooFinance = require("../api/yahooFinance");
const yahooFinanceLowLatency = require("../api/yahooFinanceLowLatency");

// Check if connection exists
exports.checkConnection = (req, res, next) => {
  try {
    res.status(200).json({ message: "Connection Established" });
  } catch (err) {
    next(err);
  }
};

// Get Analsis of a symbol
exports.getAnalysis = async (req, res, next) => {
  try {
    // validte for Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation Failed");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }

    const { symbol, region } = req.query;

    const response = await yahooFinance.get("/stock/v2/get-analysis", {
      params: { symbol, region },
    });
    const resData = await response.data;

    await res.status(200).json({ ...resData });
  } catch (err) {
    next(err);
  }
};

// Get Analsis of a symbol
exports.getNews = async (req, res, next) => {
  try {
    // validte for Errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new Error("Validation Failed");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }

    const { symbols } = req.query;

    const response = await yahooFinanceLowLatency.get("/news", {
      params: { symbols },
    });
    const resData = await response.data;
    // Send response only with news results
    await res.status(200).json({ ...resData.Content.result });
  } catch (err) {
    next(err);
  }
};
