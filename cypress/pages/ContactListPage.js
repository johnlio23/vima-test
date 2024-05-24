class ContactList {
  elements = {
    pageHeader: () => cy.get("h1"),
    addContactBtn: () => cy.get("#add-contact"),
  };

  clickAddContact() {
    this.elements.addContactBtn().click();
  }
}

export const contactList = new ContactList();
