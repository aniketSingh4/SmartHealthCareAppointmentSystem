document.getElementById("registrationForm")
	.addEventListener("submit", function(event) {

		let fullName = document.getElementById("fullname").value.trim();
		let fatherName = document.getElementById("fathername").value.trim();
		let address = document.getElementById("address").value.trim();
		let uniqueId = document.getElementById("aadhar").value;
		let email = document.getElementById("email").value.trim();
		let mobileNo = document.getElementById("mobileno").value.trim();
		let password = document.getElementById("password").value;

		//Error Handling
		let fullNameError = document.getElementById("fullnameError");
		let fatherNameError = document.getElementById("fathernameError");
		let addressError = document.getElementById("addressError");
		let emailError = document.getElementById("emailError");
		let mobileNoError = document.getElementById("mobilenoError");
		let passwordError = document.getElementById("passwordError");

		//Reset Error Messages
		fullNameError.textContent = "";
		fatherNameError.textContent = "";
		addressError.textContent = "";
		emailError.textContent = "";
		mobileNoError.textContent = "";
		passwordError.textContent = "";

		let isValid = true;

		// Name Validation
		let nameRegex = /^[A-Za-z\s]{3,50}$/;
		if (!nameRegex.test(fullname)) {
			document.getElementById("nameError").textContent = "Invalid name";
			isValid = false;
		} else if (fullName === "") {
			document.getElementById("nameError").textContent = "Enter a name.";
			isValid = false;
		}

		// Father's Name Validation
		if (!nameRegex.test(fatherName)) {
			document.getElementById("fatherNameError").textContent = "Invalid father name";
			isValid = false;
		} else if (fatherName === "") {
			document.getElementById("fatherNameError").textContent = "Enter father name";
			isValid = false;
		}

		// Address Validation
		if (address.length < 5) {
			document.getElementById("addressError").textContent = "Address must be at least 5 characters";
			isValid = false;
		} else if (address === "") {
			document.getElementById("addressError").textContent = "Enter a address";
			isValid = false;
		}

		// Unique Identity Validation
		let uniqueIdRegex = /^[A-Za-z0-9]{5,15}$/;
		if (!uniqueIdRegex.test(uniqueId)) {
			document.getElementById("uniqueIdError").textContent = "Invalid unique ID ";
			isValid = false;
		} else if (uniqueId === "") {
			document.getElementById("uniqueIdError").textContent = "Enter Your Id";
			isValid = false;
		}
		else if (uniqueId.length < 5 || uniqueId.length > 12) {
			document.getElementById("uniqueIdError").textContent = "Enter Your Id";
			isValid = false;
		}

		// Email Validation
		let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			document.getElementById("emailError").textContent = "Invalid email format";
			isValid = false;
		} else if (email === "") {
			document.getElementById("emailError").textContent = "Enter Your Email";
			isValid = false;
		}

		// Mobile No Validation
		let mobileRegex = /^[6-9]\d{9}$/;
		if (!mobileRegex.test(mobileno)) {
			document.getElementById("mobileError").textContent = "Invalid mobile (10 digits, starts with 6-9)";
			isValid = false;
		} else if (mobileno === "") {
			document.getElementById("mobileError").textContent = "Enter Mobile No";
			isValid = false;
		}
		else if (mobileNo.length < 10 || mobileNo.length > 10) {
			document.getElementById("mobileError").textContent = "Enter Valid Mobile No";
			isValid = false;
		}

		// Password Validation
		let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		if (!passwordRegex.test(password)) {
			document.getElementById("passwordError").textContent = "Weak password (Min 8 chars, 1 uppercase, 1 number, 1 special)";
			isValid = false;
		} else if(password === "") {
			document.getElementById("passwordError").textContent = "Enter Password";
			isValid = false;
		}

		if (!isValid) {
			event.preventDefault(); // Prevent form submission if validation fails
		}
	});