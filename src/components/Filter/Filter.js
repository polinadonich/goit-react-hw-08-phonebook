// import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import s from "./Filter.module.css";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { contactsSelectors } from "../../redux/contacts";

function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={s.findLable}>
      Find contacts by name
      <input
        className={s.find}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

export default Filter;

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(Filter);
