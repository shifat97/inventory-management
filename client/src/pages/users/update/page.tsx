import { UserForm } from '@/pages/users/_components';
import type { UserFormValues } from '@/pages/users';
import http from '@/lib/http';
import { getUserFromLS } from '@/utils';

export const UpdateUser = () => {
  const onSubmit = (data: UserFormValues & { confirmPassword?: string }) => {
    if (data.password && data.password !== data.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // UPDATE MODE
    const payload = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== '' && value !== undefined,
      ),
    );

    const user = getUserFromLS();

    http
      .put(`/api/admin/users/${user._id}`, payload)
      .then(() => alert('User updated successfully'))
      .catch(console.error);
  };

  return (
    <div className="w-screen h-scree">
      <UserForm
        mode="update"
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
