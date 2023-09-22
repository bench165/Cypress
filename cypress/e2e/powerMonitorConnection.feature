Feature: Power Monitor Connection

    Feature Login page will work depending on the user credentials.

Background:

    Given Open the IoT Connect web browser

    Scenario: Testing access to the history display screen
        When Provide valid "ProjectIOT" and "IOT@1234"
        And Click on submit button  
        And Click the History Power Moniter menu bar
        Then Successfully entered the history screen