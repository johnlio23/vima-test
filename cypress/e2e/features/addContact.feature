@ADD_CONTACT
Feature: Add a new contact

    Sign up with a new user and add new contacts

    Background: User visits the site and signs up
        Given user visits the main site
        And user signs up

    @ADD_CONTACT-TC001
    Scenario: Add new contact
        Given user enters the mandatory input fields to add a contact
        When user clicks the Submit button
        Then the new contact is displayed in the contact list
