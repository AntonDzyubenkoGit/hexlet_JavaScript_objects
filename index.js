// Испытания. Javascript: Сборщик строки запроса

const buildQueryString = (data) => {
  const currentData = Object.entries(data).sort();
  const result = [];

  for (const arr of currentData) {
    result.push(arr.join("="));
  }

  return result.join("&");
};

const test = { per: 10, page: 1 };
const test2 = { param: "all", param1: true };
const test3 = { a: 10, s: "Wow", d: 3.2, z: "89" };

console.log(buildQueryString(test3));
