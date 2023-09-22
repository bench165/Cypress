Feature: History Power Monitor

    Feature Login page will work depending on the user credentials.

Background:

    Given Open the IoT Connect web browser

    # Scenario: Testing access to the history display screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the History Power Moniter menu bar
    #     Then Successfully entered the history screen

    # Scenario: Testing the history display screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button
    #     And Click the History Power Moniter menu bar
    #     Then Successfully entered the history screen

    # Scenario: Testing the text box
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button
    #     And Click the History Power Moniter menu bar
    #     And Not entering the monitor name
    #     Then The system does not display the monitor name in the text box
    #     And Enter the monitor name "DB-1"
    #     Then The system will display "DB-1" as entered in the monitor name text box
    #     And Not entering the monitor ID
    #     Then The system does not display the monitor ID in the text box
    #     And Enter the monitor ID "283210"
    #     Then The system will display "283210" as entered in the monitor ID text box

    # Scenario: Testing the date picker
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button
    #     And Click the History Power Moniter menu bar
    #     And Click the Date picker button
    #     Then The system displays the current calendar correctly

    # Scenario: Testing the history display screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button
    #     And Click the History Power Moniter menu bar
        # And Click the Date picker button
        # Then The system displays the current calendar correctly
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # Then The system displays the date "12/09/2023" correctly
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "283210"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system correctly displays the name Monitor "DB-1", the monitor ID "283210", and the date "12/09/2023", and the information is accurate
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "283214"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-121321"
        # And Enter the monitor ID "28321421312"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "283210"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "283214"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "283210"
        # And Click the Search button
        # Then The system correctly displays the name Monitor "DB-1", the monitor ID "283210", and the information is accurate
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "283214"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Click the Search button
        # Then The system correctly displays the name Monitor "DB-1" and the information is accurate
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "999999"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system correctly displays the name Monitor "DB-1" and the information is accurate
        # And Enter the monitor name "DB-1233212"
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1233212"
        # And Enter the monitor ID "283210"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1233212"
        # And Enter the monitor ID "999999"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1233212"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1233212"
        # And Enter the monitor ID "283210"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1233212"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1233212"
        # And Enter the monitor ID "283210"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "DB-1233212"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system correctly displays the date "12/09/2023", and the information is accurate
        # And Enter the monitor ID "283210"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system correctly displays the Monitor ID "283210" and the information is accurate
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "283210"
        # And Click the Date picker button
        # And Select date "11/08/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "12/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "283210"
        # And Click the Search button
        # Then The system correctly displays the Monitor ID "283210" and the information is accurate
        # And Enter the monitor ID "999999"
        # And Click the Search button
        # Then The system does not display any information
        # And Select "10" from multiple options
        # Then Displaying "10" items correctly
        # And Select "50" from multiple options
        # Then Displaying "50" items correctly

    # Scenario: Testing the search button
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button
    #     And Click the History Power Moniter menu bar
    #     And Not entering the monitor name
    #     Then The system does not display the monitor name in the text box
    #     And Not entering the monitor ID
    #     Then The system does not display the monitor ID in the text box
    #     And Click the Search button
    #     Then The system displays the data of all monsters correctly at the present time

    # Scenario: Testing the Export button
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button
    #     And Click the History Power Moniter menu bar
    #     And Click the Export CSV button
    #     Then A .csv file appears

    # Scenario: Testing the drop-down menu
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button
    #     And Click the History Power Moniter menu bar
    #     And Select "10" from multiple options
    #     Then Displaying "10" items correctly
    
    Scenario: Testing the Previous button
        When Provide valid "ProjectIOT" and "IOT@1234"
        And Click on submit button
        And Click the History Power Moniter menu bar
        And Click the previous button
        Then Clicked the previous button successfully