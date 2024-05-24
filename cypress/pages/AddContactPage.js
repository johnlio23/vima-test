class AddContact {
  contactDetails = {
    firstname: "",
    lastName: "",
    birthDate: ""
  };

  elements = {
    pageHeader: () => cy.get("h1"),
    firstNameInput: () => cy.get("#firstName"),
    lastNameInput: () => cy.get("#lastName"),
    dateOfBirthInput: () => cy.get("#birthdate"),
    submitBtn: () => cy.get("#submit"),
  };

  typeFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typeBirthDate(birthDate) {
    this.elements.dateOfBirthInput().type(birthDate);
  }

  clickSubmit() {
    this.elements.submitBtn().click();
  }

  addContactMandatoryFields(randomId) {
    const testName = "user_" + randomId;
    this.contactDetails.firstname = testName + " First name";
    this.contactDetails.lastName = testName + " Last name";

    this.typeFirstName(this.contactDetails.firstname);
    this.typeLastName(this.contactDetails.lastName);
  }

  getContactDetails() {
    return this.contactDetails;
  }
}

export const addContact = new AddContact();
