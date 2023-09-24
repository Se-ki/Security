function validateForm() {
    //get the value that inputted
    var firstname = document.querySelector("input[name=firstname]").value;
    var middlename = document.querySelector("input[name=middlename]").value;
    var lastname = document.querySelector("input[name=lastname]").value;
    var suffix = document.querySelector("input[name=suffix]").value;
    var age = document.querySelector("input[name=age]").value;
    var mobilenumber = document.querySelector("input[name=mobilenum]").value;
    var country = document.querySelector("input[name=country]").value;
    var province = document.querySelector("input[name=province]").value;
    var city = document.querySelector("input[name=city]").value;
    var barangay = document.querySelector("input[name=barangay]").value;
    var address = document.querySelector("input[name=address]").value;
    var username = document.querySelector("input[name=username]").value;
    var email = document.querySelector("input[name=email]").value;
    var password = document.querySelector("input[name=password]").value;
    var confirmpass = document.querySelector("input[name=confirmpassword]").value;

    //firstname validation
    if (hasRepeatedLetters(firstname)) {
        document.getElementById('is-valid-firstname')
            .innerHTML = "Please enter a firstname without repeated letters.";
        document.getElementById('firstname-label').style.color = "red";
        document.getElementById('firstname').style.border = "1px solid red";
        return false
    }
    if (!validateString(firstname)) {
        document.getElementById('is-valid-firstname')
            .innerHTML = "Firstname should only contain letters and spaces.";
        document.getElementById('firstname-label').style.color = "red";
        document.getElementById('firstname').style.border = "1px solid red";
        return false
    }
    if (!validateIfCapitalize(firstname)) {
        document.getElementById('is-valid-firstname')
            .innerHTML = "Please enter a firstname with a capitalized first letter.";
        document.getElementById('firstname-label').style.color = "red";
        document.getElementById('firstname').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-firstname').innerHTML = "";
    document.getElementById('firstname-label').style.color = "";
    document.getElementById('firstname').style.border = "";


    //lastname validation
    if (hasRepeatedLetters(lastname)) {
        document.getElementById('is-valid-lastname')
            .innerHTML = "Please enter a lastname without repeated letters.";
        document.getElementById('lastname-label').style.color = "red";
        document.getElementById('lastname').style.border = "1px solid red";
        return false
    }
    if (!validateString(lastname)) {
        document.getElementById('is-valid-lastname')
            .innerHTML = "Lastname should only contain letters and spaces.";
        document.getElementById('lastname-label').style.color = "red";
        document.getElementById('lastname').style.border = "1px solid red";
        return false;
    }
    if (!validateIfCapitalize(lastname)) {
        document.getElementById('is-valid-lastname')
            .innerHTML = "Please enter a lastname with a capitalized first letter.";
        document.getElementById('lastname-label').style.color = "red";
        document.getElementById('lastname').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-lastname').innerHTML = "";
    document.getElementById('lastname-label').style.color = "";
    document.getElementById('lastname').style.border = "";


    //middlename validation
    if (hasRepeatedLetters(middlename)) {
        document.getElementById('is-valid-middlename')
            .innerHTML = "Please enter a middlename without repeated letters.";
        document.getElementById('middlename-label').style.color = "red";
        document.getElementById('middlename').style.border = "1px solid red";
        return false
    }
    if (!validateString(middlename)) {
        document.getElementById('is-valid-middlename')
            .innerHTML = "Middlename should only contain letters and spaces.";
        document.getElementById('middlename-label').style.color = "red";
        document.getElementById('middlename').style.border = "1px solid red";
        return false
    }
    if (!validateIfCapitalize(middlename)) {
        document.getElementById('is-valid-middlename')
            .innerHTML = "Please enter a middlename with a capitalized first letter.";
        document.getElementById('middlename-label').style.color = "red";
        document.getElementById('middlename').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-middlename').innerHTML = "";
    document.getElementById('middlename-label').style.color = "";
    document.getElementById('middlename').style.border = "";


    //suffix validation
    if (hasRepeatedLetters(suffix)) {
        document.getElementById('is-valid-suffix')
            .innerHTML = "Please enter a suffix without repeated letters.";
        document.getElementById('suffix-label').style.color = "red";
        document.getElementById('suffix').style.border = "1px solid red";
        return false
    }
    if (!validateString(suffix)) {
        document.getElementById('is-valid-suffix')
            .innerHTML = "Suffix should only contain letters and spaces.";
        document.getElementById('suffix-label').style.color = "red";
        document.getElementById('suffix').style.border = "1px solid red";
        return false
    }
    if (!validateIfCapitalize(suffix)) {
        document.getElementById('is-valid-suffix')
            .innerHTML = "Please enter a suffix with a capitalized first letter.";
        document.getElementById('suffix-label').style.color = "red";
        document.getElementById('suffix').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-suffix').innerHTML = "";
    document.getElementById('suffix-label').style.color = "";
    document.getElementById('suffix').style.border = "";


    //username validation
    if (hasRepeatedLetters(username)) {
        document.getElementById('is-valid-username')
            .innerHTML = "Please enter a username without repeated letters.";
        document.getElementById('username-label').style.color = "red";
        document.getElementById('username').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-username').innerHTML = "";
    document.getElementById('username-label').style.color = "";
    document.getElementById('username').style.border = "";



    //password
    if (password !== confirmpass) {
        //confirm password field
        document.getElementById('is-valid-confirmpassword')
            .innerHTML = "Passwords must match. Please try again";
        document.getElementById('confirmpassword-label').style.color = "red";
        document.getElementById('confirmpassword').style.border = "1px solid red";

        //password field
        document.getElementById('password-label').style.color = "red";
        document.getElementById('password').style.border = "1px solid red";
        return false;
    }
    document.getElementById('is-valid-confirmpassword').innerHTML = "";
    document.getElementById('confirmpassword-label').style.color = "";
    document.getElementById('confirmpassword').style.border = "";
    document.getElementById('password-label').style.color = "";
    document.getElementById('password').style.border = "";


    //country validation
    if (hasRepeatedLetters(country)) {
        document.getElementById('is-valid-country')
            .innerHTML = "Please enter a country without repeated letters.";
        document.getElementById('country-label').style.color = "red";
        document.getElementById('country').style.border = "1px solid red";
        return false
    }
    if (!validateString(country)) {
        document.getElementById('is-valid-country')
            .innerHTML = "Country should only contain letters and spaces.";
        document.getElementById('country-label').style.color = "red";
        document.getElementById('country').style.border = "1px solid red";
        return false
    }
    if (!validateIfCapitalize(country)) {
        document.getElementById('is-valid-country')
            .innerHTML = "Please enter a country with a capitalized first letter.";
        document.getElementById('country-label').style.color = "red";
        document.getElementById('country').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-country').innerHTML = "";
    document.getElementById('country-label').style.color = "";
    document.getElementById('country').style.border = "";


    //city validation
    if (hasRepeatedLetters(city)) {
        document.getElementById('is-valid-city')
            .innerHTML = "Please enter a municipal / city without repeated letters.";
        document.getElementById('city-label').style.color = "red";
        document.getElementById('city').style.border = "1px solid red";
        return false
    }
    if (!validateString(city)) {
        document.getElementById('is-valid-city')
            .innerHTML = "Municipal / City should only contain letters and spaces.";
        document.getElementById('city-label').style.color = "red";
        document.getElementById('city').style.border = "1px solid red";
        return false
    }

    if (!validateIfCapitalize(city)) {
        document.getElementById('is-valid-city')
            .innerHTML = "Please enter a municipal / city with a capitalized first letter.";
        document.getElementById('city-label').style.color = "red";
        document.getElementById('city').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-city').innerHTML = "";
    document.getElementById('city-label').style.color = "";
    document.getElementById('city').style.border = "";


    //province validation
    if (hasRepeatedLetters(province)) {
        document.getElementById('is-valid-province')
            .innerHTML = "Please enter a province without repeated letters.";
        document.getElementById('province-label').style.color = "red";
        document.getElementById('province').style.border = "1px solid red";
        return false
    }
    if (!validateString(province)) {
        document.getElementById('is-valid-province')
            .innerHTML = "Province should only contain letters and spaces.";
        document.getElementById('province-label').style.color = "red";
        document.getElementById('province').style.border = "1px solid red";
        return false
    }
    if (!validateIfCapitalize(province)) {
        document.getElementById('is-valid-province')
            .innerHTML = "Please enter a municipal / province with a capitalized first letter.";
        document.getElementById('province-label').style.color = "red";
        document.getElementById('province').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-province').innerHTML = "";
    document.getElementById('province-label').style.color = "";
    document.getElementById('province').style.border = "";


    //barangay validation
    if (hasRepeatedLetters(barangay)) {
        document.getElementById('is-valid-barangay')
            .innerHTML = "Please enter a barangay without repeated letters.";
        document.getElementById('barangay-label').style.color = "red";
        document.getElementById('barangay').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-barangay').innerHTML = "";
    document.getElementById('barangay-label').style.color = "";
    document.getElementById('barangay').style.border = "";


    //address validation
    if (hasRepeatedLetters(address)) {
        document.getElementById('is-valid-address')
            .innerHTML = "Please enter a address without repeated letters.";
        document.getElementById('address-label').style.color = "red";
        document.getElementById('address').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-address').innerHTML = "";
    document.getElementById('address-label').style.color = "";
    document.getElementById('address').style.border = "";


    //email validation
    if (hasRepeatedLetters(email)) {
        document.getElementById('is-valid-email')
            .innerHTML = "Please enter a email without repeated letters.";
        document.getElementById('email-label').style.color = "red";
        document.getElementById('email').style.border = "1px solid red";
        return false
    }
    document.getElementById('is-valid-email').innerHTML = "";
    document.getElementById('email-label').style.color = "";
    document.getElementById('email').style.border = "";

    return true;
}

//validator
function hasRepeatedLetters(value) {
    if (!value) {
        return false;
    }
    const regex = /([a-zA-Z])\1{3}/;
    return regex.test(value);
}
function validateIfCapitalize(value) {
    if (!value) {
        return true;
    }
    var valueParts = value.split(' ');
    for (var i = 0; i < valueParts.length; i++) {
        if (valueParts[i][0] !== valueParts[i][0].toUpperCase()) {
            return false;
        }
    }
    return true
}
function validateString(value) {
    var regex = /[0-9!@#$%^&*()\-\/+<>.,?\/\\\|\[\]\{\}]+/;
    if (regex.test(value)) {
        return false;
    }
    return true;
}


//check password strength real time checker
document.getElementById('password').addEventListener('input', (e) => {
    var password = e.target.value;
    var strengthIndicator = document.getElementById('password-strength');
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    var isStrong = regex.test(password);

    if (!password) {
        strengthIndicator.innerText = '';
        return;
    }

    if (isStrong) {
        strengthIndicator.innerText = 'Password is Strong';
        strengthIndicator.style.color = 'green';
    } else if (password.length >= 8) {
        strengthIndicator.innerText = 'Password is Medium';
        strengthIndicator.style.color = '#eeb600';
    } else {
        strengthIndicator.innerText = 'Password is Weak';
        strengthIndicator.style.color = 'red';
    }
})


//check if password match
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmpassword');
passwordInput.addEventListener('input', (e) => {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    if (password === "") {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "";
        document.getElementById("confirmpassword").style.border = "";
        document.getElementById("password-label").style.color = "";
        document.getElementById("password").style.border = "";
    }
    if (password !== confirmPassword && confirmPassword !== "") {
        document.getElementById("is-valid-confirmpassword").innerHTML = "Please make sure your passwords match.";
        document.getElementById("confirmpassword-label").style.color = "red";
        document.getElementById("confirmpassword").style.border = "1px solid red";
    } else {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "";
        document.getElementById("confirmpassword").style.border = "";
    }
});
document.getElementById('confirmpassword').addEventListener('input', (e) => {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    if (confirmPassword === "") {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "";
        document.getElementById("confirmpassword").style.border = "";
        document.getElementById("password-label").style.color = "";
        document.getElementById("password").style.border = "";
    }
    if (password !== confirmPassword) {
        document.getElementById("is-valid-confirmpassword").innerHTML = "Please make sure your passwords match.";
        document.getElementById("confirmpassword-label").style.color = "red";
        document.getElementById("confirmpassword").style.border = "1px solid red";
        document.getElementById("password-label").style.color = "red";
        document.getElementById("password").style.border = "1px solid red";
    } else {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "";
        document.getElementById("confirmpassword").style.border = "";
        document.getElementById("password-label").style.color = "";
        document.getElementById("password").style.border = "";
    }
})


//eye icon show password
document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
    var passwordField = document.getElementById('confirmpassword');
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

//check if username and email is exist
document.getElementById('username').addEventListener("keyup", (e) => {
    var username = e.target.value;
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            if (request.responseText) {
                document.getElementById('is-valid-username').innerHTML = request.responseText;
                document.getElementById('username-label').style.color = "red";
                document.getElementById('username').style.border = "1px solid red";
                document.getElementById('button').disabled = true;
                document.getElementById('button').style.cursor = "not-allowed";
            } else {
                document.getElementById('is-valid-username').innerHTML = "";
                document.getElementById('username-label').style.color = "";
                document.getElementById('username').style.border = "";
                document.getElementById('button').style.cursor = "";
                document.getElementById('button').disabled = false;
            }
        }
    });
    request.open('GET', `http://localhost:3000/ajax/fetch.php?username=${username}`);
    request.send();
});
document.getElementById('email').addEventListener("keyup", (e) => {
    var email = e.target.value;
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            if (request.responseText) {
                e.preventDefault()
                document.getElementById('is-valid-email').innerHTML = request.responseText;
                document.getElementById('email-label').style.color = "red";
                document.getElementById('email').style.border = "1px solid red";
                document.getElementById('button').disabled = true;
            } else {
                document.getElementById('is-valid-email').innerHTML = "";
                document.getElementById('email-label').style.color = "";
                document.getElementById('email').style.border = "";
                document.getElementById('button').disabled = false;
            }
        }
    });
    request.open('GET', `http://localhost:3000/ajax/fetch.php?email=${email}`);
    request.send();
});



