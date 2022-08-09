//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string,dog_names){
        for (let name of dog_names) {
            let match = dog_string.toLowerCase().includes(name.toLowerCase());
            if (match == true) {
                console.log("Matched dog_name")
            }
            else {
                console.log("No Matches")
            }
        }
    }
    findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]                             < written in wrong? made a new one. kept erroring my console
let array=["Max","Baseball","Rebot","Goku","Trucks","Rodger"]             

function replaceEvens(array){
for (let i=0; i<array.length; i++){
    if(i%2==0){
    array.splice(i,1,"even index");}
}
console.log(array);
}
replaceEvens(array);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




// code wars

//Function 1 - hello world

//Python:
//def greet():
//    return "hello world!"
    
//greet()

JavaScript:
function greet(){
  return "hello world!"
}


//Multiply

//Python:
//def multiply(a, b):
//    return a * b

JavaScript:
function multiply(a, b){
return a * b
}

//I know these arent the best practices, got pinched.