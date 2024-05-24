import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";

Given("user visits the main site", () => {
  cy.visit("/");
});

