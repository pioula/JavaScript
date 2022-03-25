/* eslint-disable linebreak-style */
function isUpperCase(ch) {
  return ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90;
}

function swapCase(str) {
  return isUpperCase(str[0]) ? str.toLowerCase() : str.toUpperCase();
}

function changeCase(str) {
  return str.split('').reduce(
    (acc, letter, indx) => {
      if (acc.accLetters.length === 0
        || (isUpperCase(acc.accLetters[0]) && isUpperCase(letter))
        || (!isUpperCase(acc.accLetters[0]) && !isUpperCase(letter))) {
        acc.accLetters += letter;
      } else {
        acc.result += swapCase(acc.accLetters);
        acc.accLetters = letter;
      }

      if (indx + 1 === str.length) {
        acc.result += swapCase(acc.accLetters);
      }

      return acc;
    },
    {
      result: '',
      accLetters: '',
    },
  ).result;
}

console.log(changeCase('ToUppEEErCaSee'));
