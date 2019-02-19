function greeting(language) {

    return function (firstName, lastName) {

        if(language === 'English'){
            console.log('Hello ' + firstName + ' ' + lastName);
        }

        if(language === 'Hindi'){
            console.log('Kaise Ho ' + firstName + ' ' + lastName);
        }
    }
}


var greetInEnglish = greeting('English');
var greetInSpanish = greeting('Hindi');

greetInEnglish('Nikhil', 'Agrawal');
greetInSpanish('Nikhil', 'Agrawal');