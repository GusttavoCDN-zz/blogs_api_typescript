import { UsersRepository } from '../contracts/UsersRepository';
import { CreateUserUseCase } from './create-user';

const createdUserResponse = {
  id: 1,
  name: 'any_name',
  email: 'any_email@email.com',
  role: 'customer'
};

const createUserRequest = {
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password'
};

interface SutTypes {
  sut: CreateUserUseCase
  usersRepository: jest.Mocked<UsersRepository>
}

const makeSut = (): SutTypes => {
  const usersRepository: jest.Mocked<UsersRepository> = {
    findByEmail: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(createdUserResponse)
  };

  const sut = new CreateUserUseCase(usersRepository);

  return { sut, usersRepository };
};

describe('Create user useCase Tests', () => {
  it('Should throw a exception with User already exists', async () => {
    const { sut, usersRepository } = makeSut();

    usersRepository.findByEmail.mockResolvedValueOnce(createdUserResponse);

    const promise = sut.execute(createUserRequest);

    await expect(promise).rejects.toThrow(Error);
  });

  it('Should call findByEmail with correct value', async () => {
    const { sut, usersRepository } = makeSut();

    const findByEmailSpy = jest.spyOn(usersRepository, 'findByEmail');

    await sut.execute(createUserRequest);

    expect(findByEmailSpy).toHaveBeenCalledWith(createUserRequest.email);
  });

  it('Should return a user on success', async () => {
    const { sut } = makeSut();

    const user = await sut.execute(createUserRequest);

    expect(user).toEqual(createdUserResponse);
  });

  it('Should call create with correct values', async () => {
    const { sut, usersRepository } = makeSut();

    const createSpy = jest.spyOn(usersRepository, 'create');

    await sut.execute(createUserRequest);

    expect(createSpy).toHaveBeenCalledWith(createUserRequest);
  });
});
