import { User } from '../entities/User';

type input = Omit<User, 'id' | 'role'>;

type output = Omit<User, 'password'>;

export interface CreateUser {
  create: (data: input) => Promise<output>
}
