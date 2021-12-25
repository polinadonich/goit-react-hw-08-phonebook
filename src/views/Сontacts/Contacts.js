import ContactList from "../../components/ContactList";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import Container from "../../components/Container";
import s from "./Contacts.module.css";

function Contacts() {
  return (
    <Container>
      <div className={s.phonebookContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={s.contactsContainer}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

export default Contacts;
