
//can reuse the following type in multiple places
type Emp = {
    //this is where we define the properties and methods of the type Emp
    //sort of like class
    readonly id: number, //id is readonly property
    name: string
}

let employee : Emp = { //anotating the existing object with Emp type
    id: 1,
    name: 'Akash'
};

//employee.id = 1; //'readonly' keyword doesn't allow the vars declared with it to be changed
employee.name = 'Atharva'; //no nonsenese allowed in ts 

type draggable = {
    drag: () => void; //drag is a method that returns void 
}

type resizable = {
    resize: () => void; 
}

type UIwidget = draggable & resizable; //this is the practical use of intersection type

//creating an object of an intersection type
let texbox: UIwidget = {
    drag:() =>{}, //implements method of type dragable
    resize:() =>{} //implements method of type resizable
}
console.log(texbox); //just remove the error of it not being read

//literal types where the type is literally a specific value or a small set of values
// const p = 22/7; // using this doesn't make any sense
// type pi = 3.142 | typeof p; //this just takes of type number so it isn't literal

type pi = 3.142;

type height_metric = 'cm' | 'inch';

let my_height: height_metric = 'cm';
let p1:pi = 3.142;

console.log(my_height);
console.log(p1);

