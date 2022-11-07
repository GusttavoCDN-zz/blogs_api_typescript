export class Conflict extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Conflict';
  }
}

export class BadRequest extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequest';
  }
}

export class ServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServerError';
  }
}
