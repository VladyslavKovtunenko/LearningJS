function answer() {
    var checked = [];
    var i = 0;
    while(++i <= 6) {
        if(document.getElementById("check" + i).checked) {
            checked.push(document.getElementById("check" + i).getAttribute("name"));
        }
    }
    send(checked);
}

function send(checked) {
    var usrPost = new XMLHttpRequest();
    var data = {
        question: 'What Linux you use?',
        choices: []
    };

    data.choices = checked;
    
    var info = JSON.stringify(data);
    console.log(info);

    usrPost.open('POST', 'http://polls.apiblueprint.org/questions', true);
    usrPost.setRequestHeader("Content-Type", "application/json");
    usrPost.send(info);

    usrPost.onreadystatechange = function () {
        if (usrPost.readyState == 4){
            if (usrPost.status != 201 && usrPost.status != 200){
                alert(usrPost.status + ': ' + usrPost.statusText);
            } else load();
        }
    };

}

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