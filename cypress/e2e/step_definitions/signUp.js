import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";
import { signUpPage } from "../../pages/SignUpPage";
import { commonUtilities } from "../../support/utilities/commonUtilities";
import { contactList } from "../../pages/ContactListPage";

Given("user clicks the Sign Up button", () => {
  loginPage.clickSignUp();
});

Given("user is redirected to the {string} page", (pageName) => {
  switch (pageName) {
    case "Add User":
      cy.url().should(
        "eq",
        "https://thinking-tester-contact-list.herokuapp.com/addUser"
      );
      signUpPage.elements.pageHeader().should("have.text", pageName);
      break;
    case "Contact List":
      cy.url().should(
        "eq",
        "https://thinking-tester-contact-list.herokuapp.com/contactList"
      );
      contactList.elements.pageHeader().should("have.text", pageName);
      break;

    default:
      throw new Error(`The provided ${pageName} is not correct`);
  }
});

When("user views the following input fields", (dataTable) => {
  const signUpFields = dataTable.raw();

  signUpPage.elements.signUpInputFields().each((field, index) => {
    cy.wrap(field).should(
      "have.attr",
      "placeholder",
      signUpFields[index].toString()
    );
  });
});

When("user enters the sign up details", () => {
  const randomId = commonUtilities.randomId(4);
  signUpPage.submitSignUp(randomId);
});

When("user clicks the Submit button", () => {
  signUpPage.clickSubmit();
});

Given("user signs up", () => {
  const randomId = commonUtilities.randomId(4);
  loginPage.clickSignUp();
  signUpPage.submitSignUp(randomId);
  signUpPage.clickSubmit();
});
