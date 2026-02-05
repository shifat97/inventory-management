import type { UserFormValues } from '@/pages/users';
import * as yup from 'yup';

export const createUserSchema: yup.ObjectSchema<UserFormValues> = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).required('Password is required'),
  role: yup.string().required('Role is required').default('user'),
  isDraft: yup.boolean().default(false),
});

export const updateUserSchema: yup.ObjectSchema<UserFormValues> = yup.object({
  name: yup.string().optional(),
  email: yup.string().email().optional(),
  password: yup.string().optional(),
  role: yup.string().optional(),
  isDraft: yup.boolean().optional(),
});
