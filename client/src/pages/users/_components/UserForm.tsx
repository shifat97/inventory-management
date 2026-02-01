import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserSchema, updateUserSchema } from '@/schemas/user';
import type { UserFormValues } from '@/pages/users';
import http from '@/lib/http';

interface UserFormProps {
  mode?: 'create' | 'update';
  defaultValues?: Partial<UserFormValues>;
}

export const UserForm = ({ mode = 'create', defaultValues }: UserFormProps) => {
  const isCreate = mode === 'create';

  const form = useForm<UserFormValues>({
    resolver: yupResolver(isCreate ? createUserSchema : updateUserSchema),
    defaultValues,
  });

  const onSubmit = (data: UserFormValues) => {
    if (isCreate) {
      const { name, email, password, role } = data;
      http
        .post('/api/admin/users', {
          name: name,
          email: email,
          password: password,
          role: role,
        })
        .then((_res) => alert('User creation successful'))
        .catch((error) => {
          console.error('User creation failed', error);
        });
    } else {
      console.log('Update User:', data);
      // updateUser(data);
    }
  };

  const inputStyles =
    'w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  const buttonStyles =
    'w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

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
          <option value="">Select a Role</option>
          <option value="admin">Admin</option>
          <option value="shopkeeper">Shop Keeper</option>
        </select>

        <button type="submit" className={buttonStyles}>
          {isCreate ? 'Create User' : 'Update User'}
        </button>
      </div>
    </form>
  );
};
