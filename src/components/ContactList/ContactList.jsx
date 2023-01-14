import css from './contactList.module.css';
import ContactItem from './ContactItem';
import { PropTypes } from 'prop-types';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={css.container}>
      {contacts.map(({ id, name, number }, index) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          idx={id}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ContactList;
