// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
/*
console.log("I am ready to learn javascript. Where is my coffee!!")
setTimeout(function () {
    console.log('After 2.5 seconds -- OMG!! What is this? Where is my coffee!!');
}, 2500);

*/

/* 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function parametersTo(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000)
}
parametersTo(0, 'This is logged after 0 seconds');
parametersTo(3, 'This is logged after 3 seconds');
parametersTo(5, 'This is logged after 5 seconds');

*/

/* 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const btn = document.querySelector("#button_1").addEventListener("click", function onClick() {
    setTimeout(() => {
        console.log('This is logged after 5 seconds');
    }, 5000)
})

*/

/*
4. Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
*/1
/*
let earthLogger = () => 'Earth'
let saturnLogger = () => 'Saturn';
let planetLogFunction = (cb) => cb;
console.log(earthLogger())
console.log(saturnLogger())
console.log(planetLogFunction(saturnLogger()));
console.log(planetLogFunction(earthLogger()));


function earthLogger() {
    console.log('Earth is beautiful');
}

function saturnLogger() {
    console.log('Saturn is mesmerising');
}

function planetLogFunction(cb) {
    cb;
}

planetLogFunction(earthLogger());
planetLogFunction(saturnLogger());

*/

/* 5. Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api 
*/
let x = document.getElementById("button_2").addEventListener('click', getLocation)
/*
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
} 
*/


let _position;

function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

let onSuccess = function (position) {
    _position = position;
};

function onError(error) {
    alert('Error: ' + error.message);
}