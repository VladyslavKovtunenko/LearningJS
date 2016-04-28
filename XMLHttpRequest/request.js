function load() {
    var xhp = new XMLHttpRequest();
    var requestResult;

    console.log('start');
    xhp.open('GET', 'http://polls.apiblueprint.org/questions', false);
    xhp.send();

    requestResult = JSON.parse(xhp.responseText);
    console.log(requestResult);
    console.log(requestResult[0]);

    createList(requestResult);
}

function createList(object) {
    for (var i = 0; i < 2 /*object.length*/; i++){
        console.log(object.question);
    }
}