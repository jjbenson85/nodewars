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
const revPrimeTable = [2, 3, 5, 7, 11, 13]
const primeSet = new Set(revPrimeTable)

function reversiblePrime(n) {

    if (revPrimeTable[n]) return revPrimeTable[n]

    let count = revPrimeTable.length - 1
    let num =   revPrimeTable[count] + 1

    for(num; count !== n; num++){
        let numIsPrime = primeSet.has(num)
        if(!numIsPrime){
            if (isPrime(num)){
                primeSet.add(num)
                numIsPrime = true
            }else{
                continue
            }
        }

        const revNum = parseInt(num.toString().split('').reverse().join(''))
        let revNumIsPrime = primeSet.has(revNum)
        if(!revNumIsPrime){
            if(isPrime(revNum)){
                primeSet.add(revNum)
                revNumIsPrime = true
            }else{
                continue
            }
        }
        if (numIsPrime && revNumIsPrime){
            count++ 
            revPrimeTable.push(num) 
        } 
    }
    return --num
}

module.exports = reversiblePrime