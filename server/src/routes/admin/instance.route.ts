import { Router } from 'express';

import { validateRequestBody } from '@/middlewares';
import { instanceController } from '@/modules/instance';
import { CreateInstanceSchema, UpdateInstanceSchema } from '@/schemas';

const router = Router();

router.post(
  '/',
  validateRequestBody(CreateInstanceSchema),
  instanceController.createInstance,
);
router.get('/', instanceController.getInstances);
router.get('/:id', instanceController.getInstancesById);
router.put(
  '/:id',
  validateRequestBody(UpdateInstanceSchema),
  instanceController.updateInstanceById,
);
router.delete('/:id', instanceController.deleteInstanceById);

export default router;
