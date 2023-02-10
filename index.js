import path from "node:path";
import _ from "lodash";

// Функция make(),  которая создает объект компании и возвращает его.

const make = (company, data) => {
  return { company, state: "moderating", createdAt: Date.now(), ...data };
};

console.log(make("Hexlet", { website: "hexlet.io", state: "published" }));
