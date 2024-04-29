let loginUserName= document.getElementById("loginUserName");
let loginPassword= document.getElementById("loginPassword");
let registerUserName = document.getElementById("registerUserName");
let registerEmail = document.getElementById("registerEmail");
let registerPassword = document.getElementById("registerPassword");
let birthDay = document.getElementById("birthDay");
let register = document.getElementById("register");
let logIn = document.getElementById("logIn");
let loginAlert = document.getElementById("loginAlert");
let errorAlert= Array.from(document.getElementsByClassName("alert"))
let logedIn="";
let usersContainer=[];
const userNameValidate = /^[a-zA-Z0-9_]{2,20}$/gm;
const emailValidate =/^(?:[a-z0-9._%+-]+)@gmail\.com$/gm;
const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;

register.addEventListener("click", addUser);
  
function addUser(){
      let  userinfo ={
       userName: registerUserName.value.trim(),
       email: registerEmail.value.trim(),
       password: registerPassword.value.trim(),
       birthDay: birthDay.value.trim()
      } ;
   if(validation()== true){
     usersContainer.push(userinfo); 
     localStorage.setItem("users", JSON.stringify(usersContainer));
     window.location.reload()
     alert("one more step! you have to login now to continue your interesting shopping")
      window.scrollTo({
        top:0,
      })
   }else{
    errorAlert.map((e)=>{
      e.classList.add("alert-block");
    });
    registerUserName.classList.add("is-invalid");
    registerPassword.classList.add("is-invalid");
    registerEmail.classList.add("is-invalid");

   }
      localStorage.setItem("users", JSON.stringify(usersContainer));
        clearInp();
  }
  function clearInp(){
        registerUserName.value ="";
        registerEmail.value="";
        registerPassword.value="";
        birthDay.value="";
        loginUserName.value="";
        loginPassword.value="";
        
  };



logIn.addEventListener("click", checkUser)
function checkUser(){
  let  usersData= JSON.parse(localStorage.getItem("users"));
   let existedUser = usersData.find((element)=> {return element.userName == loginUserName.value.trim() && element.password == loginPassword.value})
   if(existedUser){
      window.location = "index.html";
      logedIn = "logedIn";
      localStorage.setItem("logedIn",JSON.stringify(logedIn))
   }else{
    loginAlert.classList.add("alert-block");
    loginUserName.classList.add("is-invalid");
    loginPassword.classList.add("is-invalid");
 }
  
   clearInp()
  }  
function validation(){
  if(( userNameValidate.test(registerUserName.value)== true) && ( emailValidate.test(registerEmail.value)== true)&& ( passwordValidate.test(registerPassword.value)==true)){
    return true;
  }
  else{
    return false;
  }
}
