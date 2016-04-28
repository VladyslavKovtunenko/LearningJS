function load() {
    var xhr = new XMLHttpRequest();
    var requestResult;

    console.log('start');
    xhr.open('GET', 'http://polls.apiblueprint.org/questions', true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        console.log("hi");
        requestResult = JSON.parse(xhr.responseText);
        console.log(requestResult);

        createList(requestResult);
    }
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