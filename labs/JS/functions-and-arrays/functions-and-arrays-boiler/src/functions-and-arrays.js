console.log("Functions & Arrays");

console.log("--------------");
console.log("Iteration 001");
// Iteration #1: Find the maximum
// Old Declaration
//function maxOfTwoNumbers() {}
// New Declaration
// const maxOfTwoNumbers = () => {}

// New Declaration
const maxOfTwoNumbers = (num1, num2) => {
  // v001
  if (num1 === num2) {
    console.log(`${num1} & ${num2} are the same number`);
  } else if (num1 > num2) {
    console.log(`In this case ${num1} is bigger than ${num2}`);
  } else {
    console.log(`In this case ${num2} is bigger than ${num1}`);
  }
};
console.log("Iteration 001 - V001 - Class Answer 01");
maxOfTwoNumbers(3, 50);

// Alavaro Solution - Using Ternary  - 50/50
const maxOfTwoNumbersAlvaro = (a, b) => {
  return a > b ? a : b;
};
console.log("Iteration 001 - V002 - Alvaro Ternary ");
console.log(maxOfTwoNumbersAlvaro(50, 50));

// Alavaro Solution - Using Multiple Ternary
const maxOfTwoNumbersTernaryMultiple = (a, b) => {
  //return a > b ? a : b;
  return a > b ? a : a === b ? a : b;
};
console.log("Iteration 001 - V003 - Ternary Multiple");
console.log(maxOfTwoNumbersTernaryMultiple(1, 1));

// Alavaro Solution - Using Multiple Ternary - Registering info to console
const maxOfTwoNumbersTernaryMultipleConsole = (a, b) => {
  //return a > b ? a : b;
  // return a > b ? a : a === b ? a : b;
  return a > b
    ? `${a} mayor que ${b}`
    : a === b
    ? `${b} es igual que ${a}`
    : `${b} mayor que ${a}`;
};
console.log("Iteration 001 - V004 - Ternary Multiple");
console.log(maxOfTwoNumbersTernaryMultipleConsole(10, 10));

console.log("--------------");
console.log("Iteration 002");
// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "electroencefalografista",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

// Old Declaration
// function findLongestWord() {}

// for (expresionInicial, condicion, actualizacionDeExpresion){
// //body del bucle for
// }

// Iteration 002 - V001 - Diego Answer - conditional + buclear/loopear :)
const findLongestWord = (wordArray) => {
  // Stop logic if array is empty
  if (wordArray.length === 0) return null;
  // Use this empty string variable to store longest word when looping through the array on the loop for below
  let longestWord = "";
  // Loop through the array param in order to get longest word :)
  for (let i = 0; i < wordArray.length; i++) {
    if (longestWord.length < wordArray[i].length) longestWord = wordArray[i];
  }
  return longestWord;
};
console.log("Iteration 002 - V001 - Using Conditional + Loop");
console.log(
  `The longest word on this specific array is ${findLongestWord(words)}`
);

// Iteration 002 - V002 - Diego Answer - Using Some cool methods :)
const findLongestWordSecondVariation = (wordArray) => {
  let wordLength = "";
  //if(wordArray.length ==== 0 )
  // This syntax below on l96 is the same as l96 using a logic "!" Not operator
  if (!wordArray.length) return null;
  else if (wordArray.length === 1) return wordArray.toString();
  else {
    let temporalWord = wordArray.sort((wordOne, wordTwo) =>
      wordOne.length < wordTwo.length ? 1 : -1
    );
    // uncomment below to bypass return statement on l104 to view the array orderd/SORTED from bigger word to smaller word
    //return temporalWord;
    wordLength = temporalWord[0];
  }
  return wordLength;
};

console.log("Iteration 002 - V002 - Using Conditional + Sort Method");
console.log(
  `The longest word on this specific array is ${findLongestWordSecondVariation(
    words
  )}`
);

console.log("--------------");
console.log("Iteration 003");
// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

//function sumNumbers() {}

// New Declaration
const sumNumbers = (numbersArray) => {
  // declarar una variabla para guardar el total de la suma, y al inicializamos en 0
  let sum = 0;
  // iterar mediante un bucle "for" apuntando al parametro que declaremos en los parentesis de la funcion - CHICOS - GOOD NAMING CONVENTIONS IS KEY TO A SUCCESFULL PROGRAMMING CAREER.
  for (let i = 0; i < numbersArray.length; i++) {
    // V001 -- Xavi's Version
    //sum = sum + numbersArray[i];
    // V002 -- Class Version
    sum += numbersArray[i];
  }
  // Retornem la variable!
  return sum;
};
console.log(
  `la suma de tots els nombres totals de la matriu és ${sumNumbers(numbers)}`
);

// Iteration #3.1 Bonus:
//function sum() {}

// for (expresionInicial, condicion, actualizacionDeExpresion){
// //body del bucle for
// }

console.log("--------------");
console.log("Iteration 3.1");
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

const sum = (mixedArray) => {
  // declarar una variabla para guardar el total de la suma, y al inicializamos en 0
  let totalSumOfMixedArrayPositions = 0;
  // Bucleemos
  for (let i = 0; i < mixedArray.length; i++) {
    // STRINGS
    if (typeof mixedArray[i] === "string") {
      // Using a variable to hold the string and split it with split() method and then loop through the array and add each position to the value fo the variable "totalSumOfMixedArrayPositions"
      // let string = mixedArray[i].split("");
      // for (let i = 0; i < string.length; i++) {
      //   totalSumOfMixedArrayPositions += string[i].length;
      // }

      // ALVARO"S SOLUTION - Uses the length of the string - SIMPLIFIED VERSION
      totalSumOfMixedArrayPositions += mixedArray[i].length;
    }
    // BOOLEANOS
    else if (mixedArray[i] === true) {
      totalSumOfMixedArrayPositions += 1;
    }
    // RESTO AKA NUMBERS
    else {
      totalSumOfMixedArrayPositions += mixedArray[i];
    }
  }
  // ALCANZE DE LAS VARIABLES SEGUN SU POCISION
  // RETORNAR
  return totalSumOfMixedArrayPositions;
};
console.log(`The sum of this mixed array is: ${sum(mixedArr)}`);

console.log("--------------");
console.log("Iteration #4: Calculate the average:");
// Iteration #4: Calculate the average
// Level 1: Array of numbers
//function averageNumbers() {}
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const numbersAvgTwo = [2.44, 6.44, 9.23, 10.56, 7, 4444, 1.4444444, 9.99999];

const averageNumbers = (numbers) => {
  // Usaremos la funcion sumNumbers y usaremos el paramtero para obtener este resultado matematico.
  return (sumNumbers(numbers) / numbers.length).toFixed(2);
};
console.log(`The average of this array is: ${averageNumbers(numbersAvg)}`);
console.log(
  `The average of this complex array is: ${averageNumbers(numbersAvgTwo)}`
);

// Level 2: Array of strings
//function averageWordLength() {}
console.log("--------------");
console.log("Iteration #4-2 Array of strings: ");
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// const averageWordLengtUsingReduce = (arr) => {
//   return arr.reduce((a, b) => a + b.length / arr.length, 0);
// };
const averageWordLength = (arr) => {
  return arr.join("").length / arr.length;
};
console.log(`${averageWordLength(wordsArr)}`);
console.log(
  `La media de palabras de este array es: ${averageWordLength(wordsArr)}`
);

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray() {}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist() {}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes() {}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
