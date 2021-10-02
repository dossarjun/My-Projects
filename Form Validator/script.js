const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const togglePassword = document.getElementById("toggle-password");
// const button = document.querySelector("button")



function showError(input, message) {
    const formControl = input.parentElement;
    // console.log(formControl);
    formControl.classList.add("form-control", "error");
    const small = formControl.querySelector("small");
    console.log(small);
    small.innerText = message;

}

function showSuccess(input) {
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.classList.add("form-control", "success");

}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } 
    else {
        showError(email, `email is not valid`)
    }
}

//checkrequired function

function checkRequired(array) {
    array.forEach( function (input) {
        // console.log(input.value);
        if(input.value.trim()==="") {
            showError(input, ` ${inputfield(input)} is mandatory`);
        } 
        else {
            showSuccess(input);
        }
        
    });
}


// check length function

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${inputfield(input)} should be minimum ${min} characters`)
    }
    else if (input.value.length > max) {
        showError(input, `${inputfield(input)} can be maximum ${max} characters`)

    }
    else {
        showSuccess(input)
    }
    
}

// password match function

function checkPasswords(input1, input2) {
    if(input1.value===input2.value){
        showSuccess(input)
    }
    else{
        showError(input2, `passwords do not match`)
    }
}

function inputfield(input) {
     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    
}

function toggleClicked() {  
    if (this.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
    password.classList.toggle('visible'); 
  }
  

// event listener

const submit = form.addEventListener("submit", function(e) {
    e.preventDefault();

 checkRequired([username,email,password,password2]);
 checkLength(username, 3);
 checkLength(password, 6, 25);
 checkEmail(email);
 checkPasswords(password, password2)
})

togglePassword.addEventListener("click", toggleClicked);