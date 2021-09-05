const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List contacts
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Get Contact
  }

  store() {
    // Create Contact
  }

  update() {
    // Update Contact
  }

  delete() {
    // Delete Contact
  }
}

module.exports = new ContactController();
