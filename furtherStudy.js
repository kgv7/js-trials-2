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
    // had to break up const startLetter = output[output.length - 1][output.length - 1];
    // because it would give the length of output twice, but we needed length
    // of the word
    const lastWord  = output[output.length - 1];
    const lastWordLetter = lastWord[lastWord.length - 1]; 

    // included a conditon if length = 0
    if (!firstLetterToWords[lastWordLetter] ||
      firstLetterToWords[lastWordLetter].length === 0) {
      break
    }

    const word = firstLetterToWords[lastWordLetter][0]; 
    output.push(word);
    firstLetterToWords[lastWordLetter].shift()

  }
  return output;
}
