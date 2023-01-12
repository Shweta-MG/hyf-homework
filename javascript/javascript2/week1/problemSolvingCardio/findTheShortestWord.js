const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

console.log(
  danishWords.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)

let shortestWord = danishWords.reduce(
  function  (a,b) {
    if (a.length <= b.length){
      return a;
    }  
  }
)


// find longest string in array
// It is not part of the homework. I doing it for prectice.
function notThisFunctionName(danishWords)
  {
    let maxStr = danishWords[0].length;
    let ans = danishWords[0];
    for (let i = 1; i < danishWords.length; i++) {
        let maxi = danishWords[i].length;
        if (maxi > maxStr) {
            ans = danishWords[i];
            maxStr = maxi;
        }
    }
    return ans;
}

console.log(notThisFunctionName(danishWords));

// sort array according to string length
// It is not part of the homework. I doing it for prectice.
function sortByLength (danishWords) {
    return danishWords.sort((x,y) => x.length - y.length);
 }
 
 console.log(sortByLength(danishWords));
