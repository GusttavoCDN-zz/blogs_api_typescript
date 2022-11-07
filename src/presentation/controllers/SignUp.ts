import { CreatedUserDTO, CreateUserDTO } from "../../application/DTO's/user-dtos";
import { CreateUserUseCase } from '../../application/useCases/create-user';
import { Controller, HttpResponse, HttpRequest } from '../contracts';
import { RequestValidator } from '../contracts/RequestValidator';
import { badRequest, created } from '../helpers/http-helpers';

export class SignUpController implements Controller {
  constructor(
    private readonly requestValidator: RequestValidator,
    private readonly createUser: CreateUserUseCase
  ) {}

  public handle = async (
    request: HttpRequest<CreateUserDTO>
  ): Promise<HttpResponse<CreatedUserDTO>> => {
    try {
      const isRequestValid = await this.requestValidator.validate(request.body);

      if (!isRequestValid) return badRequest(new Error('Invalid request'));

      const output = await this.createUser.execute(request.body);

      return created(output) as HttpResponse<CreatedUserDTO>;
    } catch (error: any) {
      return badRequest(error);
    }
  };
}
