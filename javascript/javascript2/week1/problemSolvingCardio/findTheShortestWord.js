const danishWords = ["bil", "plante", "kaffe", "bog", "planetarium", "ø"];



// sort array according to string length

const shortesdWord = danishWords.sort(function(a, b){return a.length - b.length});

// To get array ordered as per length
console.log(shortesdWord);

// get first element of the array
console.log(shortesdWord[0]);

//get longest word in the list
console.log(shortesdWord[shortesdWord.length - 1]);


/* 

I wrote this programme and for some reason, it is giving me 'bil' as shortest word.


function shortesdWord(danishWords) {
  let smallestStr = danishWords[0].length
  let smallestDanishWord = danishWords[0]
  for (let j = 0; j < danishWords.length; j++){
    let smallestdanskOrd = danishWords[j].length;
    if (smallestdanskOrd < smallestStr){
      smallestDanishWord = danishWords[j];
      smallestStr = smallestDanishWord ;
    }
    return smallestDanishWord;
  }
}

console.log(shortesdWord(danishWords));

*/


