/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express';
import { adaptRoute } from '../config/express-adapter';
import { makeSignUpController } from '../factories/signUp-factory';

const usersRouter = Router();
const signUpController = makeSignUpController();

usersRouter.post('/users', adaptRoute(signUpController));

export default usersRouter;
