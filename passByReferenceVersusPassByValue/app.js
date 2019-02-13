// pass by value
var a = 10;
var b;

b = a;

a = 20;

console.log('a = ' + a);
console.log('b = ' + b);


// pass by reference (all objects (including functions))
var dog = { dogName : 'Jenni'};

var anotherDog = dog;

console.log('Before modifying. Dog = '+ dog.dogName);
console.log('Before modifying. AnotherDog = '+ anotherDog.dogName);

dog.dogName='Max';

console.log('After modifying. Dog = '+ dog.dogName);
console.log('After modifying. AnotherDog = '+ anotherDog.dogName);




// pass by reference (passing object as parameter)
function changeDogName(dog) {
    dog.dogName = 'Max';
}

dog = {dogName: 'Jenni'};

console.log('Before passing dog as function in parameter ' + dog.dogName);
changeDogName(dog);
console.log('after passing dog as function in parameter ' + dog.dogName);
