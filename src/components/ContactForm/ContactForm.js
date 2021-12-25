import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import Button from "@mui/material/Button";
import styles from "../../styles/styles";

function ContactForm() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const addContact = (name, number) =>
    dispatch(contactsOperations.addContact(name, number));

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value);
    }

    if (e.currentTarget.name === "number") {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isContactsIncludes = contacts.find(
      (contact) => contact.name === name
    );

    if (isContactsIncludes) {
      return alert(`${name} is alredy in contacts`);
    } else {
      addContact(name, number);
      setName("");
      setNumber("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.lableContact}>
        Name
        <input
          className={s.inputContact}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.lableContact}>
        Number
        <input
          className={s.inputContact}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <Button
        onClick={handleSubmit}
        type="submit"
        // className={s.button}
        variant="contained"
        size="small"
        sx={styles.buttonStyles}
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;

ContactForm.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ),
  addContact: PropTypes.func.isRequired,
};

// import TextField from "@mui/material/TextField";
// import Button from "./Button";
// import { ThemeProvider, createTheme } from "@mui/system";

// const theme = createTheme({
//   palette: {
//     background: {
//       paper: "#009688",
//     },
//   },
// });
