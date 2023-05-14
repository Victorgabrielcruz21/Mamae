var color = document.body;
var cor;
function pisca(){
    setInterval(function() {
        setInterval(function(){
            color.style.backgroundColor = "pink";
        }, 2000);
        setInterval(function(){
            color.style.backgroundColor = "white";
        }, 3000);
      }, 500);
}

pisca();
