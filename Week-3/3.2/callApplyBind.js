function Employee (firstName, lastName, salery) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salery = salery;
}

const saleryRange = function (designation) {

  if(this.salery >= 500000)
    console.log(`${this.firstName} ${this.lastName}'s salery is high! for ${designation}`);
  else
    console.log(`${this.firstName} ${this.lastName}'s salery is low! for ${designation}`);

}

let employeeOne = new Employee("Bhushan", "Kulawade", 200000);

let employeeTwo = new Employee("Chiranjib", "Nandy", 600000);

let EmployeeThree = saleryRange.bind(employeeTwo);

saleryRange.call(employeeOne, "SDE 1");

saleryRange.apply(employeeTwo, ["SDE 2"]);

EmployeeThree("SDE 3");