//declare variables
let name1 = "  ";
let toDoList = [];
let a = 10;
let b = 12;

function getReply(command){

//general greeting message
if (command.includes ("hello", "hey")) {
    return "Hello! Welcome home."
} 

else if (command.includes("I am ")){
    return "Hello! Nice to meet you."
}

//personal greeting message
else if (command.includes("name"))
{   
    name1 = command.split(" ").pop();
    return "Hello " + name1 + " Welcome home!! How was your day?"
}

//answer the question    
else if (command.includes ("What is my name") || command.includes("remember")) {
    return name1
}

//Empty string    
else if (command === " ") {
    return "Hi there!! May I know your name"
}

//update to-do list
else if (command === "Add fishing to my todo") {
    toDoList.push("fishing");
    return toDoList[0] + " added to your todo List."
}

else if (command === "Add singing in the shower to my todo") {
    toDoList.push("singing in the shower");
    return toDoList[1] + " added to your todo List."
}

else if (command === "Add shopping to my todo") {
    toDoList.push("shopping");
    return toDoList[2] + " added to your todo List."
}

//recollection of todoList
else if (command === "Number of activities on my todo List"){
    return "You have " + toDoList.length + " activities to do."
}

else if (command === "First thing to do today"){
    return "You have " + toDoList[0] + " first to do today."
}

else if (command === "Second thing to do today"){
    return "You have " + toDoList[1] + "  second thing to do today."
}

//remove items from to-do list

else if (command === "Remove fishing from my todo") {
    const indexOfFishing = toDoList.splice(toDoList.indexOf("fishing"), 1);
    return "Removed " + indexOfFishing + " from your todoList."
}

// date today
else if (command.includes("date")){
    return "date is " + new Date().toISOString().slice(0, 10);  
}

else if (command.includes("day of month")) {

    let day = new Date().getDate();
    
    let monthOfYear = ['january','february','march','april','may','june','july','august','september','november','december']
    let month = new Date().getMonth() +1;
    month = monthOfYear[month];


    let year = new Date().getFullYear();
    return day+ ". day" + " of " + month + " month of" +  year +"."
}

