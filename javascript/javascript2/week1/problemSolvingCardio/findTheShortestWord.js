const danishWords = ["bil", "plante", "kaffe", "bog", "planetarium", "ø"];



// sort array according to string length

const shortesdWord = danishWords.sort(function(a, b){return a.length - b.length});

// To get array ordered as per length
console.log(shortesdWord);

// get first element of the array
console.log(shortesdWord[0]);

//get longest word in the list
console.log(shortesdWord[shortesdWord.length - 1]);