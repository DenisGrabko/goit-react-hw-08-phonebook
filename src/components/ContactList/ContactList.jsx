import { ContactListItem } from '../../components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/contacts/contactsSelectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);


  return (
    <>
      <ul>
        {isLoading && <Loader />}
        {!isLoading &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;






