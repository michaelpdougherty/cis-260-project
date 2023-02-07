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

export const getAgeFromDOB = DOB => {
  const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365
  return (Math.abs(new Date(DOB) - new Date()) / millisecondsInAYear).toFixed(2);
};
