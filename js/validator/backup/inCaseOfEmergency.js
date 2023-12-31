//validator
function hasRepeatedLetters(value) {
    if (!value) {
        return false;
    }
    const regex = /([a-zA-Z])\1{2}/;
    return regex.test(value);
}
function hasRepeatedLettersInSuffix(value) {
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
    return value === value
        .toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}
function validateIfCapitalizeInSuffix(value) {
    if (!value) {
        return true;
    }
    const regex = /([a-zA-Z])/;
    return regex.test(value);
}
function containNumbers(value) {
    var regex = /[0-9]+/;
    if (regex.test(value)) {
        return true;
    }
    return false;
}
function containSpecialCharacters(value) {
    var regex = /[!@'';:#$%^&*()\-\/+<>.,?\/\\\|\[\]\{\}]+/;
    if (regex.test(value)) {
        return true
    }
    return false;
}
function containsLetters(value) {
    if (!value) {
        return false;
    }
    if (!/^[0-9]+$/.test(value)) {
        return true
    }
    return false;
}
function validatePhilippineMobileNumber(mobileNumber) {
    if (!mobileNumber) {
        return true;
    }
    if (mobileNumber.length < 11) {
        return false
    }
    var pattern1 = /^(09\d{9})$/;
    var pattern2 = /^(\+639)?\d{9}$/;
    if (!pattern1.test(mobileNumber) && !pattern2.test(mobileNumber)) {
        return false
    }
    return true;
}
function isValidAddress(value) {
    if (!value) {
        return true;
    }
    var pattern = /^[a-zA-Z0-9,.\-\s]+$/;
    return pattern.test(value);
}
/*
    #TODO no words nor letter but if contains 1 space at the beginning will restrict
*/
function validateOneSpaceAtTheEnd(input) {
    if (!input) {
        return false;
    }
    var pattern = /^([0-9a-zA-Z,.-]+ )*$/;
    return pattern.test(input);
}
function validateOneSpacePerWord(input) {
    if (!input) {
        return true;
    }
    var pattern = /^[0-9a-zA-Z,.-]+( [0-9a-zA-Z,.-]+)*$/;
    return pattern.test(input);
}
function startInputContainSpace(input) {
    if (!input) {
        return false;
    }
    if (input === " ") {
        return true;
    }
    var pattern = /^( [0-9a-zA-Z,.-]+)*$/;
    return pattern.test(input);
}
function passwordValidation(value) {
    if (!value) {
        return true;
    }
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(value)
}
function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
function forSuffixValidation(suffixValue) {
    //suffix
    // Allow empty suffix or valid Roman numerals, "Jr.", or "Sr."
    var validSuffixRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$|^Jr\.$|^Sr\.$/;
    if (!validSuffixRegex.test(suffixValue)) {
        return true;
    }
    return false;
}

//validation that it will automatically restrict when you type
function capitalizeFirstLetter(inputId) {
    const inputElement = document.getElementById(inputId);
    const words = inputElement.value.split(' ');
    // const words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    inputElement.value = words.join(' ');
}
function restrictNonLetters(inputElementId) {
    var inputElement = document.getElementById(inputElementId);

    if (!inputElement) {
        console.error('Input element not found with id: ' + inputElementId);
        return;
    }

    inputElement.addEventListener('input', function (event) {
        var inputValue = event.target.value;

        // Remove any non-letter characters
        var cleanedValue = inputValue.replace(/[^A-Za-z]/g, ' ');

        // Update the input field with the cleaned value
        event.target.value = cleanedValue;

        // You can add additional validation logic here if needed
    });
}
function restrictTwoConsecutiveLetters(event, fieldName) {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function (match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
}
function restrictSpaceStart(event) {
    // Check if the first character is a space
    if (event.target.value.charAt(0) === ' ') {
        event.target.value = '';  // Clear the value if it starts with a space
    }
}
function restrictDoubleSpaces(event, fieldName) {
    const inputElement = event.target;
    const inputValue = inputElement.value;

    // Replace double spaces with a single space
    const sanitizedValue = inputValue.replace(/\s{2,}/g, ' ');

    // Update the input value if it was changed
    if (sanitizedValue !== inputValue) {
        inputElement.value = sanitizedValue;
    }
}


//validate form
document.getElementById('register-form').addEventListener('submit', async (e) => {
    //get the value that inputted
    var firstname = document.querySelector("input[name=firstname]").value;
    var middlename = document.querySelector("input[name=middlename]").value;
    var lastname = document.querySelector("input[name=lastname]").value;
    var suffix = document.querySelector("input[name=suffix]").value;
    var sex = document.querySelector("#sex").value;
    var birthdate = document.querySelector("input[name=birthdate]").value;
    var age = document.querySelector("input[name=age]").value;
    var mobilenumber = document.querySelector("input[name=mobilenum]").value;
    var email = document.querySelector("input[name=email]").value;
    var country = document.querySelector("input[name=country]").value;
    var province = document.querySelector("input[name=province]").value;
    var city = document.querySelector("input[name=city]").value;
    var purok = document.querySelector("input[name=purok]").value;
    var barangay = document.querySelector("input[name=barangay]").value;
    var street = document.querySelector("input[name=street]").value;
    var zipcode = document.querySelector("input[name=zipcode]").value;
    var username = document.querySelector("input[name=username]").value;
    var password = document.querySelector("input[name=password]").value;
    var confirmpass = document.querySelector("input[name=confirmpassword]").value;

    //if theres no any validation registered
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('middlename', middlename);
    formData.append('lastname', lastname);
    formData.append('suffix', suffix);
    formData.append('sex', sex);
    formData.append('birthdate', birthdate);
    formData.append('age', age);
    formData.append('mobilenum', mobilenumber);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('province', province);
    formData.append('city', city);
    formData.append('purok', purok);
    formData.append('barangay', barangay);
    formData.append('street', street);
    formData.append('zipcode', zipcode);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('confirmpassword', confirmpass);
    const response = await fetch("/register/store", {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    console.log(data);
    if (!data.ok && data.type === "email") {
        //display error
        document.getElementById("is-valid-email").innerHTML = data.message;
        document.getElementById("email-label").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("is-valid-username").innerHTML = "";
        document.getElementById("username-label").style.color = "";
        document.getElementById("username").style.border = "";
        return;
    } else if (!data.ok && data.type === "username") {
        //display error
        document.getElementById("is-valid-username").innerHTML = data.message;
        document.getElementById("username-label").style.color = "red";
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("is-valid-email").innerHTML = "";
        document.getElementById("email-label").style.color = "";
        document.getElementById("email").style.border = "";
        return;
    }
    document.getElementById("is-valid-username").innerHTML = "";
    document.getElementById("username-label").style.color = "";
    document.getElementById("username").style.border = "";
    document.getElementById("is-valid-email").innerHTML = "";
    document.getElementById("email-label").style.color = "";
    document.getElementById("email").style.border = "";
    document.getElementById('password-strength').innerHTML = "";
    document.querySelectorAll("input").forEach((inputFields) => {
        inputFields.value = "";
    });
    alert(data.message);
})


// firstname validation
const firstname = document.getElementById('firstname');
const firstname_label = document.getElementById('firstname-label');
firstname.addEventListener("input", (e) => {
    //get the value of firstname
    var firstname_value = e.target.value;
    if (hasRepeatedLetters(firstname_value)) {
        firstname.setCustomValidity("Please enter a firstname without repeated letters.")
        firstname_label.style.color = "red";
        firstname.style.border = "1px solid red";
    } else if (containSpecialCharacters(firstname_value)) {
        firstname.setCustomValidity("Firstname should not contains special characters.")
        firstname_label.style.color = "red";
        firstname.style.border = "1px solid red";
    } else if (containNumbers(firstname_value)) {
        firstname.setCustomValidity("Firstname should not contains numbers.")
        firstname_label.style.color = "red";
        firstname.style.border = "1px solid red";
    } else if (startInputContainSpace(firstname_value)) {
        firstname.setCustomValidity("Firstname should not start with space.")
        firstname_label.style.color = "red";
        firstname.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(firstname_value)) {
        firstname.setCustomValidity("Firstname should not end with space.")
        firstname_label.style.color = "red";
        firstname.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(firstname_value)) {
        firstname.setCustomValidity("Double spaces are not allowed.")
        firstname_label.style.color = "red";
        firstname.style.border = "1px solid red";
    } else if (!validateIfCapitalize(firstname_value)) {
        firstname.setCustomValidity("Firstname must be capitalize")
        firstname_label.style.color = "red";
        firstname.style.border = "1px solid red";
    } else {
        firstname.setCustomValidity("");
        firstname_label.style.color = "";
        firstname.style.border = "";
    }
});


// middlename validation
const middlename = document.getElementById('middlename');
const middlename_label = document.getElementById('middlename-label');
middlename.addEventListener("input", (e) => {
    var middlename_value = e.target.value;
    if (hasRepeatedLetters(middlename_value)) {
        middlename.setCustomValidity("Please enter a middlename without repeated letters.")
        middlename_label.style.color = "red";
        middlename.style.border = "1px solid red";
    } else if (containSpecialCharacters(middlename_value)) {
        middlename.setCustomValidity("Middlename should not contains special characters.")
        middlename_label.style.color = "red";
        middlename.style.border = "1px solid red";
    } else if (containNumbers(middlename_value)) {
        middlename.setCustomValidity("Middlename should not contains numbers.")
        middlename_label.style.color = "red";
        middlename.style.border = "1px solid red";
    } else if (startInputContainSpace(middlename_value)) {
        middlename.setCustomValidity("Middlename should not start with space.")
        middlename_label.style.color = "red";
        middlename.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(middlename_value)) {
        middlename.setCustomValidity("Middlename should not end with space.")
        middlename_label.style.color = "red";
        middlename.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(middlename_value)) {
        middlename.setCustomValidity("Double spaces are not allowed.")
        middlename_label.style.color = "red";
        middlename.style.border = "1px solid red";
    } else if (!validateIfCapitalize(middlename_value)) {
        middlename.setCustomValidity("Middlename must be capitalize")
        middlename_label.style.color = "red";
        middlename.style.border = "1px solid red";
    } else {
        middlename.setCustomValidity("");
        middlename_label.style.color = "";
        middlename.style.border = "";
    }
});


// lastname validation
const lastname = document.getElementById('lastname');
const lastname_label = document.getElementById('lastname-label');
lastname.addEventListener("input", (e) => {
    var lastname_value = e.target.value;
    if (hasRepeatedLetters(lastname_value)) {
        console.log(lastname_value)
        lastname.setCustomValidity("Please enter a lastname without repeated letters.")
        lastname_label.style.color = "red";
        lastname.style.border = "1px solid red";
    } else if (containSpecialCharacters(lastname_value)) {
        lastname.setCustomValidity("Lastname should not contains special characters.")
        lastname_label.style.color = "red";
        lastname.style.border = "1px solid red";
    } else if (containNumbers(lastname_value)) {
        lastname.setCustomValidity("Lastname should not contains numbers.")
        lastname_label.style.color = "red";
        lastname.style.border = "1px solid red";
    } else if (startInputContainSpace(lastname_value)) {
        lastname.setCustomValidity("Lastname should not start with space.")
        lastname_label.style.color = "red";
        lastname.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(lastname_value)) {
        lastname.setCustomValidity("Lastname should not end with space.")
        lastname_label.style.color = "red";
        lastname.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(lastname_value)) {
        lastname.setCustomValidity("Double spaces are not allowed.")
        lastname_label.style.color = "red";
        lastname.style.border = "1px solid red";
    } else if (!validateIfCapitalize(lastname_value)) {
        lastname.setCustomValidity("Lastname must be capitalize")
        lastname_label.style.color = "red";
        lastname.style.border = "1px solid red";
    } else {
        lastname.setCustomValidity("");
        lastname_label.style.color = "";
        lastname.style.border = "";
    }
});


// suffix validation
const suffix = document.getElementById('suffix');
const suffix_label = document.getElementById('suffix-label');
suffix.addEventListener("input", (e) => {
    var suffix_value = e.target.value;
    suffix.value = capitalizeFirstLetter(suffix_value);
    if (hasRepeatedLettersInSuffix(suffix_value)) {
        console.log(suffix_value)
        suffix.setCustomValidity("Please enter a suffix without repeated letters.")
        suffix_label.style.color = "red";
        suffix.style.border = "1px solid red";
    } else if (forSuffixValidation(suffix_value)) {
        suffix.setCustomValidity("Invalid Suffix (example format: Jr., Sr., I, II, III, IV...)")
        suffix_label.style.color = "red";
        suffix.style.border = "1px solid red";
    } else if (containSpecialCharacters(suffix_value)) {
        suffix.setCustomValidity("Suffix should not contains special characters.")
        suffix_label.style.color = "red";
        suffix.style.border = "1px solid red";
    } else if (containNumbers(suffix_value)) {
        suffix.setCustomValidity("Suffix should not contains numbers.")
        suffix_label.style.color = "red";
        suffix.style.border = "1px solid red";
    } else if (startInputContainSpace(suffix_value)) {
        suffix.setCustomValidity("Suffix should not start with space.")
        suffix_label.style.color = "red";
        suffix.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(suffix_value)) {
        suffix.setCustomValidity("Suffix should not end with space.")
        suffix_label.style.color = "red";
        suffix.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(suffix_value)) {
        suffix.setCustomValidity("Double spaces are not allowed.")
        suffix_label.style.color = "red";
        suffix.style.border = "1px solid red";
    } else {
        suffix.setCustomValidity("");
        suffix_label.style.color = "";
        suffix.style.border = "";
    }
});


//birthdate validate if the user is 18 above
const startInput = document.getElementById('birthdate');
startInput.addEventListener('change', () => {
    const startDate = new Date(startInput.value);
    const today = new Date();
    const age = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 365));
    document.getElementById('age').value = age;
    if (isNaN(age)) {
        startInput.setCustomValidity('Invalid Birthdate.');
        startInput.style.border = "1px solid red";
        document.getElementById("birthdate-label").style.color = "red";
        return;
    } else if (age < 18) {
        startInput.setCustomValidity('You must be at least 18 years old to submit this form.');
        startInput.style.border = "1px solid red";
        document.getElementById("birthdate-label").style.color = "red";
        return
    } else if (age > 100) {
        startInput.setCustomValidity('You must be at least 100 years old below to submit this form.');
    } else {
        startInput.setCustomValidity('');
        startInput.style.border = "";
        document.getElementById("birthdate-label").style.color = "";
    }
});


//mobile number validation
const mobilenumber = document.getElementById("mobilenum");
const mobilenumber_label = document.getElementById("mobilenum-label")
mobilenumber.addEventListener("input", (e) => {
    var mobilenum_value = e.target.value;
    if (startInputContainSpace(mobilenum_value)) {
        mobilenumber.setCustomValidity("Mobile number should not start with space");
        document.getElementById('mobilenum-label').style.color = "red";
        document.getElementById('mobilenum').style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(mobilenum_value)) {
        mobilenumber.setCustomValidity("Mobile number should not end with space.")
        mobilenumber_label.style.color = "red";
        mobilenumber.style.border = "1px solid red";
    }
    //  else if (containsLetters(mobilenum_value)) {
    //     mobilenumber.setCustomValidity("Mobile number don't contain strings. Please enter an mobile number value.");
    //     document.getElementById('mobilenum-label').style.color = "red";
    //     document.getElementById('mobilenum').style.border = "1px solid red";
    // } 
    else if (!validatePhilippineMobileNumber(mobilenum_value)) {
        mobilenumber.setCustomValidity("Please enter a valid Philippine mobile number. e.g +639123456789 or 09123456789");
        document.getElementById('mobilenum-label').style.color = "red";
        document.getElementById('mobilenum').style.border = "1px solid red";
    } else {
        mobilenumber.setCustomValidity("");
        document.getElementById('mobilenum-label').style.color = "";
        document.getElementById('mobilenum').style.border = "";
    }
});
mobilenumber.addEventListener('click', () => {
    mobilenumber.value = "+639";
})



// country validation
const country = document.getElementById('country');
const country_label = document.getElementById('country-label');
country.addEventListener("input", (e) => {
    var country_value = e.target.value;
    if (hasRepeatedLetters(country_value)) {
        console.log(country_value)
        country.setCustomValidity("Please enter a country without repeated letters.")
        country_label.style.color = "red";
        country.style.border = "1px solid red";
    } else if (containSpecialCharacters(country_value)) {
        country.setCustomValidity("Country should not contains special characters.")
        country_label.style.color = "red";
        country.style.border = "1px solid red";
    } else if (containNumbers(country_value)) {
        country.setCustomValidity("Country should not contains numbers.")
        country_label.style.color = "red";
        country.style.border = "1px solid red";
    } else if (startInputContainSpace(country_value)) {
        country.setCustomValidity("Country should not start with space.")
        country_label.style.color = "red";
        country.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(country_value)) {
        country.setCustomValidity("Country should not end with space.")
        country_label.style.color = "red";
        country.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(country_value)) {
        country.setCustomValidity("Double spaces are not allowed.")
        country_label.style.color = "red";
        country.style.border = "1px solid red";
    } else if (!validateIfCapitalize(country_value)) {
        country.setCustomValidity("Country must be capitalize")
        country_label.style.color = "red";
        country.style.border = "1px solid red";
    } else {
        country.setCustomValidity("");
        country_label.style.color = "";
        country.style.border = "";
    }
});



// province validation
const province = document.getElementById('province');
const province_label = document.getElementById('province-label');
province.addEventListener("input", (e) => {
    var province_value = e.target.value;
    if (hasRepeatedLetters(province_value)) {
        console.log(province_value)
        province.setCustomValidity("Please enter a province without repeated letters.")
        province_label.style.color = "red";
        province.style.border = "1px solid red";
    } else if (containSpecialCharacters(province_value)) {
        province.setCustomValidity("Province should not contains special characters.")
        province_label.style.color = "red";
        province.style.border = "1px solid red";
    } else if (containNumbers(province_value)) {
        province.setCustomValidity("Province should not contains numbers.")
        province_label.style.color = "red";
        province.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(province_value)) {
        province.setCustomValidity("Province should not end with space.")
        province_label.style.color = "red";
        province.style.border = "1px solid red";
    } else if (startInputContainSpace(province_value)) {
        province.setCustomValidity("Province should not start with space.")
        province_label.style.color = "red";
        province.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(province_value)) {
        province.setCustomValidity("Double spaces are not allowed.")
        province_label.style.color = "red";
        province.style.border = "1px solid red";
    } else if (!validateIfCapitalize(province_value)) {
        province.setCustomValidity("Province must be capitalize")
        province_label.style.color = "red";
        province.style.border = "1px solid red";
    } else {
        province.setCustomValidity("");
        province_label.style.color = "";
        province.style.border = "";
    }
});


// city validation
const city = document.getElementById('city');
const city_label = document.getElementById('city-label');
city.addEventListener("input", (e) => {
    var city_value = e.target.value;
    if (hasRepeatedLetters(city_value)) {
        console.log(city_value)
        city.setCustomValidity("Please enter a city or municipality without repeated letters.")
        city_label.style.color = "red";
        city.style.border = "1px solid red";
    } else if (containSpecialCharacters(city_value)) {
        city.setCustomValidity("City or Municipality should not contains special characters.")
        city_label.style.color = "red";
        city.style.border = "1px solid red";
    } else if (containNumbers(city_value)) {
        city.setCustomValidity("City or Municipality should not contains numbers.")
        city_label.style.color = "red";
        city.style.border = "1px solid red";
    } else if (startInputContainSpace(city_value)) {
        city.setCustomValidity("City or Municipality should not start with space.")
        city_label.style.color = "red";
        city.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(city_value)) {
        city.setCustomValidity("City or Municipality should not end with space.")
        city_label.style.color = "red";
        city.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(city_value)) {
        city.setCustomValidity("Double spaces are not allowed.")
        city_label.style.color = "red";
        city.style.border = "1px solid red";
    } else if (!validateIfCapitalize(city_value)) {
        city.setCustomValidity("City or Municipality must be capitalize")
        city_label.style.color = "red";
        city.style.border = "1px solid red";
    } else {
        city.setCustomValidity("");
        city_label.style.color = "";
        city.style.border = "";
    }
});


// purok validation
const purok = document.getElementById('purok');
const purok_label = document.getElementById('purok-label');
purok.addEventListener("input", (e) => {
    var purok_value = e.target.value;
    if (hasRepeatedLetters(purok_value)) {
        console.log(purok_value)
        purok.setCustomValidity("Please enter a purok without repeated letters.")
        purok_label.style.color = "red";
        purok.style.border = "1px solid red";
    } else if (containSpecialCharacters(purok_value)) {
        purok.setCustomValidity("Purok should not contains special characters.")
        purok_label.style.color = "red";
        purok.style.border = "1px solid red";
    } else if (startInputContainSpace(purok_value)) {
        purok.setCustomValidity("Purok should not start with space.")
        purok_label.style.color = "red";
        purok.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(purok_value)) {
        purok.setCustomValidity("Purok should not end with space.")
        purok_label.style.color = "red";
        purok.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(purok_value)) {
        purok.setCustomValidity("Double spaces are not allowed.")
        purok_label.style.color = "red";
        purok.style.border = "1px solid red";
    } else if (!validateIfCapitalize(purok_value)) {
        purok.setCustomValidity("Purok must be capitalize")
        purok_label.style.color = "red";
        purok.style.border = "1px solid red";
    } else {
        purok.setCustomValidity("");
        purok_label.style.color = "";
        purok.style.border = "";
    }
});


// barangay validation
const barangay = document.getElementById('barangay');
const barangay_label = document.getElementById('barangay-label');
barangay.addEventListener("input", (e) => {
    var barangay_value = e.target.value;
    if (hasRepeatedLetters(barangay_value)) {
        console.log(barangay_value)
        barangay.setCustomValidity("Please enter a barangay without repeated letters.")
        barangay_label.style.color = "red";
        barangay.style.border = "1px solid red";
    } else if (containSpecialCharacters(barangay_value)) {
        barangay.setCustomValidity("Barangay should not contains special characters.")
        barangay_label.style.color = "red";
        barangay.style.border = "1px solid red";
    } else if (startInputContainSpace(barangay_value)) {
        barangay.setCustomValidity("Barangay should not start with space.")
        barangay_label.style.color = "red";
        barangay.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(barangay_value)) {
        barangay.setCustomValidity("Barangay should not end with space.")
        barangay_label.style.color = "red";
        barangay.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(barangay_value)) {
        barangay.setCustomValidity("Double spaces are not allowed.")
        barangay_label.style.color = "red";
        barangay.style.border = "1px solid red";
    } else if (!validateIfCapitalize(barangay_value)) {
        barangay.setCustomValidity("Barangay must be capitalize")
        barangay_label.style.color = "red";
        barangay.style.border = "1px solid red";
    } else {
        barangay.setCustomValidity("");
        barangay_label.style.color = "";
        barangay.style.border = "";
    }
});

// street validation
const street = document.getElementById('street');
const street_label = document.getElementById('street-label');
street.addEventListener("input", (e) => {
    var street_value = e.target.value;
    if (hasRepeatedLetters(street_value)) {
        console.log(street_value)
        street.setCustomValidity("Please enter a street without repeated letters.")
        street_label.style.color = "red";
        street.style.border = "1px solid red";
    } else if (containSpecialCharacters(street_value)) {
        street.setCustomValidity("Street should not contains special characters.")
        street_label.style.color = "red";
        street.style.border = "1px solid red";
    } else if (containNumbers(street_value)) {
        street.setCustomValidity("Street should not contains numbers.")
        street_label.style.color = "red";
        street.style.border = "1px solid red";
    } else if (startInputContainSpace(street_value)) {
        street.setCustomValidity("Street should not start with space.")
        street_label.style.color = "red";
        street.style.border = "1px solid red";
    } else if (validateOneSpaceAtTheEnd(street_value)) {
        street.setCustomValidity("Street should not end with space.")
        street_label.style.color = "red";
        street.style.border = "1px solid red";
    } else if (!validateOneSpacePerWord(street_value)) {
        street.setCustomValidity("Double spaces are not allowed.")
        street_label.style.color = "red";
        street.style.border = "1px solid red";
    } else if (!validateIfCapitalize(street_value)) {
        street.setCustomValidity("Street must be capitalize")
        street_label.style.color = "red";
        street.style.border = "1px solid red";
    } else {
        street.setCustomValidity("");
        street_label.style.color = "";
        street.style.border = "";
    }
});


//zipcode
document.getElementById('zipcode').addEventListener("input", (e) => {
    const zipcode = document.getElementById("zipcode");
    const zipcode_label = document.getElementById("zipcode-label");
    const inputValue = e.target.value.trim();
    const zipcodeInt = parseInt(inputValue);
    if (zipcodeInt < 100 || zipcodeInt > 9811) {
        zipcode.setCustomValidity("Please enter a valid ZIP code");
        zipcode.style.border = "1px solid red";
        zipcode_label.style.color = "red";
    } else if (isNaN(inputValue)) {
        zipcode.setCustomValidity("Please enter a valid ZIP code");
        zipcode_label.style.color = "red";
        zipcode.style.border = "1px solid red";
    } else {
        zipcode.setCustomValidity("");
        zipcode_label.style.color = "";
        zipcode.style.border = "";
    }
})


//check password strength real time checker
document.getElementById('password').addEventListener('input', (e) => {
    var password = e.target.value;
    var strengthIndicator = document.getElementById('password-strength');
    document.getElementById('is-valid-password').innerHTML = "";
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


//check if password match and password valid
const password = document.getElementById('password');
const password_label = document.getElementById('password-label')
const confirmPassword = document.getElementById('confirmpassword');
const confirmPassword_label = document.getElementById("confirmpassword-label")
password.addEventListener('input', (e) => {
    var password_value = e.target.value;
    if (password_value === "") {
        password_label.style.color = "";
        confirmPassword.style.border = "";
        password_label.style.color = "";
        password.style.border = "";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password_value)) {
        password.setCustomValidity("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.");
        password.style.border = "1px solid red";
        password_label.style.color = "red";
    } else if (password_value !== confirmPassword.value && confirmPassword.value !== "") {
        confirmPassword.setCustomValidity("Please make sure your passwords match.");
        document.getElementById("is-valid-confirmpassword").innerHTML = "Please make sure your passwords match.";
        password.style.border = "1px solid red";
        password_label.style.color = "red";
        confirmPassword_label.style.color = "red";
        confirmPassword.style.border = "1px solid red";
    } else {
        confirmPassword.setCustomValidity("");
        password.setCustomValidity("");
        confirmPassword_label.style.color = "";
        confirmPassword.style.border = "";
        password_label.style.color = "";
        password.style.border = "";
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
    }
});
confirmPassword.addEventListener('input', (e) => {
    var confirmPassword_value = e.target.value;
    if (confirmPassword_value === "") {
        confirmPassword.setCustomValidity("");
        password_label.style.color = "";
        confirmPassword.style.border = "";
        confirmPassword_label.style.color = "";
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        password.style.border = "";
    } else if (password.value !== confirmPassword_value) {
        confirmPassword.setCustomValidity("Please make sure your passwords match.");
        document.getElementById("is-valid-confirmpassword").innerHTML = "Please make sure your passwords match.";
        password_label.style.color = "red";
        confirmPassword.style.border = "1px solid red";
        confirmPassword_label.style.color = "red";
        password.style.border = "1px solid red";
    } else {
        confirmPassword.setCustomValidity("");
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        password_label.style.color = "";
        confirmPassword.style.border = "";
        confirmPassword_label.style.color = "";
        password.style.border = "";
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
const button = document.getElementById('button');
const username = document.getElementById('username')
const username_label = document.getElementById('username-label')
username.addEventListener("input", async (e) => {
    var username_value = e.target.value;
    const response = await fetch(`/ajax/fetch.php?username=${username_value}`);
    const data = await response.json();
    if (hasRepeatedLetters(username_value)) { //validation input user
        username.setCustomValidity("Please enter a username without repeated letters.")
        username_label.style.color = "red";
        username.style.border = "1px solid red";
    } else if (username_value.includes(" ")) {
        username.setCustomValidity("Username should not contains with spaces.")
        username_label.style.color = "red";
        username.style.border = "1px solid red";
    } else if (data.ok) { //this part is if username is already exist
        username_label.style.color = "red";
        username.style.border = "1px solid red";
        button.disabled = true;
        button.style.cursor = "not-allowed";
        document.getElementById('is-valid-username').innerHTML = data.message;
    } else {
        username.setCustomValidity("");
        username_label.style.color = "";
        username.style.border = "";
        button.style.cursor = "";
        button.disabled = false;
        document.getElementById('is-valid-username').innerHTML = "";
    }
});
const email = document.getElementById('email');
const email_label = document.getElementById('email-label');
document.getElementById('email').addEventListener("input", async (e) => {
    var email_value = e.target.value;
    const response = await fetch(`/ajax/fetch.php?email=${email_value}`);
    const data = await response.json();
    if (hasRepeatedLetters(email_value)) { //validation input user
        email.setCustomValidity("Please enter a email without repeated letters.")
        email_label.style.color = "red";
        email.style.border = "1px solid red";
    } else if (data.ok) {
        email_label.style.color = "red";
        email.style.border = "1px solid red";
        button.disabled = true;
        document.getElementById('is-valid-email').innerHTML = data.message;
    } else if (!data.ok) {
        email_label.style.color = "";
        email.style.border = "";
        button.style.cursor = "";
        button.disabled = false;
        document.getElementById('is-valid-email').innerHTML = "";
    }
});





