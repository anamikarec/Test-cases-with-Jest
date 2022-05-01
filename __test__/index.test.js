const sum = require('../index')
console.log(sum(2,3))

describe('test case inside __test__ for sum function',()=>{
    test("sum function is defined",() => {
        expect(sum).toBeDefined()
    })
})
describe('tobe tests',()=>{
    test("toBe same number value",()=>{
        expect(10).toBe(10);
    })
    test("toBe boolean value",()=>{
        expect(false).toBe(false);
    })
    test("toBe same object with {}",()=>{
        // objects
        expect({}).not.toBe({})
    })
    test("toBe same object value",()=>{
        // objects
        let a = {};
        expect(a).toBe(a)
    })
})

describe('toEqual', () => { 
    test("array [] is equal to []",() => {
        expect([1,2]).toEqual([1,2]);
    })
    test("array [1,2] is not equal to [1,2,3]",() => {
        var a = [1,2,3];
        var b = [1,2];
        expect(a).toEqual(expect.arrayContaining(b));
    })
    test("object check 1",()=>{
        expect({a:1}).toEqual({a:1});
    })
    test("username,email check",() => {
        let obj = {username:"Anamika",email:"anamika@gmail.com"}
        let out = {username:expect.any(String),email:expect.stringContaining("@gmail.com")}

        expect(obj).toEqual(out);
    })
    test("username contain college",()=>{
        let username = ["anamika","anamikarec"];
        expect(username).toContain("anamikarec")
    })
})

describe("relational checks",()=>{
    test("100+200<=300",()=>{
        var m = 100;
        var n = 100;
        expect(m+n).toBeLessThan(300)
    })
    test("100+150<300",()=>{
        var m = 100;
        var n = 150;
        expect(m+n).toBeLessThan(300)
    })
    test("100+200>250",()=>{
        var m = 100;
        var n = 200;
        expect(m+n).toBeGreaterThan(250)
    })
})