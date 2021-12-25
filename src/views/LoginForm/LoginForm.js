import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./LoginForm.module.css";
import { authOperations } from "../../redux/auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "../../styles/styles";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../components/Container";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField
          // classes={classes.input}
          label="Email"
          color="primary"
          size="small"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          sx={styles.input}
        />
        <TextField
          // classes={classes.input}
          label="Password"
          color="primary"
          size="small"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          sx={styles.input}
        />

        <Button
          // classes={classes}
          type="submit"
          variant="contained"
          sx={styles.buttonStyles}
        >
          Log in
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
