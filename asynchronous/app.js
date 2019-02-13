// long running function
function waitForThreeSeconds() {
    var ms = 3000+ new Date().getTime();
    while (new Date()< ms){
    }
    console.log('Wait of 3 sec completed!');
}

// Handler for onClick event
function clickHandler() {
    console.log('click event!');
}

//listener for click event and calling clickHandler()
document.addEventListener('click', clickHandler);

waitForThreeSeconds();
console.log("finished execution")