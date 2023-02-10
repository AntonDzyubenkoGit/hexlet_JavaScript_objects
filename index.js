import path from "node:path";
import _ from "lodash";

// Функция getSortedNames(), которая принимает на вход список пользователей, извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.

const getSortedNames = (data) => {
  const result = [];
  for (const { name } of data) {
    result.push(name);
  }
  return result.sort();
};

const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Zeigar", gender: "male", birthday: "1973-11-03" },
  { name: "Aiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Cansa", gender: "female", birthday: "2012-11-03" },
];

console.log(getSortedNames(users));
