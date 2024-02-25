Feature: Facebook Login

    Positive and negative test for Facebook Login
    Background: Precondition
        Given Visit Facebook URL

    Scenario: To Verify Input Field and Button Availability
        And Verify Input Field is displayed
        And Verify Login Button is displayed

    Scenario: To verify successful login
        And Enter valid credentials
        And Click on Log In button
        And Url should contain "facebook.com"
        And Verify Home button

    Scenario:To verify error message is displayed with invalid credentials
        And Enter invalid credentials
        And Click on Log In button
        And Check if the error message in "div#loginform #email_container" is "The email you entered isn’t connected to an account. Find your account and log in."

    Scenario:To verify error message is displayed with empty fields
        And Click on Log In button
        And Check if the error message in "div#loginform #email_container" is "The email or mobile number you entered isn’t connected to an account. Find your account and log in."
