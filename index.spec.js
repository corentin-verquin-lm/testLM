const {toUpperCase, averageWordLength, isMonotonic, moveZero, sortEvenOdd, isEven} = require('./index')

it('isEven', ()=>{
    expect(isEven(8)).toBeTruthy()
    expect(isEven(11)).toBeFalsy()
})

it('toUpperCase', ()=>{
    expect(toUpperCase('hello')).toBe('HELLO')
})

it('averageWordLength',()=>{
    expect(averageWordLength('Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque hendrerit est eget pellentesque volutpat Fusce a quam et augue semper euismod et a elit')).toBe(5)
})

it('isMonotonic', ()=>{
    expect(isMonotonic([1,2,3,4,6,8])).toBeTruthy()
    expect(isMonotonic([10,5,3,2])).toBeTruthy()
    expect(isMonotonic([1,2,3,4,6,8,5,3])).toBeFalsy()
})

it('moveZero', ()=>{
    expect(moveZero([1,0,13,5,0,7,0,6])).toStrictEqual([1,13,5,7,6,0,0,0])
})

it('sortEvenOdd', ()=>{
    expect(sortEvenOdd([93, 24, 38, 1, 96, 87, 100])).toStrictEqual([24, 38, 96, 100, 93, 87, 1])
})