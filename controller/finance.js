exports.checkConnection = (req, res, next) => {
  try {
    res.status(200).json({ message: "Connection Established" });
  } catch (err) {
    next(err);
  }
};

exports.getAnalysis = async (req, res, next) => {
  try {
    await res.status(200).json({ message: "Connection Established" });
  } catch (err) {
    next(err);
  }
};

exports.getNews = async (req, res, next) => {
  try {
    await res.status(200).json({ message: "Connection Established" });
  } catch (err) {
    next(err);
  }
};
