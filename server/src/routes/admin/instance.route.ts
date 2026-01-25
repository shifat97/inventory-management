import { Router } from 'express';

import { validateRequestBody } from '@/middlewares';
import { instanceController } from '@/modules/instance';
import { CreateInstanceSchema } from '@/schemas';

const router = Router();

router.post(
  '/',
  validateRequestBody(CreateInstanceSchema),
  instanceController.createInstance,
);
router.get('/', instanceController.getInstances);

export default router;
