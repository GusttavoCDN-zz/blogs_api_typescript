export interface HttpResponse<T = any | Error> {
  statusCode: number
  body: T | Error
}

export interface HttpResquest<T = any> {
  body: T
}
