export class HttpError extends Error {
    public status: number = 400;
  
    constructor(
        status: number = 400,
        message: string
    ) {
      super(message);
  
      this.status = status;
  
      Object.setPrototypeOf(this, HttpError.prototype);
    }
  
    getErrorMessage() {
      return 'An error has ocurred when ' + this.message;
    }
  }