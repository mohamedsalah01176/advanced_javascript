class Employee{
    constructor(id,salary,department){
        this.id=id;
        this.salary=salary;
        this.department=department;
    }
    getDetails() {
        return `the id is ${this.id} and the salary is ${this.salary} and the department is ${this.department}`;
    }
}

class Manager extends Employee{
    constructor(id,salary,department,teamSize){
        super(id,salary,department);
        this.teamSize=teamSize;
    }
    getDetails(){
        return `the id is ${this.id} and the salary is ${this.salary} and the department is ${this.department} and the teamSize ${this.teamSize}`;
    }
}

let manager1=new Manager(1,5000,"Engineering",10);
console.log(manager1.getDetails());

manager1.id=2;
console.log(manager1.getDetails());