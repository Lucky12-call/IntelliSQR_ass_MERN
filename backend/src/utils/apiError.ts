class APIError extends Error {
  statusCode: number;
  data: any;
  message: string;
  success: boolean;
  errors: any[];

  constructor(
    message = "Something went wrong",
    statusCode: number,
    stack = "",
    errors = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}

export default APIError;
