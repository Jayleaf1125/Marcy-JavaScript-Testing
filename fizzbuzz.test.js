const fizzBuzz = require('./fizzbuzz')

// Write a test for a function called fizzbuzz that, given the number 1, it should return 1.
test('If input is 1, Should return 1', () => {
    expect(fizzBuzz(1)).toBe(1)
})

// Write a test that fizzbuzz, given 2, should return 2.
test('If input is 2, Should return 2', () => {
    expect(fizzBuzz(2)).toBe(2)
})

// Write a test that fizzbuzz, given 3, should return 'Fizz'.
test('If input is 3, Should return Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
})

// We can skip a test for 4, since we can be pretty sure that it will pass. Let's instead write a test for 5. Given 5, fizzbuzz should return 'Buzz'.
test('If input is 5, Should return Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
})

// At '6', we'll introduce another requirement: multiples of 3 should also return Fizz. Write a test that given 6, fizzbuzz should return 'Fizz'.
test('If input is 6, Should return Fizz', () => {
    expect(fizzBuzz(6)).toBe('Fizz')
})

// We can skip the tests for 6, 7, 8, and 9 since we're already testing those cases. For our next test, write a test that given a multiple of 5, we should return 'Buzz'.

// Write a test that, given 15, fizzbuzz returns "FizzBuzz".

// Write a test that, given multiple of 15, returns "FizzBuzz"