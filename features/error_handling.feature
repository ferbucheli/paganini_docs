Feature: Error Handling

    Scenario: Handle invalid card numbers gracefully
        Given we access the Paganini card information page
        When we input an invalid card number
        Then we should see an error message indicating the card number is invalid
