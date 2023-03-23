var myLogModule = require('./log.js');

myLogModule.info('Node.js started');

var person = require ('./person');
var person1 = new person ('Jackeline', 'Goncalves');
console.log(person1.fullName());