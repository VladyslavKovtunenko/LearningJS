function post() {
    var postRequest = new XMLHttpRequest();
    var question = JSON.stringify({
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby"
            ]
        });

    postRequest.open('POST', 'http://polls.apiblueprint.org/questions', true);
    postRequest.setRequestHeader('Content-Type', 'text-plain');
    postRequest.send(question);


    postRequest.onreadystatechange = function (){
        if (postRequest.readyState != 4) return;
        alert('Post request');
    }
}