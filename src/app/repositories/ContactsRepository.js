const { v4 } = require('uuid');

// eslint-disable-next-line prefer-const
let contacts = [
  {
    id: v4(),
    name: 'Elian',
    email: 'elian@elianbecali.com.br',
    phone: '5501188996633',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@jose.com.br',
    phone: '5501188996633',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
