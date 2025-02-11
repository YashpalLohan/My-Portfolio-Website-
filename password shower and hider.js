let eyeicon = document.getElementById ("eye-icon") ;
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if (password.type == "password" ){
    password.type = "text";
    eyeicon.src = "/Password Shower-Hide/Images/eye-open.png"
    }else{
    password.type = "password";
    eyeicon.src = "/Password Shower-Hide/Images/eye-close.png"
    }
}