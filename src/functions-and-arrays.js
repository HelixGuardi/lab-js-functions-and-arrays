// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else if (num1 = num2) {
        return num1;
    } else {
        return "Something went wrong. Please try again!";
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(strArray) {
    if(strArray.length === 0) {
        return null;
    }

    let strCount = "";
    
    for(let i = 0; i < strArray.length; i++) {
        let char = strArray[i];

        if(char.length > strCount.length) {
            strCount = char;
        } else if (char.length === strCount.length) {
            continue;
        }
    }

    return strCount;
}







// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArrays) {
    if(numArrays.length === 0) {
        return 0;
    }

    let countTotal = 0;

    for(let i = 0; i < numArrays.length; i++) {
        countTotal += numArrays[i];
    }

    return countTotal;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if(numbersArray.length === 0) {
        return 0;
    }

    const calcNumbers = (sumNumbers(numbersArray) / numbersArray.length);
    return calcNumbers;
}

const myNumbers = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(myNumbers))


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(stringArray, lostStr) {
    if(stringArray.length === 0) {
        return null;
    }

    for(let i = 0; i < stringArray.length; i++) {
        let char = stringArray[i];

        if(char.includes(lostStr)) {
            return true;
        }
    }

    return false;
}

console.log(doesWordExist(words2, "matter"));
