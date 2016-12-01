i=0;
function slideShow() {
	ris = new Array('7.png', '8.png', '9.png', '6.png');
	
	if (i >= 4) i = 0;
	r = document.getElementById('slide')
	r.src = ris[i];
	i++; 
}