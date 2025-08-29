"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
let roll_no = [1, 2, 3, 4, 5]; //declares an array of numbers only
//let roll_no1: number[] = [1,2,'3',4,5] doesn't work as it used to in js
//let numbers = [] creates an array of type any which we should again avoid
let student = [1, 'Atharva']; //tuples in ts
//student[0].toExponential
//student[1].charAt 
//enum allows to set range of values
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medim"] = 2] = "Medim";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {})); //by default assign small to 0, medium to 1 and so on...
let mysize = Size.Large;
console.log(mysize);
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
//# sourceMappingURL=data_types.js.map