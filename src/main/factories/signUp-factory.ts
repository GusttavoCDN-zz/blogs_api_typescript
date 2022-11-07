import { ResquestValidator } from '../../infra/joi/validator';
import { SignUpController } from '../../presentation/controllers/SignUp';
import { signUpSchema } from '../../infra/joi/schemas/signUp-schema';
import { CreateUserUseCase } from '../../application/useCases/create-user';
import { PrismaUsersRepository } from '../../infra/prisma/repositories/prisma-users-repository';

export const makeSignUpController = (): SignUpController => {
  const usersRepository = new PrismaUsersRepository();

  const createUserUseCase = new CreateUserUseCase(usersRepository);
  const requestValidator = new ResquestValidator(signUpSchema);

  const signUpController = new SignUpController(requestValidator, createUserUseCase);

  return signUpController;
};
