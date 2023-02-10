import path from "node:path";
import _ from "lodash";

// Функция cloneShallow (), которая выполняет поверхностное копирование объектов.

const data = {
  key: "value",
  key2: {
    key: "innerValue",
    innerKey: {
      anotherKey: "anotherValue",
    },
  },
};

const cloneShallow = (obj) => {
  const result = {};
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
};

console.log(cloneShallow(data));
