"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate_tax(income, taxYear = 1999) {
    //all code paths are returning some value
    if (taxYear > 2022)
        return income * 1.5;
    return income * 1.0;
}
//using | we can create a union type 
function kgtolbs(weight) {
    // weight. only shows common properties between number and string
    // we can narrow down the type of the var as follows
    if (typeof weight == "number") {
        // weight. now this shows all the methods available in number objects
        return weight * 2.2;
    }
    else {
        // return weight * 2; 
        // weight. //shows the properties of string objects
        //to typecast the string in number/integer we can use 
        return parseInt(weight) * 2;
    }
    return 0;
}
//nullable types
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
        return name;
    }
    else {
        return null;
        console.log('Hola');
    }
    //why does this code path not require a return statement
    // return null; //just return has type undefine/void by default instead of null
    // return name;
}
function getCust(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let c1 = getCust(1);
// if(c1 != null && c1 !== undefined){ 
// }
//instead of the above if statement, we can use the optional property access operator
//? is the optional property access operator
console.log(c1?.birthday.getFullYear);
greet(null);
kgtolbs(10);
kgtolbs('10kg');
calculate_tax(150); //only takes as many number of arguments as we have mentioned unlike
//# sourceMappingURL=functions.js.map