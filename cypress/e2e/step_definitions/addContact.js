import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { addContact } from "../../pages/AddContactPage";
import { commonUtilities } from "../../support/utilities/commonUtilities";

Given("user enters the mandatory input fields to add a contact", () => {
    const randomId = commonUtilities.randomId(3)
    addContact.addContactMandatoryFields(randomId)
})