const collection = [
  { title: "Book of Fooos", author: "FooBar", year: 1111 },
  { title: "Cymbeline", author: "Shakespeare", year: 1611 },
  { title: "The Tempest", author: "Shakespeare", year: 1611 },
  { title: "Book of Foos Barrrs", author: "FooBar", year: 2222 },
  { title: "Still foooing", author: "FooBar", year: 3333 },
  { title: "Happy Foo", author: "FooBar", year: 4444 },
];

const where1 = { author: "Shakespeare", year: 1611 };
const where2 = { author: "undefined", year: 1611 };
const where3 = { year: 4444 };
const where4 = { author: "Shakespeare", year: 1611, title: "The Tempest" };

// Испытания. Javascript: Детектирование

const findWhere = (coll, data) => {
  const keys = Object.keys(data);

  for (const item of coll) {
    let swith = true;
    for (const key of keys) {
      if (!(key in item) || data[key] !== item[key]) {
        swith = false;
        break;
      }
    }
    if (swith) return item;
  }

  return null;
};

console.log(findWhere(collection, where2));
