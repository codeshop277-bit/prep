const errorHandler = (err, req, res, next) => {
    console.error(`Error ${err}`);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        status: err.status || 'error',
        message
    });
};
//Custom Erro handler
class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}
class ValidationError extends AppError {
  constructor(message) {
    super(message, 400)
  }
}

class AuthError extends AppError {
  constructor(message) {
    super(message, 401)
  }
}
// throw new ValidationError('Email is invalid')
// throw new AuthError('Token expired')

//throw new AppError('User not found', 404)
module.exports = {
    errorHandler,
    ValidationError,
    AuthError,
    AppError
};