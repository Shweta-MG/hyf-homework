const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

console.log(
  danishWords.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)

// find longest string in array

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
function sortByLength (danishWords) {
    return danishWords.sort((x,y) => x.length - y.length);
 }
 
 console.log(sortByLength(danishWords));
