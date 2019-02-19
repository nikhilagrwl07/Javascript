var nikhil = {
    firstName: 'Nikhil',
    lastName: 'Agrawal',
    phoneNumber: '923423234324',
    address: {
        street: '6030 N Sheridan Rd',
        city: 'Chicago'
    }
};

////////////////////////Immediately invoked function expression (IIFEs) - Classic Example////////////////////////
(function (global, person) {
    var greeting = 'Hello';
    console.log('From within IIFE : ' + greeting + ' ' + person.firstName);
    console.log('From within IIFE referencing global var : ' +global.greeting + ' ' + person.firstName);
}(window, nikhil));


console.log('Outside of IIFE so greeting var will be referencing from global execution context' + greeting);



////////////////////////Immediately invoked function expression (IIFEs)////////////////////////
var iifeExample = function (person) {
    return 'Hi, ' + person.firstName + ' ' + person.lastName +
        ' Example showing Immediately invoked function expression (IIFEs)!!';
}(nikhil);

console.log(iifeExample);




