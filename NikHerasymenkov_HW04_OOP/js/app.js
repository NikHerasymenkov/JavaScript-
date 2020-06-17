'use strict';
import {Worker} from './CLasses/Worker';
import {MyString} from './CLasses/MyString';
import {Student} from "./CLasses/Student";


const worker = new Worker('Ivan', 'Ivanov', 10, 31);
const worker2 = new Worker('Petr', 'Petrov', 8, 29);
let sum = worker.getSalary() + worker2.getSalary();
console.log(sum);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
console.log(worker2.getSalary());

const str=new MyString();
console.log(str.reverse);
console.log(str.ucFirst);
console.log(str.ucWorld);

const student =new Student('Иван','Иванов',2016 );
console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());
