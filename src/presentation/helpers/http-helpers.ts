import { HttpResponse } from '../contracts';
import { StatusCodes } from './http-status-codes';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: StatusCodes.BAD_REQUEST,
  body: { error: error.message }
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  body: { error: error.message }
});

export const conflict = (error: Error): HttpResponse => ({
  statusCode: StatusCodes.CONFLICT,
  body: { error: error.message }
});

export const success = (data: any): HttpResponse => ({
  statusCode: StatusCodes.OK,
  body: data
});

export const created = (data: any): HttpResponse => ({
  statusCode: StatusCodes.CREATED,
  body: data
});
