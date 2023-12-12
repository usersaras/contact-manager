const errorHandler = (err, req, res, next) => {
  const statusCode = err.status ? err.status : 500;

  res.status(statusCode).json({
    success: false,
    name: err.name,
    message: err.message,
    stackTrace: err.stack,
  });
};

module.exports = errorHandler;
