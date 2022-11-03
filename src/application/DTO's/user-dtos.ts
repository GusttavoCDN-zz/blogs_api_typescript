export type CreateUserDTO = {
  name: string
  email: string
  password: string
};

export type CreatedUserDTO = {
  id: number
  name: string
  email: string
  role: string
};
