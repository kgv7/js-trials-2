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
  const output = [names.pop(0)];
  // need to fix the pop
  console.log(output)

  const firstLetterToWords = {};

  for (const name of names) {
    if (!firstLetterToWords[name[0]]){
      firstLetterToWords[name[0]] = [name];
    }
    else {
      firstLetterToWords[name[0]].push(name);
    }
    console.log(firstLetterToWords);
  }
  
  while (true) {
    const startLetter = output[output.length - 1][output.length - 1];

    if (!firstLetterToWords[startLetter]) {
      break
    }

    const word = firstLetterToWords[startLetter].pop(0);
    output.push(word);
  }
  return output;
}
