function send() {
    var usrPost = new XMLHttpRequest();
    var usrGet = new XMLHttpRequest();
    var user ={};
    
    user.name = "john";
    user.age = "24";
    /*user.name = document.getElementById("user").toString();
    user.age = document.getElementById("age").toString();*/
    
    var info = JSON.stringify(user);

    usrPost.open('POST', '/*куда?*/', true);
    usrPost.setRequestHeader('Content-Type', 'text-plain');
    usrPost.send(info);


    usrPost.onreadystatechange = function (){
        if (usrPost.readyState != 4) return;
        alert('Post request');
    };

    usrGet.open('GET', '/*откуда?*/', true);
    usrGet.send();

    usrGet.onreadystatechange = function() {
        if (usrGet.readyState != 4) return;

        var result = JSON.parse(usrGet.responseText);
        console.log(result);

    }
}