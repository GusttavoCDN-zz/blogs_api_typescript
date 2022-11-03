import { UsersRepository } from '../contracts/users-repository';
import { CreateUserUseCase } from './create-user';

describe('Create user useCase Tests', () => {
  it('Should throw a exception with User already exists', async () => {
    const usersRepository: jest.Mocked<UsersRepository> = {
      findByEmail: jest.fn().mockResolvedValueOnce({
        id: 1,
        name: 'any_name',
        email: 'any_email@email.com',
        role: 'customer'
      })
    };

    const sut = new CreateUserUseCase(usersRepository);

    const promise = sut.create({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    });

    await expect(promise).rejects.toThrow(Error);
  });
});
