
/* I am trying to make it if-- else if loop, bacause I can notice so many checks. It worked okay. */

const class07Students = [];
function addStudentToClass(studentName) { 
    /* This first condition to check entry of empty string. I was trying to limit minimum letters to 3 here. But did nto suceeded. I will do littl emore google search about it, or check if it part of only HTML form or can it be done here also. */ 

        if (studentName.length == 0) {
            console.log("Please enter valid name.");            
        } 
    
    /* This is to check already exist entry in array.  */  

        else if (class07Students.includes(studentName)) {
            console.log( studentName + " already existed in class 07");          
        } 

    /* This is to give place to "Queen" in class, even though all 6 places are full. She got the 7th place. I was trying if I can take random student out. YEs, that can be done. But I know "Queen" in Denmark will not like it :P */

        else  if (studentName == "Queen" && class07Students.length >= 6 ) {
            class07Students.push(studentName);
            console.log(class07Students);                
        }
    /* This is to limit class strength to 6 students.  */
   
        else if (class07Students.length < 6) {
            class07Students.push(studentName);
            console.log(class07Students);  
        } 
        
        else {
         console.log("Cannot add more students to class 07");              
        }
    }

/* I am getting number of student 0, because original array is actually empty. I need to figure out, why it is not working. */   
    function getNumberOfStudents() {
    return class07Students.length ;
}
console.log("Number of students " + getNumberOfStudents() );


console.log(addStudentToClass(""));
console.log(addStudentToClass("Denmark"));
console.log(addStudentToClass("Finland"));
console.log(addStudentToClass("Germany"));
console.log(addStudentToClass("Chille"));
console.log(addStudentToClass("Netherlands"));
console.log(addStudentToClass("Island"));
console.log(addStudentToClass("USA"));
console.log(addStudentToClass("USA"));
console.log(addStudentToClass("Denmark"));
console.log(addStudentToClass("Queen"));
