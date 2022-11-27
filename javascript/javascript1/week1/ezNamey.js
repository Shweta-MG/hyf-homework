//Ez Namey (Startup name generator) Optional
let firstWords = [ "Øl", "kaffe", "hygge", "solen", "vin", "viking", "Danmark", "dansk", "venlig", "varme" ];
let secondWords = ["velkommende", "læring", "indblik", "hårdarbejde", "qarma", "danskprøve", "skøn", "dejlig", "lækert", "glad"];
let randonFirstWords = firstWords[Math.floor(Math.random() * 10)];
let randonSecondWords = secondWords[Math.floor(Math.random() * 10)];
let startupName = randonFirstWords + " " + randonSecondWords;
startupNameLength = startupName.length
console.log("'The startup: " + "\'" + startupName + "\'" +" contains " + startupNameLength + " characters.'");
