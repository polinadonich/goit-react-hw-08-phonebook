import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./RegisterForm.module.css";
import { authOperations } from "../../redux/auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "../../styles/styles";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../components/Container";

console.log(styles);

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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

    dispatch(authOperations.register({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField
          // className={classes.input}
          label="Name"
          color="primary"
          size="small"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          sx={styles.input}
        />
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
          Register
        </Button>
      </form>
    </Container>
  );
}

export default RegisterForm;
