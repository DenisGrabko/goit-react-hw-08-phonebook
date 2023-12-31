import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts/contactsOperations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (    
    <li key={id}>
      {name} : {number.slice(0, 13)}
      <button
        type="button"
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};
