import { CreatedUserDTO } from "../DTO's/user-dtos";

export interface UsersRepository {
  findByEmail: (email: string) => Promise<CreatedUserDTO | null>
}
