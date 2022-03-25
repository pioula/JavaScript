/* eslint-disable linebreak-style */

function betterParseInt(str) {
  if (str[0] === '_') {
    return NaN;
  }

  if (str.length >= 3 && str[0] === '0') {
    if (str[1] === 'b') {
      return parseInt(str.substring(2, str.length), 2);
    }
    if (str[1] === 'o') {
      return parseInt(str.substring(2, str.length), 8);
    }
    if (str[1] === 'x') {
      return parseInt(str, 16);
    }
  }

  if (str[0] === '0') {
    return parseInt(str, 10);
  }

  return parseInt(str.replaceAll('_', ''), 10);
}

console.log(betterParseInt('1234'));
console.log('res', 1234);
console.log(betterParseInt('0b0010'));
console.log('res', 0b0010);
console.log(betterParseInt('0o07'));
console.log('res', 0o07);
console.log(betterParseInt('0xabcd'));
console.log('res', 0xabcd);
console.log(betterParseInt('100_000'));
console.log('res', 100000);
console.log(betterParseInt('0_10_000'));
console.log('res', 0);