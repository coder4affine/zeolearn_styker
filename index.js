{
  var x = 2;
}

{
  var x = 3;
}

console.log(x);

{
  let x = 3;
}

{
  let x = 4;
}

console.log(x);

const x = 4;

x = 5;

const x = { a: 1, b: 2 };
x.a = 3;

console.log(x);

const x = [1, 2];

x.push(3);

console.log(x);

// string literals

const fname = "yagnesh";

const lname = "modh";

const fullName = `${fname} ${lname}'s car`;

console.log(fullName);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const es5 =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "<title>Document</title>" +
  "</head>" +
  "<body>" +
  "" +
  "</body>" +
  "</html>";

const es6 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(es6);

const a = 1;

const obj = {
  a: a,
  b: 2,
  c: function() {
    return this.a + this.b;
  }
};

const objEs6 = {
  a,
  b: 2,
  c() {
    return this.a + this.b;
  }
};

console.log(objEs6.a);
console.log(objEs6.b);
console.log(objEs6.c());

function add(a, b) {
  return a + b;
}

const add1 = function(a, b) {
  return a + b;
};

const add2 = (a, b) => a + b;

const greet = name => `Hello, ${name}`;

console.log(add(1, 3));

console.log(add1(1, 3));

console.log(add2(1, 3));

console.log(greet("yagnesh"));

// Functions

function add(a, b) {
  return a + b;
}

const add1 = function(a, b) {
  return a + b;
};

// arrow function

const add2 = (a, b) => a + b;

const greet = name => `Hello, ${name}`;

console.log(add(1, 3));

console.log(add1(1, 3));

console.log(add2(1, 3));

console.log(greet("yagnesh"));

const a = 1;
const b = 2;

const bl = true;

const xyz = null;

console.log(!bl);

console.log(!xyz);

const c = a || b;
const d = a && b;

console.log(c);
console.log(d);

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  get type() {
    return `${this._type} abc`;
  }

  set type(value) {
    this._type = value.toUpperCase();
  }

  makeSound = () => {
    console.log("Animal Sound");
    setTimeout(() => {
      console.log(this.type);
    }, 1000);
  };
}

class Cat extends Animal {
  constructor(type) {
    super(type);
  }

  makeSound = () => {
    super.makeSound();
    console.log("Meow");
  };
}

const a = new Animal();

const c = new Cat("Cat");

console.log(c.type);

console.log(c.makeSound());

// spread operator

const obj = { a: 1, b: 2 };

const obj1 = Object.assign({}, { a: 1, b: 3 });

console.log(obj);
console.log(obj1);

// spread operator

const obj = { a: 1, b: 2 };

const obj1 = { ...obj, b: 3 };

const obj2 = { ...obj, c: 3 };

console.log(obj1);

console.log(obj2);

// const { a, c } = obj2

// console.log(a)
// console.log(c)

const { a: aa, b, c, ...rest } = obj2;

console.log(aa);
console.log(rest);

const arr = [1, 2, 3, 4, 5, 6];

const arr1 = [7, ...arr];

const arr2 = [...arr.slice(0, 3), ...arr.slice(3 + 1)];

console.log(arr2);

console.log(arr1);

const arr = [1, 2, 3, 4, 5, 6, 7];

const [, , , b, ...rest] = arr;

console.log(b);
console.log(rest);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "female"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "dipeeka",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const index = users.findIndex(user => user.name === "rohit");

console.log(index);

const updatedUsers = [
  ...users.slice(0, index),
  { ...users[index], gender: "male" },
  ...users.slice(index + 1)
];

const updatedUsers1 = updatedUsers.filter(x => x.name.includes("v"));

console.log(updatedUsers1);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "female"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "dipeeka",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const updatedUser = users.map((item, index) => {
  if (item.name === "rohit") {
    return { ...item, gender: "male", profession: "cricketer" };
  }
  if (item.gender === "male") {
    return { ...item, profession: "cricketer" };
  }
  return { ...item, profession: "actor" };
});

console.log(updatedUser);

// map
// reduce
// forin
// forof

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "female"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "dipeeka",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

console.time("map loop");

const updatedUser = users.map((item, index) => {
  if (item.name === "rohit") {
    return { ...item, gender: "male", profession: "cricketer" };
  }
  if (item.gender === "male") {
    return { ...item, profession: "cricketer" };
  }
  return { ...item, profession: "actor" };
});

console.timeEnd("map loop");

console.time("Reduce loop");

const updatedUsers = users.reduce((p, c) => {
  let user = c;
  if (c.gender === "male") {
    user = { ...user, profession: "cricketer" };
  }
  if (c.gender === "female") {
    if (c.name === "rohit") {
      user = { ...user, gender: "male" };
    }
    user = { ...user, profession: "actor" };
  }
  return [...p, user];
}, []);

console.timeEnd("Reduce loop");

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "dipeeka",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

// {
//     male: [],
//     female: []
// }

const x = "name";

const obj = { [x]: "yagnesh" };
console.log(obj["fname"]);

const groupBy = users.reduce((p, c) => {
  const { name } = c;
  (p[c.gender] = p[c.gender] || []).push(name);
  return p;
}, {});

console.log(groupBy);

const obj = { a: 1, b: 2 };

const arr = [1, 2, 3, 5, 6];

for (let item in obj) {
  console.log(item);
  console.log(obj[item]);
}

for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  console.log(value);
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolve");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 reject");
  }, 1000);
});

// p1.then(value => console.log(value)).catch(err => console.log(err));

const xyz = async () => {
  try {
    const abc = await Promise.race([p1, p2]);
    console.log(abc);
  } catch (error) {
    console.log(error);
  }
};

console.log(xyz());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolve");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 reject");
  }, 1000);
});

function* xyz() {
  yield p1;
  yield p2;
  yield 3;
  return "hello";
}

const gen = xyz();

for (let item of gen) {
  console.log(item);
}

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
