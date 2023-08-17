Feature: Data Security

    Scenario: Ensure credit card details are not in plain text
        Given we access the Paganini card information page
        When we input the card number "4242424242424242"
        Then the card number should not be displayed in plain text

    Scenario: Ensure 2FA code is required
        Given we access the Paganini card information page
        When we click on the "PAGAR" button
        Then we should be prompted to enter the 2FA code

    Scenario: Ensure no insecure third-party components are loaded
        Given we access the Paganini card information page
        Then we should not see any insecure third-party components
