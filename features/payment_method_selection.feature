Feature: Payment Method Selection

    Scenario: Display different payment methods
        Given we access the Paganini payment method page
        Then we should see the different payment methods
            | method                |
            | Tarjeta de Crédito    |
            | Paypal                |
            | Transferencia Bancaria|

    Scenario: Display only the credit card option
        Given we access the Paganini payment method page
        Then we should only see the credit card option as active

    Scenario: Continue to next step with credit card option
        Given we access the Paganini payment method page
        When we select the credit card option
        Then we should proceed to the next step
