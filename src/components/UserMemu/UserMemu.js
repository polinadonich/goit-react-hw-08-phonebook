/* eslint-disable jsx-a11y/alt-text */
import { useSelector, useDispatch } from "react-redux";
import s from "./UserMemu.module.css";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "@mui/material/Button";
import styles from "../../styles/styles";

function UserMemu() {
  const email = useSelector(authSelectors.getUserEmail);
  console.log(email);
  const dispatch = useDispatch();

  return (
    <nav className={s.user}>
      <span>
        Welcom, <span className={s.email}>{email}</span>
      </span>

      <Button
        // classes={classes}
        type="button"
        variant="contained"
        size="small"
        sx={styles.buttonLogOut}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </nav>
  );
}

export default UserMemu;
