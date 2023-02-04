const Logout = () => {
  window.sessionStorage.clear();
  window.location = "/";
};

export default Logout;
