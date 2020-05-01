var closebtn = document.getElementById("closebtn").style.display="none";
	var drop_menu = document.getElementById("drop-menu").style.display="block";
	
	function good(){
		document.getElementById("drop-menu").style.display="block";
}
	function closebtn(){
		document.getElementById("closebtn").style.display="none";
}
if(drop_menu = True){
	document.getElementById("weak").style.display="none";
}else{
	document.getElementById("weak").style.display="block";
}
function myFunction(x){
	if(x.matches){
		document.body.style.backgroundColor="#DEB300";
	}else{
		document.body.style.backgroundColor="white";
	}
}
var x = window.matchMedia("(max-width:400px)");
myFunction(x)
x.addListener(myFunction)

// dark mode

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function rega(){
	alert("You must be registered for one of our service to access the WhatsApp platform");
	return false;
}