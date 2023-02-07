import _ from "lodash";
// Функция normalize(), которая "нормализует" данные переданного урока

const normalize = (obj) => {
  obj.name = _.capitalize(obj.name);
  obj.description = obj.description.toLowerCase();
  return obj;
};

const lesson = {
  name: "ДеструКТУРИЗАЦИЯ",
  description: "каК удивитЬ друзей",
};

console.log(normalize(lesson));
