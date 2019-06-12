function validateForm() {
  var first = document.myForm.first.value;
  var last = document.myForm.last.value;
  var email = document.myForm.email.value;
  var number = document.myForm.number.value;
  var address1 = document.myForm.address1.value;
  var address2 = document.myForm.address2.value;
  var city = document.myForm.city.value;
  var state = document.myForm.state.value;
  var number2 = document.myForm.number2.value;
  var psw = document.myForm.psw.value;
  var vpsw = document.myForm.vpsw.value;

  var mail =/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,5}){2,18})$/;
  var phone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/; 


   if(first == "") {
    document.getElementById("p1").innerHTML="FirstName cannot be blank";
    document.getElementById("input1").style.border="1px solid red";
    document.getElementById("name1").style.color="red";
  }
else {
}
  if (last == "") {
    document.getElementById("p2").innerHTML="LastName cannot be blank";
    document.getElementById("input2").style.border="1px solid red";
    document.getElementById("name2").style.color="red";  
  }
else {
}
  if (email == "") {
    document.getElementById("p3").innerHTML="Email cannot be blank";
    document.getElementById("input3").style.border="1px solid red";
    document.getElementById("email").style.color="red";    
  }
 else {
}

  if (number == "") {
    document.getElementById("p4").innerHTML="PhoneNumber cannot be blank";
    document.getElementById("input4").style.border="1px solid red";
    document.getElementById("phone").style.color="red";   
  }
 else {
}
  if (address1 == "") {
    document.getElementById("p5").innerHTML="Street cannot be blank";
    document.getElementById("input5").style.border="1px solid red";
    document.getElementById("street1").style.color="red";   
  }
else {
}
  if (address2 == "") {
    document.getElementById("p6").innerHTML="Street Address cannot be blank";
    document.getElementById("input6").style.border="1px solid red";
    document.getElementById("street2").style.color="red";   
  }
else {
}
  if (city == "") {
    document.getElementById("p7").innerHTML="City cannot be blank";
    document.getElementById("input7").style.border="1px solid red"; 
    document.getElementById("city").style.color="red";  
  }
else {
}
  if (state == "") {
    document.getElementById("p8").innerHTML="State can't be blank";
    document.getElementById("input8").style.border="1px solid red"; 
    document.getElementById("state").style.color="red";  
  }
else {
}
  if (number2 == "") {
    document.getElementById("p9").innerHTML="Zipcode cannot be blank";
    document.getElementById("input9").style.border="1px solid red"; 
    document.getElementById("zipcode").style.color="red";  
  }
else {
}
  if (psw == "") {
    document.getElementById("p10").innerHTML="Password cannot be blank";
    document.getElementById("input10").style.border="1px solid red";
    document.getElementById("password").style.color="red";   
  }
else {
}
   if (vpsw == "") {
    document.getElementById("p11").innerHTML="Verify Password cannot be blank";
    document.getElementById("input11").style.border="1px solid red";
    document.getElementById("vpassword").style.color="red";
  }
  return false;
}
