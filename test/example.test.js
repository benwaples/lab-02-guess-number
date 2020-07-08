// IMPORT MODULES under test here:
import {
    randomNumber,
    compareNumber
} from '../compareNumber.js';

const test = QUnit.test;

test('compare a fixed number and guess and return either 1,0, or -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const fixed = 10;
    const comparison1 = 3;
    const comparison2 = 13;
    const comparison3 = 10;
    const expected = -1;
    const expected2 = 1;
    const expected3 = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumber(fixed, comparison1);
    const actual2 = compareNumber(fixed, comparison2);
    const actual3 = compareNumber(fixed, comparison3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

test('generate a random number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected;
    let expected2;
    let expected3;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = randomNumber();
    if (actual >= 1 && actual <= 20) {
        expected = actual;
    }
    const actual2 = randomNumber();
    if (actual2 >= 1 && actual2 <= 20) {
        expected2 = actual2;
    }
    const actual3 = randomNumber();
    if (actual3 >= 1 && actual3 <= 20) {
        expected3 = actual3;
    }
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});
