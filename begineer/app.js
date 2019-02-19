function c() {
    // var myVar;
    console.log(myVar);
    console.log(myVar2);
}

function a() {
    var myVar = 20;
    console.log(myVar);
    b();

    console.log(myLet);

    let myLet = true;


    function b() {
        // var myVar;
        console.log(myVar);
        console.log(myVar2);
    }
}

// var myVar = 10;
// var myVar2 = "Nikhil";
//
// console.log(myVar);
// a();
// console.log(myVar);

console.log(1 < 2 < 3);
console.log(3 < 2 < 1);
console.log(1 < 3 < 2);


var a = 10;
var b = '10';

if (a == b) {
    console.log("Both are equal !!");
} else {
    console.log("No. Both are not equal!!");
}

if (a === b) {
    console.log("Both are equal !!");
} else {
    console.log("No. Both are not equal!!");
}


// Boolean coercion
var t = 0;
// goes out to internet and assign value to t if present
if (t || t === 0) {
    console.log("Something is present in t")
}


function greet(name = 'Ritu') {
    console.log("Hello - " + name);
}

greet("Nikhil");
greet();
greet(0);


// Showing use of this variable of global context
var c = {
    name: 'The c object',
    log: function () {
        var self = this; // this and self are variables pointing to same object by reference

        self.name = 'Updated c object';
        console.log(self);

        var setName = function (newName) {
            self.name = newName;
        };
        setName('Updated c object again!!');
        console.log(self);
    }
};

// Arrays in js can hold different types of datatype at one time


var arr= [
    1,      // Integer
    false,  // Boolean
    {        // Object       
        name: 'Nikhil',
        address: 'Chicago'
    },
    function (name) {   // Function
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "Agrawal" // String
];


arr[3](arr[2].name);




//function with arguments

function greetWithSpread(...other) { //Here other is spread

    if(other.length === 0 ){
        console.log('Missing parameters!!');
        console.log('------------');
        return;
    }

    console.log('firstName - ' + other[0]);
    console.log('lastName - ' + other[1]);
    console.log('Language - ' + other[2]);
}

greetWithSpread();
greetWithSpread('Nikhil');
greetWithSpread('Nikhil', 'Agrawal');
greetWithSpread('Nikhil', 'Agrawal', 'Hindi');



// Syntax Parser can be dangerous

function getPerson() {
    return {        // putting { opening parenthesis on same line as return
        firstName: 'Nikhil'
    }
}

console.log(getPerson());



//Js is very liberal with whitespaces providing programmers with lot of flexibility
var

    // first name
    firstname,

    // last name
    lastname,

    //phone number
    phoneNumber,

    // SSN (required)
    ssn;

var person = {
    // first Name
    firstname: 'Nikhil',

    //SSN (always required)
    ssn: 123456
};




