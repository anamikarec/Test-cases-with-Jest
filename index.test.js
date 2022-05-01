const sum = require('./index')
// sum(2,3);

describe('test case inside for sum function',()=>{
    test("sum function is defined",() => {
        expect(sum).toBeDefined()
    })
})