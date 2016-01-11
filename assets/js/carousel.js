var angle = 0;
var duration = 3000; //duration for carousel change
function galleryspin(sign) {
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
try{
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
} catch(ex){

}
}
var positiveSpin = function() { galleryspin('')};
setInterval(positiveSpin,duration);
