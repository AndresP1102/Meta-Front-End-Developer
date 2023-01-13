var age = 50

if (age>=65) {
    console.log("You get your income from your pension");
    }
    else if(age<65 && age>=18) {
        console.log("Each month you get a salary");
    }
    else if(age<18) {
        console.log("You get an allowance");
    }
 else {
    //this block will run if no condition matches
    console.log("The value of the age variable is not numerical");
}


var day = "Sunday"

switch (day) {
    //add your conditions
    case "Monday":
        console.log("Do something Monday");
        break;
    case "Tuesday":
        console.log("Do something Tuesday");
        break;
    case "Wednesday":
        console.log("Do something Wednesday");
        break;
    case "Thursday":
        console.log("Do something Thursday");
        break;
    case "Friday":
        console.log("Do something Friday");
        break;
    case "Saturday":
        console.log("Do something Saturday");
        break;
    case "Sunday":
        console.log("Do something Sunday");
        break;
    default:
        //this block will run if no condition matches
        console.log("There is not such day");
        break;
}