'use strict';
let average = 0;
let sum = 0;

if(process.argv.length === 2){
    console.log('Please enter valid input'); 
    return
} else {
    for (let j = 2; j < process.argv.length; j++) {
        // console.log(j + ' -> ' + (process.argv[j]));
        if (typeof (parseInt(process.argv[j])) !== 'number') {
            console.log ('Please enter valid input number');
        } else {
            sum += parseInt(process.argv[j]);
        }
     };     
     average = sum / (process.argv.length - 2);
    }  
    
console.log(average.toFixed(2));