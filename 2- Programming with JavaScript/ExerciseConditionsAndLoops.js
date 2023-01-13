for (let i=1; i<=10; i++) {
    if (i==1) {
        console.log('Gold Medal');
    }
    else if (i==2) {
        console.log("Silver Medal");
    }
    else if (i==3) {
        console.log("Bronze Medal");
    }
    else{
        //this block will run if no condition matches
        console.log(i)
    }
}

for (let i=1; i<=10; i++) {
    switch (i) {
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
    
        default:
            //this block will run if no condition matches
            console.log(i);
            break;
    }
}