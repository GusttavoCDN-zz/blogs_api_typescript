import { CreatedUserDTO, CreateUserDTO } from "../DTO's/user-dtos";

export interface UsersRepository {
  findByEmail: (email: string) => Promise<CreatedUserDTO | null>
  create: (user: CreateUserDTO) => Promise<CreatedUserDTO>
}
