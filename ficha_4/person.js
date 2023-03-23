function Person(firstName, lastName, age){
    this.firstName =firstName,
    this.lastName = lastName,
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

}

Person.prototype.greet = function(){
    console.log("Hello " + this.fullName() + ' ' + this.age);

}

Person.prototype.age = 0;


module.exports = Person;