const box = document.getElementById('box');


setInterval(function() {
    let date = new Date();
    box.innerHTML= date.toLocaleTimeString();
} , 1000);


