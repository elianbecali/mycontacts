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

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, phone, email, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        phone,
        email,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactsRepository();
