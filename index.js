import _ from "lodash";

// Испытания. Javascript: Скрэббл

const scrabble = (coll, word) => {
  const charsColl = coll.toLowerCase().split("");
  const charsWord = word.toLowerCase().split("");

  const countColl = {};
  const countWord = {};

  for (const char of charsColl) {
    countColl[char] = (countColl[char] ?? 0) + 1;
  }

  for (const char of charsWord) {
    countWord[char] = (countWord[char] ?? 0) + 1;
  }

  const keys = Object.keys(countWord);

  for (const key of keys) {
    if (!Object.hasOwn(countColl, key)) {
      return false;
    } else {
      if (!(countColl[key] >= countWord[key])) {
        return false;
      }
    }
  }

  return true;
};

// Вариант с lodash

const scrabble2 = (str, word) => {
  const countChars = _.countBy(str);

  for (const char of word.toLowerCase()) {
    const count = _.get(countChars, char, 0);

    if (count === 0) {
      return false;
    }
    countChars[char] -= 1;
  }
  return true;
};

console.log(scrabble("jasgva", "java"));
