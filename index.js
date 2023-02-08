import path from "node:path";
import _ from "lodash";

// Функция getDomainInfo(), которая принимает на вход имя сайта и возвращает информацию о нем

const site1 = "yandex.ru";
const site2 = "https://hexlet.io";
const site3 = "http://google.com";

// Вариант с lodash
const getDomainInfo = (site) => {
  if (!site.startsWith("http")) {
    site = site.replace(site, `http://${site}`);
  }

  const parts = site.split("://");
  const scheme = parts[0];
  const name = _.last(parts);

  const filepath = { scheme, name };

  return filepath;
};

// Вариант с node:path
const getDomainInfo2 = (site) => {
  if (!site.startsWith("http")) {
    site = site.replace(site, `http://${site}`);
  }
  return { scheme: path.dirname(site), name: path.basename(site) };
};

// Вариант штатными средствами
const getDomainInfo3 = (site) => {
  let sheme = "";

  if (site.startsWith("https://")) {
    sheme = "https://";
  } else {
    sheme = "http://";
  }

  const name = site.replace(sheme, "");

  return { sheme, name };
};

console.log(getDomainInfo3(site3));
