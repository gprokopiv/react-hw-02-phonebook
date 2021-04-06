import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}{' '}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),

  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
