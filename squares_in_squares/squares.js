// If num is already in array or is larger or equal to the old number
// Reduce the number and test again
//Otherwise return the number
const reduceSideLength = (num, oldNum, arr) => (
    (arr.includes(num) || num >= oldNum) 
        ? reduceSideLength(--num, oldNum, arr)
        : num
    )
// Round number to largest integer smaller than square root of x
const roundRoot = (x) => parseInt(Math.sqrt(x))
// When sidelength is zero, remove last values from arrays,
// take the last length and reduce it
const sideLengthIsZero = (lengthArr, areaArr) => {
    newLength = lengthArr.pop()
    newArea = areaArr.pop()
    // If new length is zero, call this function again
    // Otherwise return new length and area
    return (--newLength === 0) 
        ? sideLengthIsZero(lengthArr, areaArr)
        : [newLength, newArea]
}
// Recursive function that returns an array of numbers whose squares sum to the sqare of the given number
const getNextSquare = (sideLength, remainingArea, sideLengthArr, remainingAreaArr) => {
   global.count++
    // Calc new square
    const newSquare = sideLength ** 2
    // Get remaining area 
    const diff = remainingArea - newSquare
    // If sideLength is zero
    if (!sideLength) {
        // Remove ths last side length and area from the arrays
        // and get a newSideLength and remaining area
        [sideLength, remainingArea] = sideLengthIsZero(sideLengthArr, remainingAreaArr)
        // If side length is NaN, we ran out of numbers to try
        // Otherise call function again with new values
        return (isNaN(sideLength))
            ? null
            : getNextSquare(sideLength, remainingArea, sideLengthArr, remainingAreaArr)
    }
    // If the square is too big, reduce side length
    if (diff < 0) sideLength--
    // Otherwise, add this side length and remainging area to arrays
    // And get next sideLength and remaining area
    else {
        sideLengthArr.push(sideLength)
        remainingAreaArr.push(remainingArea)
        remainingArea = diff
        const nextLength = roundRoot(diff)
        sideLength = reduceSideLength(nextLength, sideLength, sideLengthArr)
    }
    // If there is no area left we are finished so return sideLengthArray
    // Otherwise call the function again with new values
    return (remainingArea === 0)
        ? sideLengthArr.reverse()
        : getNextSquare(sideLength, remainingArea, sideLengthArr, remainingAreaArr)
}
const decompose = (n) => getNextSquare(n-1, n ** 2, [],[])



module.exports = decompose