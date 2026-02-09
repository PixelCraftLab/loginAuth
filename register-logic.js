let registeremail = document.getElementById("ine");
let registerpassword = document.getElementById("inp");

// let loginemail =document.getElementById("loine");
// let loginpassword = document.getElementById("loinp");

let registerbtn = document.getElementById("register");

function register(){
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
