let sales: number = 123456789;
let course: string = "Typescript";
let is_published: boolean = true;
let level;
let roll_no: number[] = [1,2,3,4,5] //declares an array of numbers only
//let roll_no1: number[] = [1,2,'3',4,5] doesn't work as it used to in js
//let numbers = [] creates an array of type any which we should again avoid
let student: [number, string] = [1, 'Atharva'] //tuples in ts
//student[0].toExponential
//student[1].charAt 
//enum allows to set range of values
//const keyword would somehow generate a more optimized js code, how?
const enum Size {Small = 1,Medim,Large} //by default assign small to 0, medium to 1 and so on...
let mysize: Size = Size.Large;
console.log(mysize);

level = 1;
level = 'a';

function render(document : any){ //since we can't know the type of the document, we are forced to use the 'any' datatype
    console.log(document);
}