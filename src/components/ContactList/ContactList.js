import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ContactElement from "../ContactElement";
import s from "./ContactList.module.css";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactElement
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,

  deleteContact: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(ContactList);
