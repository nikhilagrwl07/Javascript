var person = {
    firstName: 'Nikhil',
    lastName: 'Agrawal',
    getFullName: function () {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

var logName = function (argument1, argument2) {
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments : ' + argument1 + ' ' + argument2);
    console.log('--------');
};

// bind() creates copy of function logName but does not executes it
var logPersonName = logName.bind(person);
logPersonName('FirstArgument', 'SecondArgument');


//call() executes method instead of creating copy of function
logName.call(person, 'FirstArgument', 'SecondArgument'); // first argument in call()
// points to this and remaining arguments are function parameters

//apply() does same thing as call() but expects array of argument
logName.apply(person, ['FirstArgument', 'SecondArgument']);



// Creating function on fly and invoking it by apply()
(function (argument1, argument2) {
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments : ' + argument1 + ' ' + argument2);
    console.log('--------');
}).apply(person,['FirstArgument', 'SecondArgument']);



//Function Borrowing - uses apply() or call()
var person2 = {
    firstName: 'Ritu',
    lastName: 'Agrawal'
};

console.log(person.getFullName.apply(person2));
// console.log(person.getFullName.call(person2));



//Function currying - uses bind()
function multiplyTwoNumbers(a, b) {
    return a*b;
}

var multiplyByTwo = multiplyTwoNumbers.bind(this,2);
console.log(multiplyByTwo(4));

var multiplyByTwoAndTwo = multiplyTwoNumbers.bind(this,2,2);
console.log(multiplyByTwoAndTwo(4)); // 4 is ignored here