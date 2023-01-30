//declare variables
let name1 = "  ";
let toDoList = [];

// number declared as global variable for simple math part. 
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

//set timer
else if (command.includes("minute")) {
    let minute = 1
    const timerMinute = minute * 60 * 1000 //converting into milisecond
    setTimeout(()=> {
        console.log("Timer finished for 1 minute");
    }, timerMinute );    
    return "Timer is set for " + minute + " minute."
}   

else if (command.includes("second")) {
    let second = 10
    const timerSecond = second * 1000 //converting into milisecond
    setTimeout(()=> {
    console.log("Timer finished for 10 seconds");
    }, timerSecond );
    return "Timer is set for " + second + " seconds."
}

//do simple maths
//I will try to write better way. 
else if (command.includes("+")) {
    return (a + b)
}

else if (command.includes ("-")) {
    return (a - b)
}

else if (command.includes ("*")) {
    return (a * b)
}

else if (command.includes ("/")) {
    return (a / b)
}

else if (command.includes ("%")) {
    return (a % b)
}

//search on google
// google page not popping out. I am not sure, if I am logging it out properly.
else if (command.includes("google")){
    function redirect(){
        location.href="https://www.google.com"
        return redirect()
    }
    return "Find yor search result"
}
}

// calling the commands
console.log(getReply("hello"));
console.log(getReply("I am Shweta"));
console.log(getReply("Hello!! my name is Benjamin"));
console.log(getReply("Do you remember me"));
//console.log(getReply("what is my name"));
console.log(getReply(" ")); 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add shopping to my todo"));
console.log(getReply("Number of activities on my todo List"));
console.log(getReply("First thing to do today"));
console.log(getReply("Second thing to do today"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("today's date"));
console.log(getReply("date"));
console.log(getReply("what is the date today"));
console.log(getReply("day of month"));
console.log(getReply("set timer for minute"));
console.log(getReply("set timer for second"));
console.log(getReply("let me know a + b"));
console.log(getReply("let me know a - b"));
console.log(getReply("let me know a / b"));
console.log(getReply("let me know a % b"));
console.log(getReply("let me know a * b"));
console.log(getReply("google my current location"));