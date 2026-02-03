import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserSchema, updateUserSchema } from '@/schemas/user';
import type { UserFormValues } from '@/pages/users';
import { useEffect } from 'react';
import { getUserFromLS } from '@/utils';

interface UserFormProps {
  mode?: 'create' | 'update';
  defaultValues?: Partial<UserFormValues>;
  onSubmit: (data: UserFormValues) => void;
}

export const UserForm = ({
  mode = 'create',
  defaultValues,
  onSubmit,
}: UserFormProps) => {
  const isCreate = mode === 'create';

  const form = useForm<UserFormValues>({
    resolver: yupResolver(isCreate ? createUserSchema : updateUserSchema),
    defaultValues,
  });

  useEffect(() => {
    if (mode !== 'update') return;

    const user = getUserFromLS();

    form.reset({
      name: user.name,
      email: user.email,
      role: user.role,
      // password intentionally omitted
    });
  }, [mode, form]);

  const inputStyles =
    'w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  const buttonStyles =
    'w-full p-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="p-6 border rounded-lg shadow-md max-w-md w-full space-y-4">
        <input
          {...form.register('name')}
          placeholder="Name"
          className={inputStyles}
        />
        <input
          {...form.register('email')}
          placeholder="Email"
          type="email"
          className={inputStyles}
        />
        <input
          {...form.register('password')}
          placeholder="Password"
          type="password"
          className={inputStyles}
        />

        <select {...form.register('role')} className={inputStyles}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="shop-keeper">Shop Keeper</option>
        </select>

        <button type="submit" className={buttonStyles}>
          {isCreate ? 'Create User' : 'Update User'}
        </button>
      </div>
    </form>
  );
};
