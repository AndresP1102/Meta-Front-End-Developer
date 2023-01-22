// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (const value of dairy) {
        console.log(value);
    }
}

logDairy();

// Task 2
const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

function birdCan() {
    for( key of Object.keys(bird) ) {
        console.log(key,": ", bird[key])
    }
}

birdCan();


// Task 3
function animalCan() {
    for (const key in bird) {
        const value = bird[key];
        console.log(key,": ",value);
    }
}

animalCan();