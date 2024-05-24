class LoginPage {
  elements = {
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    submitBtn: () => cy.get("#submit"),
    signUpBtn: () => cy.get('#signup')
  };

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickSubmit() {
    this.elements.submitBtn().click();
  }

  clickSignUp() {
    this.elements.signUpBtn().click();
  }

  submitLogin(email, password) {
    this.typeEmail(email);
    this.typePassword(password);
    this.clickSubmit();
  }
}

export const loginPage = new LoginPage();
