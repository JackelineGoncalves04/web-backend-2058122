var objeto = {
    nome: "Jacky",
    age: 18,
    gender: "fenenino"
}

var personJSON = JSON.stringify(objeto);

//console.log(personJSON);

var str = '{"nome":"Jacky","age":18,"gender":"fenenino"}';
var personObj = JSON.parse(str);



var Person = require ("./person");
var person1 = new Person ("Juan", "Jardim", );
var person2 = new Person ("Miguel", "Penaranda");

person1.age = 30;
person2.age = 20;

console.log(person1.__proto__);
console.log(person2.__proto__);



person1.greet();