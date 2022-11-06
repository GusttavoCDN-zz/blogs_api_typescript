import { CreatedUserDTO, CreateUserDTO } from "../../application/DTO's/user-dtos";
import { CreateUserUseCase } from '../../application/useCases/create-user';
import { Controller, HttpResponse, HttpResquest } from '../contracts';
import { SignUpValidator } from '../contracts/SignUpValidator';

export class SignUp implements Controller {
  constructor(
    private readonly requestValidator: SignUpValidator,
    private readonly createUser: CreateUserUseCase
  ) {}

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

    const output = await this.createUser.execute(request.body);

    return {
      statusCode: 201,
      body: output
    };
  };
}
