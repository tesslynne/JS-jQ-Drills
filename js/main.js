var newElement = document.createElement("h1")

var newText = document.createTextNode("This is a drill!")

newElement.appendChild(newText)

var position = document.getElementsByTagName("ul")[0]

position.appendChild(newElement)



document.getElementById("styleThis").className = "newStyle";


// remove an element from the page on click
$(document).ready(function(){
    $("button").click(function(){
        $("#french").remove();
    });

});


// add a class to something - see above
