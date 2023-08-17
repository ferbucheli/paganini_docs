Feature: Unauthorized Access Prevention

    Scenario: Prevent unauthorized access to payment options
        Given we access the Paganini card information page
        Then we should not see the message "Unauthorized access detected"
