var objeto = {
    nome: "Jacky",
    age: 18,
    gender: "femenino"
}

var personJSON = JSON.stringify(objeto);

//console.log(personJSON);

var str = '{"nome":"Jacky","age":18,"gender":"femenino"}';
var personObj = JSON.parse(str);



var Person = require ("./person");
var person1 = new Person ("Juan", "Jardim", );
var person2 = new Person ("Miguel", "Penaranda");

person1.age = 30;
person2.age = 20;

//console.log(person1.__proto__);
//console.log(person2.__proto__);


//person1.greet();


var Emitter = require("./emitter");
var config = require("./config");

var emitter = new Emitter();         

emitter.on(config.events.LOGIN, function(){
    console.log("LOGIN 1");
});

emitter.on(config.events.LOGIN, function(){
    console.log("LOGIN 2");
});

emitter.emit(config.events.LOGIN,);


