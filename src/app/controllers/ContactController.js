class ContactController {
  index(request, response) {
    // List contacts
    response.send('Method ContactController.index');
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
