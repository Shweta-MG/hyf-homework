const danishString = "Jeg har en blå bil"; 

const danishString2 = "Blå grød med røde bær"; 

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
        if (danishString[i] === "å") {
          count++;
          countå++;
          output.å = countå;
    
        } else if (danishString[i] === "ø") {
          count++;
          countø++;
          output.ø = countø;

        } else if (danishString[i] === "æ") {
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