Feature: Facebook Login

    Positive and negative test scenario for Facebook Login
    Background: Precondition
        Given Visit Facebook URL
        And Url should contain "facebook.com"

    Scenario: To verify Input Field and Button Availability
        And Verify Input Field is displayed
        And Verify Login Button is displayed

    Scenario: To verify that the user should be directed to the facebook home page when login is successful
        And Enter valid credentials
        And Click on Log In button
        And Url should contain "facebook.com"
        And Verify Home button

    Scenario: To verify error message is displayed with invalid email and invalid password
        And Enter invalid credentials
        And Click on Log In button
        And Check if the error message in "#error_box div.fsl" is "Wrong Credentials"

    Scenario: To verify error message is displayed with empty email or phone number and password fields
        And Click on Log In button
        And Check if the error message in "#error_box div.fsl" is "Wrong Credentials"

    Scenario: To verify error message is displayed when valid email or phone number and invalid password is entered
        And Enter valid email or phone number and invalid password
        And Click on Log In button
        And Url should contain "/login"
        And Check if the error message in "#error_box div.fsl" is "Wrong Credentials"