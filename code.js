function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
	//Required. Maximum 12 characters.
 if (myContact.userName.value.length >  12 || myContact.username.value===null || myContact.username.value==="")
 	errorMessages += "<p>The username must be less than 12 characters</p>";

 validUsername =true;
 else 
 errorMessages += "<p>The username must be less than 12 characters</p>";
 console.log(validUsername);  
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true; 
/************* VALIDATES FIRST NAME ******/
//1) Create variable
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("FirstName").value;
//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname);


/************* VALIDATES LAST NAME ******/
//1) Create variable
var validLastname=false;
//2) read value from HTML
var validLastname = document.getElementById("LastName").value;

//3) Do validation
//4) Send error message to HMTL
//5) return status of each field
return (validFirstname && validLastname);

/************* VALIDATES EMAIL ******/
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
else
    return true; //Or assign the value to a variable. For example validEmail = true
/************* VALIDATES PHONE ******/
var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
//send error message. For example errorMessages = "<p>Invalid phone number </p>";
else
  return true; //Or assign the value to a variable. For example validPhone = true;

//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
else
//...
/************* VALIDATES ZIP CODE ******/
var country = document.getElementById("country").value;
if (country === "United States")                                                                                                           
// validate Zipcode according to the rules
else
//Zipcode is OK. For example: validZipcode = true;

 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword) ;
}