const fs = require("fs");

//Функция getJsonFileData, которая возвращает объект, соответствующий JSON из файла example.json
const getJsonFileData = () => {
  const obj = { files: ["src/objects.js"], config: true };
  return obj;
};

const actual = getJsonFileData();
const fileContent = fs.readFileSync("./example.json", "utf-8");
const expected = JSON.parse(fileContent);

console.log(expected);
console.log(actual);