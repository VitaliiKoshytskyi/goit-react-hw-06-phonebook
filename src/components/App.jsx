
import { useSelector, useDispatch} from 'react-redux';

import ContactList from './ContactList/ContactList';
import ContactFrom from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { addContact,deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import { getFilter } from 'redux/filter/filter-selectors';
import { getContacts,getFilteredContacts } from 'redux/contacts/contacts-selectors';

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const filteredContacts = useSelector(getFilteredContacts)
  const dispatch = useDispatch()

  const addContactHandler = ({ name, number }) => {
    if (dublicatedHandler({ name })) {
      return alert(`${name} is already in contacts`);
    }
    const action = addContact({ name, number })
    dispatch(action)
  };

  const dublicatedHandler = ({ name }) => {
    const normalizedName = name.toLowerCase();
    const isDublicated = contacts.find(item => {
      return item.name.toLowerCase() === normalizedName;
    });
    return Boolean(isDublicated);
  };

  const deleteContactHandler = id => {
    const action = deleteContact(id)
    dispatch(action)
  };

  // const filterContactsHandler = () => {
  //   if (filter === '') {
  //     return contacts;
  //   }

  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(item =>
  //     item.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const onInputChange = event => {
    const action = setFilter(event.target.value)
  dispatch(action)}

  return (
    <div className={css.App}>
      <h1 className={css.phonebook}>Phonebook</h1>
      <ContactFrom onSubmit={addContactHandler} />
      <h2 className={css.contacts}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <Filter name={filter} onChange={onInputChange} />
      <ContactList
        items={filteredContacts} deleteContactHandler={deleteContactHandler}
        
      />
    </div>
  );
};
