// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("generate");
// Write password to the #password input
function generate() {
  var lowers="abcdefghijklmnopqrstuvwxyz";
  var uppers= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric="0123456789";
  var specials="!@#$%^&*";
  var password = "";
  var length= prompt("How many chracters?");
  
  if( length=== null)
  {
	  return;
  }
  else if (isNaN(length) || length <8 || length>128){
	  
	  alert("Please Enter the range between 8 and 128");
	  generate();
	  return;
  }
  
  var includeLower= confirm("lowercase?");
  var includeUpper= confirm("upper?");
  var includeNumeric= confirm("numeric?");
  var includeSpecial = confirm("special characters?");
  
  if(!includeLower && !includeUpper && !includeNumeric && !includeSpecial)
  {
	  alert("at least one type");
	  generate();
	  return;
  }
  var chars="";
 if(includeLower)
	 chars+=lowers;
 if(includeUpper)
	 chars+=uppers;
 if(includeNumeric)
	 chars+=numeric;
 if(includeSpecial)
	 chars+=specials;
 
  for(var i=0; i<length;i++)
  {
	  password += chars[Math.floor(Math.random()*chars.length)];
  }
  console.log(password);
  document.getElementById("password").innerHTML=password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
	
	generate();
});
