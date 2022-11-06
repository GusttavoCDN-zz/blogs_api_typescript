import { UsersRepository } from '../contracts/Users-repository';
import { CreatedUserDTO, CreateUserDTO } from "../DTO's/user-dtos";

export class CreateUserUseCase {
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

    const user = await this.usersRepository.create({
      name,
      email,
      password
    });

    return user;
  };
}
