export const getUserFromLS = () => {
  const userStr = localStorage.getItem('inv-user');

  if (!userStr) {
    window.location.href = '/login';
    return;
  }

  const user = JSON.parse(userStr);
  return user;
};
