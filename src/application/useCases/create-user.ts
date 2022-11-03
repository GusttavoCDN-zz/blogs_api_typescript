import { CreateUser } from '../../domain/useCases/create-user';
import { UsersRepository } from '../contracts/users-repository';
import { CreatedUserDTO, CreateUserDTO } from "../DTO's/user-dtos";

export class CreateUserUseCase implements CreateUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  public create = async ({
    name,
    email,
    password
  }: CreateUserDTO): Promise<CreatedUserDTO> => {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    return null as unknown as CreatedUserDTO;
  };
}
