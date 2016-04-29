function send() {
    var usrPost = new XMLHttpRequest();
    var usrGet = new XMLHttpRequest();
    var user ={};

    user.name = document.getElementById("user").value;
    user.age = document.getElementById("age").value;
    
    var info = JSON.stringify(user);
    console.log(info);

    usrPost.open('POST', 'http://polls.apiblueprint.org/questions', true);
    usrPost.setRequestHeader("X-Requested-With", "XMLHttpRequest");  // 400 (BAD REQUEST)
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

    }
}