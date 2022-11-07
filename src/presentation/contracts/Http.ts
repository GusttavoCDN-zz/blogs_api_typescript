export interface HttpResponse<T = any | Error> {
  statusCode: number
  body: T | Error
}

export interface HttpRequest<T = any> {
  body: T
}
