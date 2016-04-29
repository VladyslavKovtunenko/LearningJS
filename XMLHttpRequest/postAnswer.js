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
        question: "What Linux you use?",
        choices: []
    };

    data.choices = checked;
    
    var info = JSON.stringify(data);
    alert(info);

    usrPost.open('POST', 'http://polls.apiblueprint.org/questions', true);
    usrPost.setRequestHeader("Content-Type", "application/json");
    usrPost.send(info);

    usrPost.onreadystatechange = function (){
        if (usrPost.readyState != 4) alert('Post request');
        /*alert('Post request');*/
    };
}