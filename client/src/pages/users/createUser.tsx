import { UserForm } from '@/pages/users/_components';

export const CreateUser = () => {
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
      />
    </div>
  );
};
