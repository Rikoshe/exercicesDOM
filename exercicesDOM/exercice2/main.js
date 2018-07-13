var colorSelection = getElementsByClassName("color choice");
var clickBox = getElementsByClassName("color");
clickBox.onClick("colorChange");
function colorChange (){
    clickBox.style.backgroundColor = colorSelection.style.backgroundColor;
    colorChange ();
}














































// var choices = document.getElementsByClassName("choice");
// var choosenColor = document.getElementById("choosenColor");

// for (var i = 0; i < choices.length; i++) {
//   choices[i].onclick = function() {
//     var color = this.style.background;
//     choosenColor.style.background = color;
//   };
// }
