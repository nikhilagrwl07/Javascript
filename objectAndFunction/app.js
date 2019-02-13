var nikhil = {
    firstName: 'Nikhil',
    lastName: 'Agrawal',
    phoneNumber: '923423234324',
    address: {
        street: '6030 N Sheridan Rd',
        city: 'Chicago'
    }
};

console.log(nikhil);
console.log(nikhil.phoneNumber); // . dot operator
console.log(nikhil.firstName); // . dot operator
console.log(nikhil["address"]["city"]);

// This is example of function statement
function greet(person) {
    console.log("Hello - " + person.firstName + " " + person.lastName);
}

greet(nikhil);

greet({
    firstName: "Ritu",
    lastName: "Agrawal"
});


var english = {};
var hindi = {};


// Container of english and hindi which is containing greetWithSpread variable to avoid
// any namespace collision between greetWithSpread objects
english.greet= "Hello !";
hindi.greet= "Kaise ho !";

console.log(english);
console.log(hindi);

// object literal
var course = {
    courseName: 'Data Minning',
    courseId: 10,
    isactive: true
};


// converting object literal to string
console.log(JSON.stringify(course));


// converting string to object literal
var jsonValue = JSON.parse('{ "courseName": "Data Minning", "courseId": 10, "isactive": true}');
console.log(jsonValue);


// In javascript functions are objects

function treatingFunctionAsObject(){
    console.log("Hi!!!");
}

// adding language as one of property of an function
treatingFunctionAsObject.language = 'English';

console.log(treatingFunctionAsObject);
console.log(treatingFunctionAsObject.language);



// functionStatementExample();

//This is function expression means function is returning and storing value in var
var functionStatementExample = function () {
    console.log('Hi, Example showing function statement!!')
};

functionStatementExample();

function log(a) {
    a();
}


// // log('hi');
// log({
//     greeting: 'Hello'
// });

log(function () {
    console.log("functions in js are first class");
});






