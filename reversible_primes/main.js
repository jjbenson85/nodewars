// Return true if n is prime
// Prime numbers are of the form 6f ± 1, excluding 2 and 3 where f is any integer
function isPrime(n) {
    if (n <= 3) return n > 1
    if (n % 2 === 0 || n % 3 === 0) return false

    const sqrtN = parseInt(Math.sqrt(n))
    for (let i = 5; i <= sqrtN; i+=6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }
    return true
}
const revPrimeArr = [2, 3, 5, 7, 11, 13]
const primeSet = new Set(revPrimeArr)
const checkIsPrime = (num, primeSet) => {
    if (primeSet.has(num)) return true
    if (!isPrime(num)) return false
    primeSet.add(num)
    return true
}
function reversiblePrime(n) {

    if (revPrimeArr[n]) return revPrimeArr[n]

    let count = revPrimeArr.length - 1
    let num = revPrimeArr[count] + 1

    for(num; count !== n; num++){
        const numIsPrime = checkIsPrime(num, primeSet)
        if(!numIsPrime) continue

        const revNum = parseInt(num.toString().split('').reverse().join(''))
        const revNumIsPrime = checkIsPrime(revNum, primeSet)
        if (!revNumIsPrime) continue

        count++
        revPrimeArr.push(num) 
    }
    return --num
}

module.exports = reversiblePrime