var slideIndex=1;
showDivs(slideIndex);

function plusDivs(n) {
	console.log(n);
	showDivs(slideIndex +=n);
 }

function showDivs(n){
	var i;
	var x= document.getElementsByClassName("mySlides");
	if(n>x.length){slideIndex=1}
	if(n<1) {slideIndex=x.length}
	for(i=0;i<x.length;i++){
		x[i].style.display="none";
	}
	x[slideIndex-1].style.display="block";
			
}





var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}