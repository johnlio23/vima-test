class SignUpPage {
  elements = {
    pageHeader: () => cy.get("h1"),
    signUpInputFields: () => cy.get("#add-user").find("input"),
    firstNameInput: () => cy.get("#firstName"),
    lastNameInput: () => cy.get("#lastName"),
    lastNameInput: () => cy.get("#lastName"),
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    submitBtn: () => cy.get("#submit"),
    cancelBtn: () => cy.get("#cancel"),
  };

  typeFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickSubmit() {
    this.elements.submitBtn().click();
  }

  submitSignUp(randomId) {
    let username = "vima_" + randomId;
    this.typeFirstName(username + " First Name");
    this.typeLastName(username + " Last Name");
    this.typeEmail(username + "@test.com");
    this.typePassword("passw0rd");
    this.clickSubmit();
  }
}

export const signUpPage = new SignUpPage();
