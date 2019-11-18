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
