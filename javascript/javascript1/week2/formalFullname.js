/* user has the possibility to check a checkbox that indicates if the user wants to be adressed formally, and name title will be based on gender, So I decided to use 'confirm' because it is bolean, 'ok' means 'true'.*/

/*

let useFormalName = confirm("Do you want to be addressed formally?");
let gender = confirm("Are you a male passenger?");

I want to user to verify name as written in passport. So decided to an alert before this

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
    
*/

/* Calling out empty string will give them funny names. I am sure no one wants to spent money on that*/

let useFormalName;
let chooseGender;
let fullname1;
let fullname2;

const getFullName = (fullname1, fullname2, useFormalName, chooseGender) => {
   if (fullname1.trim() === '' || fullname1.trim() === '') {
      return `Please provide valid input`;      
   }
   else {
      if (useFormalName) {
         if (chooseGender === 'Male') {
            let fullname = `Lord ${fullname1} ${fullname2}`;
            return fullname;
         }
         else if (chooseGender === 'Female')
         {
            let fullname = `Lady ${fullname1} ${fullname2}`;
            return fullname;         
         }
         else
         {
            let fullname = `Dear ${fullname1} ${fullname2}`;
            return fullname;
         }
      }
      else
      {
         let fullname = `${fullname1} ${fullname2}`;
         return fullname;
      }      
   }
}

console.log(getFullName('Sandy', 'Thomas', true, 'Male'));
console.log(getFullName('Shweta', 'Malav', true, 'Female'));
console.log(getFullName('Shweta', 'Malav', true));
console.log(getFullName('Shweta', 'Malav'));
console.log(getFullName('', '', true, 'Male'));
console.log(getFullName(' ', ' ', true, 'Male'));