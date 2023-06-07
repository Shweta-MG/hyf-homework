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