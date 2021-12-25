/* eslint-disable no-lone-blocks */
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { authSelectors } from "../../redux/auth";

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  return (
    // !isFetchingCurrentUser && (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
    // )
  );
}

export default Navigation;
