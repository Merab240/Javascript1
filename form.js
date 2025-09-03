const fullName = document.getElementById("fullname");
const email =document.getElementById("email");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

//error variables
const fullName_error = document.getElementById("fullname_error");
const email_error = document.getElementById("email_error");
const userName_error = document.getElementById("username_error");
const password_error = document.getElementById("password_error");
const password2_error = document.getElementById("password2_error");
//form validation

form.addEventListener("submit", (e) =>{
   var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//if statement for full name input
    if (fullName.value === ""){
          e.preventDefault();
        fullName_error.innerHTML = "Name can't be empty";
        fullName_error.style.color ="red";

    }
    else{
       fullName_error.innerHTML = ""; 
    }
    //if statement for email validation

     if(email.value ===""){
        e.preventDefault();
        email_error.innerHTML ="email is required";//error message
        email_error.style.color = "red";//text style to red
    }

else if (!email.value.match(email_check)){
        e.preventDefault();// e variable. prevents the page from loading if email not equal
        email_error.innerHTML ="enter right format";//error message
        email_error.style.color = "red";//text style to red
 }
 else{
   email_error.innerHTML =""; 
 }

    //username validation
if(userName.value === ""){
        e.preventDefault();
       userName_error.innerHTML = "username can't be empty";
       userName_error.style.color ="red";

    }
    else{
       userName_error.innerHTML = ""; 
    }

    // if statement for password
 if(password.value.length <=5 ){// if the password is less or equal to 
        e.preventDefault();// e variable. prevent it from subminting
        password_error.innerHTML ="must be greater than 5 characters";//error message
        password_error.style.color = "red";//text style to red
    }

   else  if(password.value.length >8 ){// if the password is greater than 8 
        e.preventDefault();// e variable. prevent it from subminting
        password_error.innerHTML ="must be 8 characters and less";//error message
        password_error.style.color = "red";//text style to red
    }

    else if(password.value === "password"){// if the password is greater than 8 
        e.preventDefault();// e variable. prevent it from subminting
        password_error.innerHTML ="Password cannot be password";//error message
        password_error.style.color = "red";//text style to red
    }
    else{
      password_error.innerHTML = "";
    }

     if(password2.value !== password.value ){// if the password is less or equal to 
        e.preventDefault();// e variable. prevent it from subminting
        password2_error.innerHTML ="password donot match";//error message
        password2_error.style.color = "red";//text style to red
    }
    else{
       password2_error.innerHTML ="";  
    }


})





