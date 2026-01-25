import { z } from 'zod';
import { UpdateUserSchema, UserRoleEnum, UserSchema } from '@/schemas';

export type UserRole = z.infer<typeof UserRoleEnum>;

export type User = z.infer<typeof UserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
