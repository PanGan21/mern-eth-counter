const logger = (req, res, next) => {
  console.log("Logging from custom middleware");
  next();
};

module.exports = logger;
