import { z } from 'zod';
import {
  InstanceSchema,
  CreateInstanceSchema,
  UpdateInstanceSchema,
} from '@/schemas';

export type Instance = z.infer<typeof InstanceSchema>;
export type CreateInstance = z.infer<typeof CreateInstanceSchema>;
export type UpdateInstance = z.infer<typeof UpdateInstanceSchema>;
