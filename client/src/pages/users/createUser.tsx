import http from '@/lib/http';
import { UserForm } from '@/pages/users/_components';
import type { UserFormValues } from './types';

export const CreateUser = () => {
  const onSubmit = (data: UserFormValues) => {
    console.log(data);
    http
      .post('/api/admin/users', data)
      .then((_res) => alert('User creation successful'))
      .catch((error) => {
        console.error('User creation failed', error);
      });
  };

  return (
    <div className="w-screen h-scree">
      <UserForm
        mode="create"
        defaultValues={{
          name: '',
          email: '',
          password: '',
          role: '',
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};
