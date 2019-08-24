const decompose = require('./squares.js')
// const decompose = squares.decompose
// const alternative = require('./alternative.js')
// const decompose = alternative.decompose
// const alternativeX = require('./alternativeX.js')
// const decompose = alternativeX.decompose

const tests =[
    {
        input: 1,
        result: null
    },
    {
        input: 2,
        result: null
    },
    {
        input: 3,
        result: null
    },
    {
        input: 4,
        result: null
        
    },
    {
        input: 5,
        result: [3, 4]
    },
    {
        input: 6,
        result: null
    },
    {
        input: 7,
        result: [2, 3, 6]
    },
    {
        input: 8,
        result: null
    },
    {
        input: 9,
        result: [1, 4, 8]
    },
    {
        input: 10,
        result: [6, 8]
    },
    {
        input: 11,
        result: [1, 2, 4, 10]
    },
    {
        input: 12,
        result: [1, 2, 3, 7, 9]
    },
    {
        input: 13,
        result: [5, 12]
    },
    {
        input: 14,
        result: [4, 6, 12]
    },
    {
        input: 15,
        result: [2, 5, 14]
    },
    {
        input: 16,
        result: [2, 3, 5, 7, 13]
    },
    {
        input: 17,
        result: [8, 15]
    },
    {
        input: 18,
        result: [1, 3, 5, 17]
    },
    {
        input: 19,
        result: [1, 6, 18]
    },
    {
        input: 20,
        result: [1, 2, 3, 5, 19]
    },
    {
        input: 50,
        result: [1, 3, 5, 8, 49]
    },
    {
        input: 7100,
        result: [2, 3, 5, 119, 7099]
    },
    {
        input: 123456,
        result: [1, 2, 7, 29, 496, 123455]
    },
    {
        input: 1234567,
        result: [2, 8, 32, 1571, 1234566]
    },
    {
        input: 7654321,
        result: [6, 10, 69, 3912, 7654320]
    },

]
const isEqual = (test, answer) => JSON.stringify(test) === JSON.stringify(answer)

const runTests = () => { 
    let testSuccessCount = 0
    let testCount = 0
    console.time(`TESTS`)
    tests.forEach(test => {
        try {
            console.log('------------------------')
            console.log(`Test ${++testCount}: ${test.input}`)
            const answer = decompose(test.input)
            if (isEqual(answer, test.result)) {
                console.log(answer,test.result)
                console.log(`${++testSuccessCount} of ${tests.length} tests passed`)
                console.log('------------------------\n')
            }
            else throw new Error("It didn't work!")
        } catch (e) {
            console.log(e.message)
        }
    })
    console.timeEnd(`TESTS`)
}

runTests()