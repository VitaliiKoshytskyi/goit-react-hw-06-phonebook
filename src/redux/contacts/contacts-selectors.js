

export const getContacts = store => store.contacts;

export const getFilteredContacts = store => {
    const { filter, contacts } = store;
    if (filter === '') {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );

}