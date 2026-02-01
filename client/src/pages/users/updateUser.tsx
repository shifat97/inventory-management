import { UserForm } from '@/pages/users/_components';

export const UpdateUser = () => {
  return (
    <div className="w-screen h-scree">
      <UserForm
        mode="update"
        defaultValues={{
          name: '',
          email: '',
          password: '',
          role: '',
        }}
      />
    </div>
  );
};
