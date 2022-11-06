import { HttpResponse } from '../contracts';
import { SignUpValidator } from '../contracts/SignUpValidator';
import { SignUp } from './SignUp';

interface SutTypes {
  sut: SignUp
  requestValidatorStub: jest.Mocked<SignUpValidator>
}

const makeSut = (): SutTypes => {
  const requestValidatorStub: jest.Mocked<SignUpValidator> = {
    validate: jest.fn().mockResolvedValue(true)
  };

  const sut = new SignUp(requestValidatorStub);

  return { sut, requestValidatorStub };
};

describe('SignUp controller test', () => {
  it('Should return status 400 if receive invalid data', async () => {
    const { sut, requestValidatorStub } = makeSut();

    requestValidatorStub.validate.mockResolvedValueOnce(false);

    const httpResponse: HttpResponse = await sut.handle({
      body: { name: '', email: '', password: '' }
    });

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toBeInstanceOf(Error);
  });
});
