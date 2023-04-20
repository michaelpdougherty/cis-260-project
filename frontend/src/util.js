export const setTitle = title => {
  document.title = title ? `${title} | ${window.BRAND}` : window.BRAND;
};

export const getUser = () => {
  const userString = sessionStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    user.isLoggedIn = !!user.username;
    user.canEdit = ['admin', 'teacher'].includes(user.account_type);
    return user;
  }
  return {};
}

export const getUserFullName = () => {
  const { first_name, last_name } = getUser();
  return `${first_name} ${last_name}`;
}

export const getAgeFromDOB = DOB => {
  const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365
  return (Math.abs(new Date(DOB) - new Date()) / millisecondsInAYear).toFixed(0);
};
