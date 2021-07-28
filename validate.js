// Validation for the name, email, and the checkbox within the form.

function validateName (e) {
    e.preventDefault();
    let errorName = document.getElementById('nameError');
    let name = document.getElementById('name');
    if (name.value === "") {
        errorName.style.display = 'inline';
        name.style.border = '1px solid red';
        return false;
    } 
    errorName.style.display = 'none';
    name.style.border = 'none';
    return true;
}

function validateEmail (e) {
    e.preventDefault();
    let errorEmail = document.getElementById('emailError')
    let email = document.getElementById('email');
    if (email.value === "" || !email.value.includes("@")) {
        errorEmail.style.display = 'inline';
        email.style.border = '1px solid red';
        return false;
    }
    errorEmail.style.display = 'none';
    email.style.border = 'none';
    return true;
}

function validateCb () {
    let errorCb = document.getElementById('cbError')
    let cb = document.getElementById('checkbox');
    let forGigs = document.getElementById('for-gigs');
    let forLessons = document.getElementById('for-lessons');
    let forComp = document.getElementById('for-comp');
    let forOther = document.getElementById('for-other');
    if (forGigs.checked == false && forLessons.checked == false && forComp.checked == false && forOther.checked == false) {
        errorCb.style.display = 'inline';
        cb.style.border = '1px solid red';  
        return false;
    } else if (forGigs.checked === true || forLessons.checked === true || forComp.checked === true || forOther.checked === true) {
        errorCb.style.display = 'none';
        cb.style.border = 'none';
    }
    return true;
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', validateName);
submitBtn.addEventListener('click', validateEmail);
submitBtn.addEventListener('click', validateCb);

// Retrieve Information and display it below the form.

const displayValues = function(e) {
    const form = document.getElementsByClassName('form')[0];
    let formInfo = document.getElementById('formInfo');
    const name = document.getElementById('name');
    const email = document.getElementById('email');    
    const nameValue = name.value;
    const emailValue = email.value;
    e.preventDefault();
    if (validateName(e) == true && validateEmail(e) == true && validateCb() == true) {
        formInfo.style.display = 'block'
        formInfo.innerHTML = 'Thank you ' + nameValue + ' I will be returning a message to ' + emailValue + 'as soon as I can!';
    }
}

submitBtn.addEventListener('click', displayValues);