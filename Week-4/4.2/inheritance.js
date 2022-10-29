//person class
function Person (name, age) {
	this.name = name;
  this.age = age;
}

//teacher class
function Teacher(name, age, subject) {
  Person.call(this, name, age)
  this.subject = subject;
}

//inherit teacher
Teacher.prototype = Object.create(Person.prototype);

//teacher function
Teacher.prototype.teach = function() {
  console.log(`${this.name} is now teaching ${this.subject}`);
}

//create object
let t1 = new Teacher("Bhushan", "30", "Javascript");

//call method
t1.teach();