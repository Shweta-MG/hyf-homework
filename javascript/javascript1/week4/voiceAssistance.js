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

