// Run this code using npm run es6
console.log("----------Use of Let---------");
function getValue(condition) {
    var value = 30;
    var value = 40;
    // let value = 50; // Will  throw SyntaxError: Identifier 'value' has already been declared
    if (condition) {
        let value = "blue";
        console.log(value);
        // return value;
    } 
    console.log(value);
    // value exists here with a value of undefined

    // ----------Block Binding in Loops------
    for (var i = 0; i < 10; i++) {
        // do logic
    }
    console.log("i is accessible -->"+i);// i is still accessible here

    for (let j = 0; j < 10; j++) {
        // do logic
    }
    // console.log("is j accessible -->"+j); // Error j is not defined

    // ----------Functions in Loops------
    var funcs = [];
    for (var i = 0; i < 5; i++) {
        funcs.push(function() { console.log(i); });
    }
    funcs.forEach(function(func) {
        func();// outputs the number "5" 5 times, As i is shared accross each iteration of loop. 5 is last value of i after loop completed.
    });
    // If we use let to declare i then output will be 0, 1, 2, 3 and 4 
    // REASON: The let declaration creates a new variable i each time through the loop, so each function created inside the loop gets its own copy of i


}
getValue(true);

console.log("----------Use of const---------");
// const i; // Error as no initialization
function checkConst(condition) {
    console.log('typeof value -> '+typeof value); // will be undefined
    if(condition) {
        const myVar = 20;
        console.log(myVar);
        // console.log(typeof value);  // ReferenceError!
        let value = "blue";
    }
    // console.log(myVar); // Will throw an error as myVar is block level element 
}
checkConst(true);

console.log('--------------String Template Literal---------');

let fName = "Pravin";
let lName = "Sonawane";
console.log(`Full Name - ${fName} ${lName}`);

const num1 = 10;
const num2 = 30;
console.log(`Multiplication of ${num1} and ${num2} is => ${num1 * num2}`);

function doMath(operations, ...values){
    console.log(operations);
    if(operations[0]=== 'Add') {
        console.log(`${values[0] + values[1]}`);
    } else {
        console.log(`${values[0] - values[1]}`);
        
    }
}

doMath `Add${10} ${20}`; // doMath(['Add'],30,40);
doMath `Sub${10} ${20}`;
// We can show Multiple lines using string literals

console.log('--------- Functions default values---------');
function getSum(num1=1, num2=1) {
    console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
    console.log(`Argumnets values are ${arguments[0]} and ${arguments[2]}`);
}
getSum(2);

console.log('--------- Spread values---------');
function getSomeMore(...values) {
    let sum = 0;
    for (let i=0, len =values.length; i < len ; i++) {
        sum += values[i];
    }
    console.log(`Sum of ${values.length} values is ${sum}`);
}
getSomeMore(1,2,3,4);
// ANother way is
let val = [1,2,3,4,5];
getSomeMore(...val);

console.log('---------Arrow Functions =>---------');
let difference = (num1, num2) => num1 - num2; // Means return num1 - num2
console.log(`difference is ${difference(10,2)}`);

// If multiple lines then use {} inside function e.g.
let diff = (num1, num2) => {
    let sum = num1 - num2;
    console.log(`difference is ${sum}`);
}
diff(20,5);

console.log('---------Use of reduce, filter and Map---------');
let valueArr = [1,2,3,4,5];

let sumVals = valueArr.reduce((a,b) => a + b);
console.log(`Use of Reduce - ${sumVals}`);

let evens = valueArr.filter(v => v % 2 == 0);
console.log(`Use of filter - ${evens}`);

let doubles = valueArr.map(v => v * 2);
console.log(`Use of map - ${doubles}`);

console.log('---------Object---------');
function createAnimal(name, owner) {
    return {
        name,
        owner,
        getInfo() {
            return `${this.name} is owned by ${this.owner}`;
        },
        address:{
            street: "High Street",
            city: 'Glasgow'
        }
    };
}

let spot = createAnimal("Spot", "Doug");

console.log(`getInfo method => ${spot.getInfo()}`);
console.log(`address object => ${spot.address.street}`);
console.log(`Properties of spot Object => ${Object.getOwnPropertyNames(spot).join(" ")}`);

console.log('---------Object Destructuring---------');
let {name, owner} = spot;
console.log(`Name = ${name} and Owner = ${owner}`);

console.log('---------Inner Class Values ---------');
let {address} = spot;
console.log(`Address = ${address.city}`);

console.log('---------Array Destructuring---------');
let arr = [22,11,44];
let [,,arrVal] =  arr;
console.log(`Last value of array is = ${arrVal}`);

