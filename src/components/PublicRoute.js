/* eslint-disable no-lone-blocks */
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "../redux/auth";

function PublicRoute({ restricted = false, redirectTo = "/" }) {
  console.log(redirectTo);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  const shouldRedirect = isLoggedIn && restricted;
  // const shouldRedirect = isLoggedIn && restricted && !isFetchingCurrentUser;

  console.log(shouldRedirect);

  return !shouldRedirect ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default PublicRoute;

PublicRoute.prototype = {
  restricted: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

PropTypes.checkPropTypes(PublicRoute);
