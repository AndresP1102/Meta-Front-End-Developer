// A function that accepts two parameters
function letterFinder(word,match) {
    for (let i = 0; i < word.length; i++) {
        //this loop exists when i is equal to the length of the word
        const element = word[i];
        if (element==match) {
            //check if the current characater, word[i], is equal to the match
            console.log("Found the", match, "at", i);
        }
        else {
            console.log("No match found at", i);
        }
    }
}

letterFinder("test", "t");