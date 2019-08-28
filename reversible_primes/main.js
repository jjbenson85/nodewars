function isPrime(n) {
    if (n <= 3) return n > 1
    if (n % 2 === 0 || n % 3 === 0) return false

    let i = 5
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false
        i = i + 6
    }
    return true
}


// function reversiblePrime(n, count = -1, num = -1){
//     console.log({n,count, num})
//     if(count === n) return num
//     const revNum = parseInt(num.toString().split('').reverse().join(''))
//     isPrime(num) && isPrime(revNum) && count++
//     return reversiblePrime(n, count, num++)
// }

function reversiblePrime(n) {
    let count = -1
    let num = -1
    while(count !== n){
        num++
        const revNum = parseInt(num.toString().split('').reverse().join(''))
        isPrime(num) && isPrime(revNum) && count++
    }
    return num
}

module.exports = reversiblePrime