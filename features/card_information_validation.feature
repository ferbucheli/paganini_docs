Feature: Card Information Validation

    Scenario: Check error for empty phone number
        Given we access the Paganini card information page
        Then we should see an error if the phone number is empty

    Scenario: Check error for empty name
        Given we access the Paganini card information page
        Then we should see an error if the name is empty

    Scenario: Check error for empty card number
        Given we access the Paganini card information page
        Then we should see an error if the card number is empty

    Scenario: Check error for empty expiration date
        Given we access the Paganini card information page
        Then we should see an error if the expiration date is empty

    Scenario: Check error for empty cvv
        Given we access the Paganini card information page
        Then we should see an error if the cvv is empty
