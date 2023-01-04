let clothesToWear = " ";
function daysTemperarure(temp){
if (temp < -30){ return "I appreciate that you want to go out for errand. Remember to wear warm fleece lined jacket with marino wool sweater and heattach undergarments. Cover nose, ear and head properly. Have a good time";
} 
else if ( temp <= -10){ return " It's perfect time to go for walk. Remeber to wear thich warm jacket with one extra layer of warmer."; 
} 
else if (temp < 0) { return  "Warm fleece lines jacket with once extra marino wool sweater.";   
} 
else if (temp <= 10) { return  "It's cold. Wear warm jacket.";
} 
else if (temp <= 20) { return   " It's time to carry a light jacket with you. You might need it.";     
} 
else { return "Sun is shining. Time to go to beach. Wear some summer clothes.";
}
}

console.log(daysTemperarure(7));
