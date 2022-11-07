import { CreatedUserDTO, CreateUserDTO } from "../../application/DTO's/user-dtos";
import { CreateUserUseCase } from '../../application/useCases/create-user';
import { Controller, HttpResponse, HttpRequest } from '../contracts';
import { RequestValidator } from '../contracts/RequestValidator';

export class SignUpController implements Controller {
  constructor(
    private readonly requestValidator: RequestValidator,
    private readonly createUser: CreateUserUseCase
  ) {}

  public handle = async (
    request: HttpRequest<CreateUserDTO>
  ): Promise<HttpResponse<CreatedUserDTO>> => {
    const isRequestValid = await this.requestValidator.validate(request.body);

    if (!isRequestValid) {
      return {
        statusCode: 400,
        body: new Error('Invalid request')
      };
    }

    const output = await this.createUser.execute(request.body);

    return {
      statusCode: 201,
      body: output
    };
  };
}
