const squares = require('./squares.js')
const decompose = squares.decompose
console.time("Time taken:")
if (process.argv.includes('upto')) {
    const i = process.argv.indexOf('upto')
    const arr = []
    const upToCount = parseInt(process.argv[i + 1])
    let n = parseInt(process.argv[i - 1])
    // Work out squares for n between parameters given
    while (n < upToCount) {
        n++
        global.count = 0
        const sq = decompose(n)
        arr.push({ n, sq, iterations: global.count, })
    } 
    // Order by number of iterations, show top 10
    console.log(arr.sort((a, b) => b.iterations - a.iterations).slice(0, 10))
} else {
    process.argv.forEach(function (val, index, array) {
        if (!isNaN(parseInt(val))) {
            global.count = 0
            console.log({ n: parseInt(val), sq: decompose(val), iterations: count})
        }
    });
}
console.timeEnd("Time taken:")