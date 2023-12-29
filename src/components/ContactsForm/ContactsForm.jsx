import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { addContactsThunk } from '../../redux/contacts/contactsOperations';
import { Notify } from 'notiflix';

const ContactsForm = () => {
  const [data, setData] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === data.name.toLowerCase().trim() ||
        contact.number === data.number
    );

    if (isExist) {
      Notify.warning(`${data.name} already EXIST.`);
      return;
    }

    dispatch(
      addContactsThunk({ name: data.name, number: data.number, id: nanoid() })
    );
    setData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Add contact</p>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={data.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </label>

        <button
          type="submit"
        >
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactsForm;