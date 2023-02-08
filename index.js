import path from "node:path";
import _ from "lodash";

// Функция countWords(), которая считает количество слов в предложении, и возвращает объект

const countWords = (coll) => {
  if (coll.length === 0) {
    return {};
  }

  const words = coll.toLowerCase().split(" ");
  const result = {};

  for (const item of words) {
    result[item] = (result[item] ?? 0) + 1;
  }

  return result;
};

// Вариант с lodash
const countWords2 = (coll) => {
  if (coll.length === 0) {
    return {};
  }

  const words = _.words(coll.toLowerCase());
  const result = {};

  for (const item of words) {
    result[item] = (result[item] ?? 0) + 1;
  }

  return result;
};

// Вариант с hasOwn
const countWords3 = (coll) => {
  if (coll.length === 0) {
    return {};
  }

  const words = _.words(coll.toLowerCase());
  const result = {};

  for (const item of words) {
    if (Object.hasOwn(result, item)) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

const text1 = "one two three two ONE one wow";
const text2 = "another one sentence with strange Words words";

console.log(countWords3(''));
