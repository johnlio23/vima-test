@SIGNUP
Feature: Sign Up a new user

    Sign up with a new user

    Background: User visits the site
        Given user visits the main site
        And user clicks the Sign Up button

    @SIGNUP_TC001
    Scenario: User views the sign Up details
        When user is redirected to the "Add User" page
        Then user views the following input fields
            | First Name |
            | Last Name  |
            | Email      |
            | Password   |

    @SIGNUP_TC002
    Scenario: Sign up user
        When user enters the sign up details
        And user clicks the Submit button
        Then user is redirected to the "Contact List" page