// define arrays for creating spirit animal name - color + adjective + noun
// I am making them global variable for better tracking of codes. 

const color = [
    "Ivory",
    "Beige",
    "White",
    "Tan",
    "Khaki",
    "Silver",
    "Gray",
    "Ebony",
    "Yellow",
    "Orange",
    "Blue",
    "Azure",
    "Cyan",
    "Aquamarine",
    "Teal",
    "Green",
    "Olive",
    "Chartreuse",
    "Lime",
    "Golden",
    "Bronze",
    "Coral",
    "Salmon",
    "Pink",
    "Fuchsia",
    "Puce",
    "Mauve",
    "Lavender",
    "Plum",
    "Indigo",
    "Maroon",
    "Crimson",
    "Black",
    "Purple",
    "Red",
    "Blue",
    "Violet"
];

const adjective = [
    "Determined",
    "Encouraging",
    "Assured",
    "Credible",
    "Loving",
    "Delightful",
    "Intellectual",
    "Articulate",
    "Delightful",
    "Self-Assured",
    "Assertive",
    "Fair",
    "Incredible",
    "Clever",
    "Daring",
    "Remarkable",
    "Unparalleled",
    "Resplendent",
    "Calm",
    "Intuitive",
    "Contemplative",
    "Supportive",
    "Astounding",
    "Benevolent",
    "Effervescent",
    "Venturous"
];

const noun = [
    "Bullfrog",
    "Toad",
    "Treefrog",
    "Frog",
    "Spadefoot",
    "Peeper",
    "Salamander",
    "Newt",
    "Waterdog",
    "Ensatina",
    "Siren",
    "Hellbender",
    "Mudpuppy",
    "Amphiuma",
    "Crow",
    "Goldfinch",
    "Robin",
    "Oriole",
    "Kingfisher",
    "Magpie",
    "Chickadee",
    "Jay",
    "Cowbird",
    "Waxwing",
    "Raven",
    "Yellowthroat",
    "Bluebird",
    "Meadowlark",
    "Phoebe",
    "Starling",
    "Grosbeak",
    "Kinglet",
    "Lark",
    "Finch",
    "Sparrow",
    "Wren"
];

// Declare variables 
const button = document.querySelector(".clickButton"); //'click me' button
const reloadPage = document.querySelector(".reload"); //'Reload' button
const input = document.querySelector("#name"); 

// Div class to appendChild
const labelContainer = document.querySelector(".labelContainer");
const outPut = document.createElement("P");
labelContainer.appendChild(outPut);


// Gernerate spirit animal name (I first generated it as a variable)
//console.log(spiritAnimal);
function spiritAnimalName(){
    let spiritAnimal = color[Math.floor(Math.random() * color.length)] + " " + adjective[Math.floor(Math.random() * adjective.length)] + " " + noun[Math.floor(Math.random() * noun.length)];
    return spiritAnimal;
}

// input - empty string or string
// button click and generate name of spirit animal
// button click me gives oppurtunity to re-generate spirit animal name 
// spirit animal name is shown here  :- Peter: Peter - The crying butterfly 

function onclick(event){
    let spirit = spiritAnimalName();
    if (input.value !== ""){
        outPut.innerHTML = input.value + " : " + input.value + " - " +  spirit;
        button.innerHTML = "Take another chance"
    } else {
        outPut.innerHTML = "Please enter your name"
    }
}

button.addEventListener ('click', onclick);


// button reload the page
function reloadWindow(event) {
    window.location.reload();    
}

reloadPage.addEventListener('click', reloadWindow)