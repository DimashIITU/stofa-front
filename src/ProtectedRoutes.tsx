import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  let user;
  const loggedcheck = localStorage.getItem('userID');
  if (loggedcheck) {
    user = { loggedIn: true };
  } else {
    user = { loggedIn: false };
  }

  return user && user.loggedIn;
};
// check authentication condition and navigate accordingly
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
