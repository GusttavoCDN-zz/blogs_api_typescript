import { CreatedUserDTO, CreateUserDTO } from "../../application/DTO's/user-dtos";
import { Controller, HttpResponse, HttpResquest } from '../contracts';
import { SignUpValidator } from '../contracts/SignUpValidator';

export class SignUp implements Controller {
  constructor(private readonly requestValidator: SignUpValidator) {}
  public handle = async (
    request: HttpResquest<CreateUserDTO>
  ): Promise<HttpResponse<CreatedUserDTO>> => {
    const isRequestValid = await this.requestValidator.validate(request.body);

    if (!isRequestValid) {
      return {
        statusCode: 400,
        body: new Error('Invalid request')
      };
    }

    return null as any;
  };
}
