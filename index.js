import path from "node:path";
import _  from "lodash";

const data = {
  user: "ubuntu",
  cores: 4,
  os: "linux",
};

// Функция pick(), которая формирует из переданного объекта другой объект, включающий только указанные свойства

const pick = (obj, properties) => {
  const result = {};
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    for (const prop of properties) {
      if (key === prop) {
        result[key] = value;
      }
    }
  }
  return result;
};

// Вариант с lodash
const pick2 = (data, keys) => {
  return _.pick(data, keys);
};

// Вариант с hasOwn
const pick3 = (data, keys) => {
  const result = {};

  for (const key of keys) {
    if (Object.hasOwn(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
};

console.log(pick3(data, ["user", "cores"]));
