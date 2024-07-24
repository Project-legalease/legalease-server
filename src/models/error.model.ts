export class ApiError extends Error {
  code: number;
  status: boolean;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    this.status = false;
  }

  toJSON() {
    return {
      message: this.message,
      code: this.code,
      status: this.status,
    };
  }
}

export class BadRequest extends ApiError {
  constructor(message: string) {
    super(400, message);
  }
}

export class NotFound extends ApiError {
  constructor(message: string = "Requested resource not found") {
    super(404, message);
  }
}

export class InternalError extends ApiError {
  constructor(message: string = "Internal server error") {
    super(500, message);
  }
}

export class Unauthorized extends ApiError {
  constructor(message: string = "Unauthorized") {
    super(401, message);
  }
}

// I need 403 error
export class Forbidden extends ApiError {
  constructor(message: string = "Forbidden") {
    super(403, message);
  }
}
