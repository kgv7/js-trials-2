"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result)
}


function kidsGame(names) {
  // Replace this with your code
  const output = [names.shift(0)];
  // NOTE: changed .pop to .shift - which removes first item from array

  const firstLetterToWords = {};

  for (const name of names) {
    if (!firstLetterToWords[name[0]]){
      firstLetterToWords[name[0]] = [name];
    }
    else {
      firstLetterToWords[name[0]].push(name);
    }
  }
  
  while (true) {
    // console.log(output) //['noon'] ;; ['noon', 'naan']
    // console.log(output[output.length - 1]) // noon ;; naan
    // console.log(output[output.length - 1][output.length - 1]) // n ;; a
    const startLetter = output[output.length - 1][-1]; //output.length is not right calculation.
    // console.log(startLetter) // n - a

    if (!firstLetterToWords[startLetter]) {
      break
    }
    // console.log(firstLetterToWords)
    const word = firstLetterToWords[startLetter][0]; //naan
    output.push(word); // noon, naan
    firstLetterToWords[startLetter].shift()
    // console.log(firstLetterToWords[startLetter])
    // console.log(firstLetterToWords)
  }
  return output;
}
