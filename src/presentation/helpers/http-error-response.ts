import { HttpResponse } from '../contracts';
import { badRequest, conflict, serverError } from './http-helpers';

export const httpErrorResponse = (error: Error): HttpResponse => {
  const { name } = error;

  switch (name) {
    case 'BadRequest':
      return badRequest(error);
    case 'Conflict':
      return conflict(error);
    default:
      return serverError(error);
  }
};
