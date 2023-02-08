// Функция is(), которая сравнивает объекты по совпадению данных, а не по ссылкам

const is = (company1, company2) => {
  const keys = ["name", "state", "website"];

  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }
  return true;
};

const company1 = {
  name: "Hexlet",
  state: "published",
  website: "https://hexlet.io",
};
const company2 = {
  name: "Hexlet",
  state: "published",
  website: "https://hexlet.io",
};

console.log(is(company1, company2));
