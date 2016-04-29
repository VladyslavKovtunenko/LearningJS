function load() {
    var getRequest = new XMLHttpRequest();
    var requestResult;

    getRequest.open('GET', 'http://polls.apiblueprint.org/questions', true);
    getRequest.send();

    getRequest.onreadystatechange = function() {
        if (getRequest.readyState != 4) return;
        
        requestResult = JSON.parse(getRequest.responseText);
        console.log(requestResult);

        createList(requestResult);
    }
}

function createList(object) {
    document.getElementById("list").innerHTML = "";
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