// Assignment Code

// Java script for password generated
//Variable  Declaration

var number = "0123456789";
var l_alph= "abcdefghijklmnopqrstuvwxyz";
var u_alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var spe_char="!@#$%^&*(|)_+-=`!~{}[]<>?\\\|\"\'\:\;,.";


var plen;// password length
var ustr,lstr,num,spechar;// boolen for confirm dialog box.
var Rchar;// random character.
var Rnum;// Random number generator.

var strlen=0;
var passwordgen='';


var passwordstring='';//password string.
var tempstring='';



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword function get the user input  and validate the user input for password.
function generatePassword()
{
      plen=prompt("enter the length of the password (length of the password 8 to 12)");
      console.log("password length:"+plen);
      

  if( (plen >= 8) && (plen <= 128) ) // checking the password lenght.
  {
      lstr= confirm("Do you want to include  any  lowercase letter in your password  ");
      console.log(lstr);
      ustr=confirm("Do you want to include any Uppercase letter in your password ");
      console.log(ustr);
      num=confirm("Do you want to include  any the numbers in your password ");
      console.log(num);
      spechar=confirm("Do you want to include any special charater in your password ");
      console.log(spechar);
 

  if( (lstr === true) && (ustr === true) && (spechar === true) && (num === true) )//1
    { 
             
             passwordgen = l_alph+u_alpha+spe_char+number;
             strlen=passwordgen.length;
             return passwordstring=passwordGenarator();   
    }  
  
    
    if( (lstr === true) && (ustr === true) && (spechar === true) && (num === false) )//2
    {
             
              passwordgen = l_alph+u_alpha+spe_char;
              strlen=passwordgen.length;
              return passwordstring=passwordGenarator();   

    }  
    
    if( (lstr === true) && (ustr === true) && (spechar === false) && (num === true) )//3
    {
             
                passwordgen = l_alph+u_alpha+number;
                strlen=passwordgen.length;
                return passwordstring=passwordGenarator();   

         
    }  
    
    if( (lstr === true) && (ustr === true) && (spechar === false) && (num === false) )//4
    {         
             
              passwordgen = l_alph+u_alpha;
              strlen=passwordgen.length;
              return passwordstring=passwordGenarator();   

         
    }  
    if( (lstr === true) && (ustr === false) && (spechar === true) && (num === true) )//5
    {
              
              passwordgen = l_alph+spe_char+number;
              strlen=passwordgen.length;
              return passwordstring=passwordGenarator();   

         
    }  
    if( (lstr === true) && (ustr === false) && (spechar === true) && (num === false) )//6
    {
              
              passwordgen = l_alph+spe_char;
              strlen=passwordgen.length;
              return passwordstring=passwordGenarator();   

    }  
    if( (lstr === true) && (ustr === false) && (spechar === false) && (num === true) )//7
    {
            
            passwordgen = l_alph+number;
            strlen=passwordgen.length;
            return passwordstring=passwordGenarator();   

    }  
    if( (lstr === true) && (ustr === false) && (spechar === false) && (num === false) )//8
    {
            
            passwordgen = l_alph;
            strlen=passwordgen.length;
            return passwordstring=passwordGenarator();   

         
    }  
    if( (lstr === false) && (ustr === true) && (spechar === true) && (num === true) )//9
    {
          
            passwordgen = u_alpha+spe_char+number;
            strlen=passwordgen.length;
            return passwordstring=passwordGenarator();   

    }  if( (lstr === false) && (ustr === true) && (spechar === true) && (num === false) )//10
    {
            
            passwordgen = u_alpha+spe_char;
            strlen=passwordgen.length;
           return passwordstring=passwordGenarator();   

         
    }  
    if( (lstr === false) && (ustr === true) && (spechar === false) && (num === true) )//11
    { 
              
              passwordgen = u_alpha+number;
              strlen=passwordgen.length;
              return passwordstring=passwordGenarator();   

         
    } 
     if( (lstr === false) && (ustr === true) && (spechar === false) && (num === false) )//12
    {
              passwordgen = u_alpha;
              strlen=passwordgen.length;
              return passwordstring=passwordGenarator();   

         
    }  
    if( (lstr === false) && (ustr === false) && (spechar === true) && (num === true) ) //13
    {
             //alert("Your password should contain atleast one lowercase or uppercase character.");

              passwordgen = spe_char+number;
              strlen=passwordgen.length;
              return passwordstring=passwordGenarator();   

         
    }  
    if( (lstr === false) && (ustr === false) && (spechar === true) && (num === false) )//14
    { 
                //alert("Your password should contain atleast one lowercase or uppercase character.");
      
                passwordgen = spe_char;
                strlen=passwordgen.length;
                return passwordstring=passwordGenarator();   

         
    } 
     if( (lstr === false) && (ustr === false) && (spechar === false) && (num === true) )//15
    {  
                  //alert("Your password should contain atleast one lowercase or uppercase character.");

                  passwordgen = number;
                  strlen=passwordgen.length;
                  return passwordstring=passwordGenarator();   

         
    }  
    if( (lstr === false) && (ustr === false) && (spechar === false) && (num === false) )//16
    {
      
                alert (" No character type are seleted to generate the password.");
                alert("Please select atleast one character type to include in your password.") ;

    }  
                  
  }
    
else //if password length is less than 8 and greater than  128 then else part will execute
{ 
            alert("Please enter the password length in number from 8 to 128.");

}

}// End function generatePassword

// PasswordGennarator function generates the password and return password.

function passwordGenarator()
{
  
    var j=0;
    console.log("passwordconcat:"+passwordgen);
    console.log("strlen:"+strlen);
    tempstring='';
          while(j<plen)
          {

               Rnum = Math.floor(Math.random()* strlen);
              //console.log("rnum:"+Rnum);
               tempstring=tempstring+passwordgen[Rnum];
               console.log("tempstring:"+tempstring);
               j++;
               console.log("j:"+j);
          }
    console.log("tempstr-len:"+tempstring.length);
    return tempstring;
}