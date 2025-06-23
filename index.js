"use strict";

function calculateAverageNumberFromArray (inputArray) {
    let averageNum = 0;
    let counter = 0;
    for (const thisElement of inputArray) {
        if (typeof thisElement === 'number' && Number.isFinite(thisElement)) {
            averageNum += thisElement;
            counter++;
        }
    }
    return averageNum / counter;
}

const someArray = [1, -5, true, 0.01, '12', 12, 'abc', -75];
alert('Середнє арифметичне усіх чисел масиву: ' + calculateAverageNumberFromArray(someArray));