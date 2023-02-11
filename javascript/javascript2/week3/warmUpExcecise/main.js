// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

console.log("I am ready to learn javascript. Where is my coffee!!")
setTimeout(function () {
    console.log('After 2.5 seconds -- OMG!! What is this? Where is my coffee!!');
}, 2500);


/* 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
*/

function parametersTo(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000)
}
parametersTo(0, 'This is logged after 0 seconds');
parametersTo(3, 'This is logged after 3 seconds');
parametersTo(5, 'This is logged after 5 seconds');


/* 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
*/

const btn = document.querySelector("#button_1").addEventListener("click", function onClick() {
    setTimeout(() => {
        console.log('This is logged after 5 seconds');
    }, 5000)
})


/*
4. Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
*/

// 4.(a) = Trying arrow function here -
let earthLogger = () => 'Earth'
let saturnLogger = () => 'Saturn';
let planetLogFunction = (cb) => cb;
console.log(earthLogger())
console.log(saturnLogger())
console.log(planetLogFunction(saturnLogger()));
console.log(planetLogFunction(earthLogger()));

//4.(b) I could not figure out how to convert this function as variable.So using old ways to console

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


/* 5. Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api 
*/
let x = document.getElementById("button_2").addEventListener('click', getLocation)
let para = document.querySelector("#geoLocation")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        para.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    para.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

/*
8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!" 
*/


const btn1 = document.querySelector("#button_3").addEventListener("dblclick", function ondblClick() {
    setTimeout(() => {
        console.log('This is logged after 1 seconds when double clicked');
    }, 1000)
})


/*
9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
*/

function logFunnyJoke() {
    console.log("a funny joke.");
}

function logBadJoke() {
    console.log("a bad joke.");
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
