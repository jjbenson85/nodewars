const decompose = require('./squares');

test('decompose answer to be defined', () => {
    expect(decompose(1)).toBeDefined();
    expect(decompose(10)).toBeDefined();
    expect(decompose(567)).toBeDefined();
});

test('decompose returns null', () =>{
    expect(decompose(1)).toBeNull;
    expect(decompose(2)).toBeNull;
    expect(decompose(3)).toBeNull;
    expect(decompose(4)).toBeNull;
    expect(decompose(6)).toBeNull;
    expect(decompose(8)).toBeNull;

})

test('decompose to return correct answer for small numbers', () => {
    expect(decompose(5)).toEqual([3,4]);
    expect(decompose(7)).toEqual([2,3,6]);
    expect(decompose(9)).toEqual([1, 4, 8]);
    expect(decompose(10)).toEqual([6, 8]);
    expect(decompose(11)).toEqual([1, 2, 4, 10]);
    expect(decompose(12)).toEqual([1, 2, 3, 7, 9]);
    expect(decompose(13)).toEqual([5, 12]);
    expect(decompose(14)).toEqual([4, 6, 12]);
    expect(decompose(15)).toEqual([2, 5, 14]);
    expect(decompose(16)).toEqual([2, 3, 5, 7, 13]);
    expect(decompose(17)).toEqual([8, 15]);
    expect(decompose(18)).toEqual([1, 3, 5, 17]);
    expect(decompose(19)).toEqual([1, 6, 18]);
    expect(decompose(20)).toEqual([1, 2, 3, 5, 19]);
    expect(decompose(50)).toEqual([1, 3, 5, 8, 49]);
});

test('decompose to return correct answer for small numbers', () => {
    expect(decompose(7100)).toEqual([2, 3, 5, 119, 7099]);
    expect(decompose(123456)).toEqual([1, 2, 7, 29, 496, 123455]);
    expect(decompose(1234567)).toEqual([2, 8, 32, 1571, 1234566]);
    expect(decompose(7654321)).toEqual([6, 10, 69, 3912, 7654320]);
});