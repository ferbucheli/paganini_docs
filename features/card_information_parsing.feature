Feature: Card Information Parsing

    Scenario: Parse the card number
        Given we access the Paganini card information page
        When we input the card number "4242424242424242"
        Then the card number should be displayed as "4242 4242 4242 4242"

    Scenario: Parse the card expiration date
        Given we access the Paganini card information page
        When we input the expiration date "1222"
        Then the expiration date should be displayed as "12 22"
