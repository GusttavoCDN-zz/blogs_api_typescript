import { Application } from 'express';
import usersRouter from './users.routes';

export default (app: Application): void => {
  app.use(usersRouter);
};
