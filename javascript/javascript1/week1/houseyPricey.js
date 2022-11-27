//Housey pricey (A house price estimator)

//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//Peter's house cost evaluation. 

const width = 8;
const depth = 10;
const height = 10;
const houseVolume = width * depth * height;

const gardenArea = 100;

let housePrice = (houseVolume * 2.5 * 1000) + (gardenArea * 300);
let priceDifference = (2500000 - housePrice)

if (housePrice < 2500000) {
    console.log( "Peter's house actual price is " + housePrice + " but he is paying " + priceDifference + " more.");    
} else {
    console.log( "Peter's house actual price is " + housePrice + " but he is paying " + priceDifference + " less.");    
}



// Julia's house cost evaluation. 

const hWidth = 5;
const hDepth = 11;
const hHeight = 10;
const juliaHouseVolume = hWidth * hDepth * hHeight;
const gArea =  70;

let juliaHousePrice = (juliaHouseVolume * 2.5 * 1000) + (gArea * 300);
let JuliaPriceDifference = ( juliaHousePrice - 1000000);



if (juliaHousePrice < 1000000) {
    console.log( "Julia's house actual price is " + juliaHousePrice  + " but she is paying " + JuliaPriceDifference + " more."); 
    
} else {
    console.log( "Julia's house actual price is " + juliaHousePrice  + " but she is paying " + JuliaPriceDifference + " less.");     
}
