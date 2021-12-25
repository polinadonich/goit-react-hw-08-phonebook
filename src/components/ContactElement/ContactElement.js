import s from "./ContactElement.module.css";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../styles/styles";

function ContactElement({ id, name, number, deleteContact }) {
  return (
    <p>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>

      <Button
        startIcon={<DeleteIcon />}
        type="button"
        // className={s.button}
        variant="contained"
        size="small"
        sx={styles.buttonDelete}
        onClick={() => deleteContact(id)}
      >
        Delete
      </Button>
    </p>
  );
}

ContactElement.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(ContactElement);

export default ContactElement;
