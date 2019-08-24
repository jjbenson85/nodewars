function decomposeAux(remainingArea, nextLength) {
    // If remaining area is zero, return an array
    if (remainingArea == 0) return [];

    //Presumably this is to make it a pure function by not mutating any external state,
    // but len is a number and is not referenced so changing len would not mutate any external state
    let len = nextLength;

    // Initalize the array to be null
    // When the recursive function finally solves the problem it will return an array 
    let lengthArray = null;

    // While length is greater than or equal to half remaining area plus 1 ??
    while (true){
        if (len < ~~Math.sqrt(remainingArea / 2) + 1) return lengthArray;
        // Get the difference by subtracting new square from remaining area
        const diff = remainingArea - len * len;
        // Get the new length by square rooting the difference and rounding down
        const newLength = ~~Math.sqrt(diff);
        // Set the length array to be equal to returned value of this function
        lengthArray = decomposeAux(diff, newLength);

        //If we have a solution we can push this length into the array
        if (lengthArray != null) {
            lengthArray.push(len);
            return lengthArray;
        }
        //Otherwise decrease length and continue loop
        len--;
    }
    // return lengthArray;
}

// ~~ is faster Math.floor
function decompose(n) {
    // Pass in the starting area and the side length of the next smallest square
    // return decomposeAux(n * n, ~~Math.sqrt(n * n - 1));

    // I am not sure why they didn't pass n-1 as the second argument as this works as well.
     return decomposeAux(n * n, n-1); 
} 


module.exports.decompose = decompose