const travelInformation = {
    speed: 50,
    destinationDistance: 500,
};

/* Let's calculate total travel time in advance. I think, this will make codes easy to understand. */
let totalTravelTime = ((travelInformation.speed)/60) * (travelInformation.destinationDistance);

//console.log(travelInformation.speed);
//console.log(travelInformation.destinationDistance); 
//console.log(totalTravelTime);

/*Considering that the same codes might be used for other travel time estimation, I am writing codes for more than and less than an hour long travel. */

function toHoursAndMinutes() { if (totalTravelTime < 60) {
    console.log("You will reach distination in " + totalTravelTime + " minutes.");
    } else { const hours = Math.floor( totalTravelTime/ 60);
    const minutes = Math.floor( totalTravelTime % 60);
    console.log("You will reach distination in " + hours + " hr " + minutes + " mins.")

    }    
}
toHoursAndMinutes();


//This solution is updated as per comments

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

                                       
/* Let's calculate total travel time in advance. I think, this will make codes easy to understand. */
let totalTravelTime = ((travelInformation.speed)/60) * (travelInformation.destinationDistance);
const travelTime = notThisFunctionName(travelInformation)
/*Considering that the same codes might be used for other travel time estimation, I am writing codes for more than and less than an hour long travel. */

function notThisFunctionName(travelInformation) { if (totalTravelTime < 60) {
    return ("You will reach distination in " + totalTravelTime + " minutes.");
    } else { const hours = Math.floor( totalTravelTime/ 60);
    const minutes = Math.floor( totalTravelTime % 60);
    return ("You will reach distination in " + hours + " hr " + minutes + " mins.")

    }    
}
console.log(travelTime);

