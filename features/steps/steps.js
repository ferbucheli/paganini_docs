/* eslint-disable */
const { Given, When, Then, After } = require('cucumber');
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

let driver;

Given('we access the Paganini card information page', async function () {
	driver = new Builder().forBrowser('chrome').build();

	driver.wait(
		until.elementLocated(By.className('paganini-card-information-content'))
	);

	await driver.get('http://paganini.xyz/card-information');
});

Then('we should see an error if the phone number is empty', async function () {
	const submitButton = await driver.findElement(
		By.xpath("//*[text()='PAGAR']")
	);
	await submitButton.click();

	const errorMessage = await driver.findElement(
		By.xpath("//*[text()='El celular esta incompleto']")
	);
	assert(errorMessage);
});

Then('we should see an error if the name is empty', async function () {
	const phoneNumber = await driver.findElement(By.placeholder('0991235322'));
	await phoneNumber.sendKeys('0991235322');

	const submitButton = await driver.findElement(
		By.xpath("//*[text()='PAGAR']")
	);
	await submitButton.click();

	const errorMessage = await driver.findElement(
		By.xpath("//*[text()='El nombre esta incompleto']")
	);
	assert(errorMessage);
});

Then('we should see an error if the card number is empty', async function () {
	const phoneNumber = await driver.findElement(By.placeholder('0991235322'));
	await phoneNumber.sendKeys('0991235322');

	const name = await driver.findElement(By.placeholder('John Doe'));
	await name.sendKeys('John Doe');

	const submitButton = await driver.findElement(
		By.xpath("//*[text()='PAGAR']")
	);
	await submitButton.click();

	const errorMessage = await driver.findElement(
		By.xpath("//*[text()='El numero de tarjeta esta incompleto']")
	);
	assert(errorMessage);
});

Then(
	'we should see an error if the expiration date is empty',
	async function () {
		const phoneNumber = await driver.findElement(By.placeholder('0991235322'));
		await phoneNumber.sendKeys('0991235322');

		const name = await driver.findElement(By.placeholder('John Doe'));
		await name.sendKeys('John Doe');

		const cardNumber = await driver.findElement(
			By.placeholder('XXXX XXXX XXXX XXXX')
		);
		await cardNumber.sendKeys('4242424242424242');

		const submitButton = await driver.findElement(
			By.xpath("//*[text()='PAGAR']")
		);
		await submitButton.click();

		const errorMessage = await driver.findElement(
			By.xpath("//*[text()='La fecha de expiracion esta incompleta']")
		);
		assert(errorMessage);
	}
);

Then('we should see an error if the cvv is empty', async function () {
	const phoneNumber = await driver.findElement(By.placeholder('0991235322'));
	await phoneNumber.sendKeys('0991235322');

	const name = await driver.findElement(By.placeholder('John Doe'));
	await name.sendKeys('John Doe');

	const cardNumber = await driver.findElement(
		By.placeholder('XXXX XXXX XXXX XXXX')
	);
	await cardNumber.sendKeys('4242424242424242');

	const expirationDate = await driver.findElement(By.placeholder('09/26'));
	await expirationDate.sendKeys('1226');

	const submitButton = await driver.findElement(
		By.xpath("//*[text()='PAGAR']")
	);
	await submitButton.click();

	const errorMessage = await driver.findElement(
		By.xpath("//*[text()='El numero de seguridad no esta completo']")
	);
	assert(errorMessage);
});

Given('we access the Paganini payment method page', async function () {
	driver = new Builder().forBrowser('chrome').build();

	driver.wait(
		until.elementLocated(By.className('paganini-payment-method-content'))
	);

	await driver.get('http://paganini.xyz/payment-method');
});

Then('we should see the different payment methods', async function () {
	const title = await driver.findElement(
		By.xpath("//*[text()='Método de Pago']")
	);
	const creditCard = await driver.findElement(
		By.xpath("//*[text()='Tarjeta de Crédito / Débito']")
	);
	const paypal = await driver.findElement(By.xpath("//*[text()='Paypal']"));
	const bankTransfer = await driver.findElement(
		By.xpath("//*[text()='Transferencia Bancaria']")
	);

	assert(title);
	assert(creditCard);
	assert(paypal);
	assert(bankTransfer);
});

After(async function () {
	await driver.close();
});
