/*Contact form */
function isEmailValid(email) {
    const regex = /\S+@\S+\.\S+/; 
    return regex.test(email);
}

function checkForm() {
	let yourName = document.getElementById("yourName").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("writeMessage").value;
	let formIsValid = true;
    
	if (yourName.length == 0) {
		document.getElementById("yourNameError").innerHTML = "Name required"
        form.yourName.focus();
		formIsValid = false;
	} else { 
		document.getElementById("yourNameError").innerHTML = "";
	}
	if (!isEmailValid(email)) {
		document.getElementById("emailError").innerHTML = "Must have a value and formated like an email address!";
		form.email.focus();
		formIsValid = false;
	}else { 
		document.getElementById("emailError").innerHTML = "";
	}
	if (message.length < 10) {
		document.getElementById("writeMessageError").innerHTML = "Minimum length 10 characters!";
		form.writeMessage.focus();

		formIsValid = false;
	}else { 
		document.getElementById("writeMessageError").innerHTML = "";
	}
	if (formIsValid){
		alert("your message would have been sent if this wasn`t a school assignment, the message has no recipient!");
	}
	return formIsValid;
	
}