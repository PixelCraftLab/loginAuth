let loginemail =document.getElementById("loine");
let loginpassword = document.getElementById("loinp");

let loginbtn = document.getElementById("login");

loginbtn.addEventListener("click", function (e) {
    e.preventDefault();
    login();
});

function login(){ 
    
    let storedemail= localStorage.getItem("email");
    let storedpassword= localStorage.getItem("password");
    // console.log(storedemail,storedpassword)
   
    if (storedemail === loginemail.value && storedpassword === loginpassword.value){
        alert("Login Successful");
        window.location.href = "final.html"; 
        
    } else {
        alert("Invalid Credentials");
        
    }   

    
}