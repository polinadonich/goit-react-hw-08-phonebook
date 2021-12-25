import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "../redux/auth";

// console.log(Redirect);

// function PrivateRoute({ redirectTo = "/login" }) {
function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

// /              https:/ / lyudmilaromanchenko -
//   goit -
//   react -
//   hw -
//   08 -
//   phonebook.netlify.app / /contacts      https:/ / lyudmilaromanchenko -
//   goit -
//   react -
//   hw -
//   08 -
//   phonebook.netlify.app / contacts;
