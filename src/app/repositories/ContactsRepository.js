const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Elian',
    email: 'elian@elianbecali.com.br',
    phone: '5501188996633',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
