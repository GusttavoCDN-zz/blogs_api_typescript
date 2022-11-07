import { UsersRepository } from '../../../application/contracts/UsersRepository';
import { CreatedUserDTO, CreateUserDTO } from "../../../application/DTO's/user-dtos";
import { user } from '../models/user-model';

export class PrismaUsersRepository implements UsersRepository {
  private readonly userModel = user;

  public findByEmail = async (email: string): Promise<CreatedUserDTO | null> => {
    const user = await this.userModel.findUnique({
      where: {
        email
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password: false
      }
    });

    if (!user) return null;

    return user as CreatedUserDTO;
  };

  public create = async (user: CreateUserDTO): Promise<CreatedUserDTO> => {
    const newUser = await this.userModel.create({
      data: { ...user, role: 'reader' },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password: false
      }
    });

    return newUser as CreatedUserDTO;
  };
}
