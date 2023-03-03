const sum = require('./1.js');
const arithmetic = require('./2')
const isEven = require('./3')

test('test for sum', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, -2, -3])).toBe(-6);
    expect(sum([1])).toBe(1)
    expect(sum([0, 0])).toBe(0)
    expect(sum(['jopa', 'kata'])).toBe('jopakata')
    expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6)
})

test('test for arithmetic', () => {
    expect(arithmetic(2, 2, 'add')).toBe(4);
    expect(arithmetic(2, 2)).toBe("No such result");
    expect(arithmetic(2, 0, "divide")).toBe(Infinity);
    expect(arithmetic(2, 10, "subtract")).toBe(-8);
    expect(arithmetic(0.2, 0.1, "multiply")).toBeCloseTo(0.02);
})

test ('test for odd-even', () => {
    expect(isEven(0)).toBe(true)
    expect(isEven(-7)).toBe(false)
    expect(isEven(-8)).toBe(true)
    expect(isEven('aaaaaaaaaaaaaa')).toBe(false)
})