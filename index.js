import path from "node:path";
import _ from "lodash";

// Функция fill(), которая заполняет объект данными из другого объекта по разрешенному списку ключей.

const company = {
  name: "testdrive",
  state: "moderating",
  age: 48,
};

const data = {
  name: "Hexlet",
  state: "published",
  age: 12,
};

const fill = (object, keys, data) => {
  const lengthOfProperties = keys.length;

  if (lengthOfProperties === 0) {
    return Object.assign(object, keys);
  }

  const pick = _.pick(data, keys);
  const result = Object.assign(object, pick);

  return result;
};

// Версия в две строки
const fill2 = (object, keys, data) => {
  const pickFilter = keys.length > 0 ? _.pick(data, keys) : data;
  return Object.assign(object, pickFilter);
};

console.log(fill2(company, ["name", "state", "age"], data));
