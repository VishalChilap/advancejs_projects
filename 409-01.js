function validation(e){
    e.preventDefault();
    var first_name=document.getElementById('first_name').value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var telephone = document.getElementById("telephone").value;
    
    var first_namecheck=/^[0-9A-Za-z. ]{3,16}$/;
    var last_namecheck = /^[A-Za-z. ]{3,30}$/;
    var passwordcheck = /^(?=.*d)(?=.*[a-zA-Z]).{6,20}$/;
    var emailcheck = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var telephonecheck =
      /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;

    if(first_namecheck.test(first_name)){
        document.getElementById('firsterror').innerHTML ="";
    }
    else {
        document.getElementById('firsterror').innerHTML ="** First name is invalid";
    }
      if (last_namecheck.test(last_name)) {
        document.getElementById("lasterror").innerHTML = "";
      } else {
        document.getElementById("lasterror").innerHTML =
          "** Last name is invalid";
      }
       if (emailcheck.test(email)) {
         document.getElementById("emailerror").innerHTML = "";
       } else {
         document.getElementById("emailerror").innerHTML =
           "** Email is invalid";
       }
       if (emailcheck.test(email)) {
         document.getElementById("emailerror").innerHTML = "";
       } else {
         document.getElementById("emailerror").innerHTML =
           "** Email is invalid";
       }
       if (passwordcheck.test(password)) {
         document.getElementById("passerror").innerHTML = "";
       } else {
         document.getElementById("passerror").innerHTML = "** Password is invalid";
       }
       if(telephonecheck.test(telephone)){
        document.getElementById("telephoneerror").innerHTML="";
       }
       else {
        document.getElementById("telephoneerror").innerHTML = "**Password is invalid";
       }
       
}



document.getElementById("submit").addEventListener("keyup",validation);