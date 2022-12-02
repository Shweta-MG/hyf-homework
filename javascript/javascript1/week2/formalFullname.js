/* user has the possibility to check a checkbox that indicates if the user wants to be adressed formally, and name title will be based on gender, So I decided to use 'confirm' because it is bolean, 'ok' means 'true'.*/


let useFormalName = confirm("Do you want to be addressed formally?");
let gender = confirm("Are you a male passenger?");

/* I want to user to verify name as written in passport. So decided to an alert before this*/
let passport = alert("Make sure to refer your passport for your first name and last name.");

let fullname1 = prompt("Enter your first name?", "");
let fullname2 = prompt("Enter your last name?", "");
let getFullName = (fullname1 + " " + fullname2);


if (useFormalName === true && gender === true) {
    console.log ("Lord " + getFullName );
    } else if (useFormalName === true && gender === false){
       console.log ("Lady " + getFullName);
    } else {
       console.log (getFullName);
    } 

/* Calling out empty string will give them funny names. I am sure no one wants to spent money on that*/