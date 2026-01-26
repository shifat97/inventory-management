import { Router, Request, Response } from 'express';

import { userController } from '@/modules/user';
import { NotImplementedError } from '@/common/errors';
import { validateRequestBody } from '@/middlewares';
import { CreateUserSchema } from '@/schemas';

const adminUserRouter = Router();

adminUserRouter.post(
  '/',
  validateRequestBody(CreateUserSchema),
  userController.createUser,
);
adminUserRouter.get('/', userController.getUsers);
adminUserRouter.get('/:id', (_req: Request, _res: Response) => {
  throw new NotImplementedError();
});
adminUserRouter.put('/:id', userController.updateUserById);
adminUserRouter.delete('/:id', userController.deleteUserById);
adminUserRouter.patch('/:id/restore', userController.restoreUser);
export default adminUserRouter;
