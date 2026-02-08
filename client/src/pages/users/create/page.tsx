import http from '@/lib/http';
import { UserForm } from '@/pages/users/_components/UserForm';
import type { UserFormValues } from '@/pages/users';

export const CreateUser = () => {
  const onSubmit = (data: UserFormValues & { confirmPassword?: string }) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

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
          role: 'shop-keeper',
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};
