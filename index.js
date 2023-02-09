import path from "node:path";
import _ from "lodash";

// Функция get(), которая извлекает из объекта любой глубины вложенности значение по указанным ключам.
const data = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1",
    },
    1: {
      name: "web2",
      null: 3,
      active: false,
      company: {
        name: "hexlet",
      },
    },
  },
};

const get = (obj, keys) => {
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    if (Object.hasOwn(current, keys[i])) {
      current = current[keys[i]];
    } else {
      return null;
    }
  }
  return current;
};

const get2 = (obj, keys) => {
  let current = obj;

  for (const key of keys) {
    if (!Object.hasOwn(current, key)) {
      return null;
    } else {
      current = current[key];
    }
  }
  return current;
};

console.log(get2(data, ["hosts", 0, "name"]));
