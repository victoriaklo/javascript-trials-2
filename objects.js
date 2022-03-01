'use strict';

// 1. countWords
function countWords(phrase) {
  let wordCounts = {};
  let phraseSplit = phrase.split(' ');

  for (let word of phraseSplit) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;

}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (price in melonPrices) {
    return melonPrices[price].sort()
  } else {
    return;
  }
}
