import { HttpResponse, HttpRequest } from './Http';

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
