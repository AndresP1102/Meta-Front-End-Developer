function addTwoNums(a,b) {
    try {
        if (typeof(a)!="number") {
            throw new ReferenceError("The first argument is not a number");
        }
        else if (typeof(b)!="number") {
            throw new ReferenceError("The second argument is not a number");
        }
         else {
            console.log(a+b); //display the result 
        }
    } catch (error) {
        console.log(error);
    }
}

addTwoNums(5, "5"); // "55"

console.log("It still works");
