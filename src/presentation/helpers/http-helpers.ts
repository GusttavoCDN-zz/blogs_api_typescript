import { HttpResponse } from '../contracts';
import { StatusCodes } from './http-status-codes';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: StatusCodes.BAD_REQUEST,
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
