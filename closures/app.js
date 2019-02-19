var nikhil = {
    firstName: 'Nikhil',
    lastName: 'Agrawal',
    phoneNumber: '923423234324',
    address: {
        street: '6030 N Sheridan Rd',
        city: 'Chicago'
    }
};

// Example #1
function whatToGreet(whatToGreet) {

    return function (name) {
        console.log(whatToGreet + ' ' + name);

    }
}

var greet = whatToGreet('Hi');

greet(nikhil.firstName);


