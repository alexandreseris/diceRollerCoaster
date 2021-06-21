class ExtendedError extends Error {
  constructor(data, httpCode=500, originalErr=null) {
    super()
    this.data = data
    this.httpCode = httpCode
    this.originalErr = originalErr
  }
}

class UserError extends ExtendedError {};
class ServerError extends ExtendedError {};

module.exports = {
  UserError: UserError,
  ServerError: ServerError,

  ValidationError: class extends UserError {},
  LoginError: class extends UserError {},

  HashError: class extends ServerError {},
  DatabaseError: class extends ServerError {},
};