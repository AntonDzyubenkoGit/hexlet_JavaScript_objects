// Испытания. Javascript: Представление массива в виде объекта

const test = [
  ["cat", 5],
  ["dog", 6],
  ["cat", 11],
];

const test2 = [
  ["fred", 30],
  ["barney", 40],
];

// Вариант через цикл for..of..

const fromPairs = (array) => {
  const result = {};

  for (const [key, value] of array) {
    result[key] = value;
  }

  return result;
};

// Вариант через Object.fromEntries()

const fromPairs2 = (coll) => {
  const result = Object.fromEntries(coll);
  return result;
};



console.log(fromPairs2(test));
