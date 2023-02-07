export const setTitle = title => {
  document.title = title ? `${title} | ${window.BRAND}` : window.BRAND;
};

export const getUser = () => {
  const userString = sessionStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    user.isLoggedIn = !!user.username;
    user.canEdit = ['ADMIN', 'TEACHER'].includes(user.accountType);
    return user;
  }
  return {};
}
