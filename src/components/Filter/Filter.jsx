import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/contactsSelectors';
import { changeFilter } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterQuery = useSelector(selectFilter); 

  const onChangeFilter = ({ currentTarget: { value } }) => {
    const newValue = value.toLowerCase();
    dispatch(changeFilter(newValue));
  };
  return (
    <>
      <label>
        <p>Find contact</p>
        <input
          type="text"
          name="filter"
          value={filterQuery}
          onChange={onChangeFilter}
          placeholder="Enter your contact"
        />
      </label>
    </>
  );
};

export default Filter;