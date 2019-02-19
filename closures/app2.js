function buildArrayOfFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        )
    }
    return arr;
}


var arrayOfFunctions = buildArrayOfFunctions();

arrayOfFunctions[0]();
arrayOfFunctions[1]();
arrayOfFunctions[2]();

console.log('------------------------');

function buildArrayOfFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                }
            }(i)) //IIFE
        )
    }
    return arr;
}


var arrayOfFunctions2 = buildArrayOfFunctions2();


arrayOfFunctions2[0]();
arrayOfFunctions2[1]();
arrayOfFunctions2[2]();


