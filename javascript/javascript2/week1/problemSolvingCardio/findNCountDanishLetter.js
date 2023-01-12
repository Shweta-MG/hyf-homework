const danishString = "Jeg har en blå bil";
//notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

const danishString3 = "19-årige Jakob fra København skal spille VM for USA";

function individualChar(danishString) {
    let count = 0;
    let countå = 0;
    let countø = 0;
    let countæ = 0;
    let output = {
        total: count,
        å: countå,
        ø: countø,
        æ: countæ,
      }; 

      for (let i = 0; i < danishString.length; i++) {
        const stringsIndex = danishString[i];
        if (stringsIndex === "å") {
          count++;
          countå++;
          output.å = countå;
    
        } else if (stringsIndex === "ø") {
          count++;
          countø++;
          output.ø = countø;

        } else if (stringsIndex === "æ") {
          count++;
          countæ++;
          output.æ = countæ;
        }

        output.total= count;
    }
   
    return output;
    }

console.log(individualChar(danishString));
console.log(individualChar(danishString2));
console.log(individualChar(danishString3));