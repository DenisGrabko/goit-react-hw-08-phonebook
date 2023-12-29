import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts/contactsOperations';
import { getRandomHexColor } from './GetRandomHexColor';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li key={id}>
        <div>
          <span style={{color: getRandomHexColor()}}>
            {name.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <b>{name} : </b>
        {number.slice(0, 13)}
      </li>
      <button
        type="button"
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;