function load() {
    var xhp = new XMLHttpRequest();
    var requestResult;

    console.log('start');
    xhp.open('GET', 'http://polls.apiblueprint.org/questions', false);
    xhp.send();

    requestResult = JSON.parse(xhp.responseText);
    console.log(requestResult);

    createList(requestResult);
}

function createList(object) {
    for (var i = 0; i < object.length; i++){
        var newItem = document.createElement('li');
        var itemString = object[i].question + "<ul><li>" + object[i].url + "</li>" + "<li>" + object[i].published_at + "</li>";

        if(object[i].choices.length){
            itemString += "<li>Choices:<ul>";
            for (var j = 0; j < object[i].choices.length; j++){
                itemString += "<li>" + object[i].choices[j].choice + "</li>";
            }
            itemString += "</ul>";
        }

        newItem.innerHTML = itemString + "</ul>";
        list.appendChild(newItem);
    }
}