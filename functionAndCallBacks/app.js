function sayHiLater() {

    var greeting = 'Hi';

    setTimeout(function () {
        console.log(greeting);
    }, 3000);
}

sayHiLater();


// Callback

function doSomeWorkAndCallBack(anyFunctionTobeCalledBack) {

    var a = 1000;
    var b = 2000;

    console.log('a = '+a);
    console.log('b = '+b);

    // callback
    anyFunctionTobeCalledBack();
}

doSomeWorkAndCallBack(function () {
   console.log('I am done!!');
});

doSomeWorkAndCallBack(function () {
    console.log('I am done. All Set !!');
});
