const form = document.getElementById('card-form');

function submitHandler(event) {
  event.preventDefault();
  console.log('Form submitted!');
}

form.addEventListener('submit', submitHandler);

function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.cardNumber.value)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)

function submitHandler(event) {
  event.preventDefault();

  const cardNumber = this.cardNumber.value;
  const month = this.month.value;
  const year = this.year.value;

  const expMonth = parseInt(month, 10);
  const expYear = parseInt(year, 10);

  const today = new Date();
  const currentYear = today.getFullYear() % 100;
  const currentMonth = today.getMonth() + 1;

  if (
    isNaN(expMonth) || isNaN(expYear) ||
    expMonth < 1 || expMonth > 12
  ) {
    alert("Please enter a valid expiration month and year.");
    return;
  }

  if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
    alert("The expiration date must be in the future.");
    return;
  }

  console.log("Card Number:", cardNumber);
  console.log("Expiration:", `${expMonth}/${expYear}`);
}
