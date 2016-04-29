function send() {
    var usrPost = new XMLHttpRequest();
    var usrGet = new XMLHttpRequest();
    var data = {
        question: undefined,
        choices: []
    };
    var j = 0;

    data.question = document.getElementById("question").value;

    console.log(document.getElementsByTagName("input")[0].value);
    console.log(document.getElementsByTagName("input")[1].value);

    for (var i = 1; i <= 4; i++){
        if(document.getElementsByTagName("input")[i].value != ""){
            data.choices[j] = document.getElementsByTagName("input")[i].value;
            j++
        }
    }
    
    var info = JSON.stringify(data);
    console.log(info);

    usrPost.open('POST', 'http://polls.apiblueprint.org/questions', true);
    usrPost.setRequestHeader("Content-Type", "application/json");  // 400 (BAD REQUEST)
    usrPost.send(info);

    usrPost.onreadystatechange = function (){
        if (usrPost.readyState != 4) return;
        alert('Post request');
    };

    usrGet.open('GET', 'http://polls.apiblueprint.org/questions', true);
    usrGet.send();

    usrGet.onreadystatechange = function() {
        if (usrGet.readyState != 4) return;

        var result = JSON.parse(usrGet.responseText);
        console.log(result);

    };
}