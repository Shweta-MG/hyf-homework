//Ez Namey (Startup name generator) Optional
let firstWords = ["Øl",
    "kaffe",
    "hygge",
    "solen",
    "vin",
    "viking",
    "Danmark",
    "dansk",
    "venlig",
    "varme"
];

let secondWords = ["velkommende",
    "læring",
    "indblik",
    "hårdarbejde",
    "qarma",
    "danskprøve",
    "skøn",
    "dejlig",
    "lækert",
    "glad"
];

let randomFirstWords = firstWords[Math.floor(Math.random() * 10)];

let randomSecondWords = secondWords[Math.floor(Math.random() * 10)];

let startupName = `${randomFirstWords} ${randomSecondWords}`;

let startupNameLength = startupName.length

let print = `The startup: '${startupName}' contains ${startupNameLength} characters.`

console.log(print);


/*
console.log("'The startup: " + "\'" + startupName + "\'" + " contains " + startupNameLength + " characters.'");

let startupName = randomFirstWords + " " + randomSecondWords;
*/