console.log('---------Array Destructuring Rest values---------');
let arr1 = [22,11,44];
let [,...lastVal] =  arr1;
console.log(`Last 2 values of array is = ${lastVal}`);

console.log('---------Switch values---------');
let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];
console.log(`Val1 = ${val1} Val2 = ${val2}`);

console.log('---------Switch Object Values---------');
let obj1 = {name: "ABC", age:'32'};
let obj2 = {name: "XYZ", age:'30'};

[obj1.name, obj2.name] = [obj2.name, obj1.name];
console.log(`${obj1.name} and ${obj1.age}`);

console.log('---------Classes---------');

class Person{
    constructor(name) {
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    static makePerson(name){
        return new Person(name);
    }

    getInfo() {
        return `Name is ${this._name}`;
    }
}

let p1 = new Person("Pravin");
console.log(p1.getInfo());
p1.name = "Ajit";
console.log(p1.getInfo());
let p2 = Person.makePerson("Ajit");
console.log(`Person Name is ${p2.name}`);

console.log('---------Sub Classes---------');
class Employee extends Person{
    constructor(name, employeeId){
        super(name);
        this._employeeId = employeeId;
    }

    get employeeId(){
        return this._employeeId;
    }
    set employeeId(employeeId){
        this._employeeId = employeeId;
    }

    getInfo(){
        return `Employee Id is ${this._employeeId}`;
    }
}

let emp1 = new Employee("Pravin", "901");
console.log(`Employee ${emp1.name} has ${emp1.employeeId} employee id`);

function getClass(classType) {
    switch(classType) {
        case 1:
            return Person;
            break;
        case 2:
            return Employee;
            break;
    }
}

class Manager extends getClass(1){
    constructor(name){
        super(name);
    }
}
let m = new Manager("Pravin");
console.log(`${m.getInfo()}`);

console.log('---------Symbol---------');
// Symbols are a new primitive type in ECMAScript 6. Symbols as property keys. Enumerating own property keys
let capital = Symbol("State Capital");

let maharshtra = {};
maharshtra[capital] = "Mumbai";

console.log(`Capital of Maharashtra = ${maharshtra[capital]}`);
console.log(`Symbol capital = ${capital.toString()}`);
console.log(typeof capital);

// 
let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};

console.log(`Object.getOwnPropertyNames don't return symbol ${Object.getOwnPropertyNames(obj)}`);
console.log('Object.getOwnPropertySymbols returns only symbol');
console.log(Object.getOwnPropertySymbols(obj));
console.log(`Reflect.ownKeys returns all symbol and other parameters`);
console.log(Reflect.ownKeys(obj));
//The name of Object.keys() doesn’t really work, anymore: it only considers enumerable property keys that are strings.
console.log(Object.keys(obj));

Object.defineProperty(obj,'nonEnum', { enumerable: false });
console.log(Object.keys(obj));

console.log('---------Array---------');
let array0 = Array();
array0.push(10);
array0.push(20);
array0.push(30);
array0.pop();
let array1 = Array.of(1,2,3);
let array2 = Array.from("Pravin");
let array3 = Array.from(array1, (value) => value * 2);

console.log(`Value of array1 => ${array0}`);
console.log(`Value of array1 => ${array1}`);
console.log(`Value of array1 => ${array2}`);
console.log(`Value of array1 => ${array3}`);

console.log('---------Set---------');// No duplication values
let mySet = new Set();
mySet.add(10);
mySet.add("Word");
mySet.add("Word"); // Size still 2 as no duplication values
console.log(`Size of set ${mySet.size}`);
console.log(`Set has 10: ${mySet.has(10)}`);
mySet.delete(10);
for (let val of mySet){
    console.log(`Values in set =  ${val}`);
}

console.log('---------Map---------');// Key Value pair
let myMap = new Map();
myMap.set("key1","word");
myMap.set("key2",10);
myMap.set("key1","words");
console.log(`Key 1 value  - ${myMap.get("key1")} And size of map is ${myMap.size}`);
myMap.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});

console.log('---------Promise---------');
let pr1 = Promise.resolve('Resolve Me');
pr1.then((res) => console.log(res));

let pr2 = new Promise((resolve, reject) => {
    setTimeout(resolve('Resolve Me..'), 2000);
});
pr2.then((res) => console.log(res));

// Handle reject
let someValue = 10;
let pr3 = new Promise((resolve, reject) => {
    if(someValue == 20) {
        resolve('Good Value');
    } else {
        reject('Bad Value');
    }
});
pr3.then((val) => console.log(`Success: ${val}`),
    (err) => console.log(`Error: ${err}`)
);
