let registeremail = document.getElementById("ine");
let registerpassword = document.getElementById("inp");

// let loginemail =document.getElementById("loine");
// let loginpassword = document.getElementById("loinp");

let registerbtn = document.getElementById("register");

function register(e){
    e.preventDefault();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(registeremail.value)) {
        alert("Invalid Email");
        return;
    }

    if (!passwordRegex.test(registerpassword.value)) {
        alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        return;
    }
    localStorage.setItem("email", registeremail.value);
    localStorage.setItem("password", registerpassword.value);
    alert("Registered Successfully");
}


registerbtn.addEventListener("click", register);

// function login(){
//     let storedemail= localStorage.getItem("email");
//     let storedpassword= localStorage.getItem("password");
//    console.log(storedemail)
   
//     if (storedemail === loginemail.value && storedpassword === loginpassword.value){
//         alert("Login Successful");
//     } else {
//         alert("Invalid Credentials");
//     }   

// }

// let loginbtn = document.getElementById("login");

// loginbtn.addEventListener("click", login);
