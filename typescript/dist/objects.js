"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    id: 1,
    name: 'Akash'
};
//employee.id = 1; //'readonly' keyword doesn't allow the vars declared with it to be changed
employee.name = 'Atharva'; //no nonsenese allowed in ts 
//creating an object of an intersection type
let texbox = {
    drag: () => { }, //implements method of type dragable
    resize: () => { } //implements method of type resizable
};
console.log(texbox); //just remove the error of it not being read
let my_height = 'cm';
let p1 = 3.142;
console.log(my_height);
console.log(p1);
//# sourceMappingURL=objects.js.map