// :TODO Доделать метод

const find = function findMethod(collection, predicate, fromIndex) {
  let i = fromIndex || 0;
  const collLength = collection == null ? 0 : collection.length;
  if (typeof predicate === "function") {
    while (i < collLength) {
      const value = collection[i];
      if (predicate(value, i, collection)) {
        return value;
      }
      i++;
    }
  }
  if (typeof predicate === "object") {
    while (i < collLength) {
      console.log(collection[i]);
      i++;
    }
  }
  if (typeof predicate === "string") {
    while (i < collLength) {
      for (let collKey in collection[i]) {
        if (collKey === predicate && collection[i][collKey]) {
          return collection[i];
        }
      }
      i++;
    }
  }
  return undefined;
};

var users = [
  {user: "barney", age: 36, active: true},
  {user: "fred", age: 40, active: false},
  {user: "pebbles", age: 1, active: true},
  {user: "denis", age: 24, active: true},
  {user: "egor", age: 24, active: false},
  {user: "Anton", age: 24, active: true}
];

console.log(
  find(users, function(o) {
    return o.age < 40;
  })
);
console.log(find(users, {age: 1, active: true}));
console.log(find(users, ["active", false]));
console.log(find(users, "active"));
