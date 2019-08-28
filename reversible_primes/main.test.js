const reversible_primes = require('./main.js')

test('reversible_primes is defines', () => {
    expect(reversible_primes(1)).toBeDefined();
    expect(reversible_primes(10)).toBeDefined();
    expect(reversible_primes(567)).toBeDefined();
});

test('passes basic tests', ()=> {
    expect(reversible_primes(0)).toBe(2)
    expect(reversible_primes(1)).toBe(3)
    expect(reversible_primes(5)).toBe(13)
    expect(reversible_primes(10)).toBe(73)
    expect(reversible_primes(20)).toBe(167)
    expect(reversible_primes(100)).toBe(1669)
})

test('passes advanced tests', ()=> {
    expect(reversible_primes(837)).toBe(34513)
    expect(reversible_primes(3677)).toBe(173909)
    expect(reversible_primes(4830)).toBe(317789)
    expect(reversible_primes(5784)).toBe(357083)
    expect(reversible_primes(7776)).toBe(742991)
    expect(reversible_primes(2936)).toBe(144577)
    expect(reversible_primes(1306)).toBe(77557)
    expect(reversible_primes(969)).toBe(37951)
    expect(reversible_primes(6782)).toBe(398857)
    expect(reversible_primes(9374)).toBe(914723)
})
