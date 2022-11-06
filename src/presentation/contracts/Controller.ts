import { HttpResponse, HttpResquest } from './Http';

export interface Controller {
  handle: (httpRequest: HttpResquest) => Promise<HttpResponse>
}
