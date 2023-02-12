import _ from "lodash";

const obj1 = { one: "eon", two: "two", four: true };
const obj2 = { two: "own", zero: 4, four: true };

// Испытания. Javascript: Вычислитель различий

const genDiff = (objectOne, objectTwo) => {
  const entriesOne = Object.entries(objectOne);
  const entriesTwo = Object.entries(objectTwo);

  const result = {};

  if (entriesOne.length !== 0) {
    for (const [key, value] of entriesOne) {
      if (!Object.hasOwn(objectTwo, key)) {
        result[key] = "deleted";
      }
      for (const [key2, value2] of entriesTwo) {
        if (Object.hasOwn(objectOne, key2) && value === value2) {
          result[key2] = "unchanged";
        } else if (Object.hasOwn(objectOne, key2) && value !== value2) {
          result[key2] = "changed";
        } else if (!Object.hasOwn(objectOne, key2)) {
          result[key2] = "added";
        }
      }
    }
  } else {
    for (const [key2, value2] of entriesTwo) {
      result[key2] = "added";
    }
  }

  return result;
};

// Версия с lodash

const genDiff2 = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);

  const result = {};

  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result[key] = "added";
    } else if (!!Object.hasOwn(data2, key)) {
      result[key] = "deleted";
    } else if (data1[key] !== data2[key]) {
      result[key] = "changed";
    } else {
      result[key] = "unchanged";
    }
  }
  return result;
};

console.log(genDiff2(obj1, obj2));
