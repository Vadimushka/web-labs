i=0;
function slideShow() {
	ris = new Array('mamont.jpg', 'shark_l.jpg', 'begemot.jpg');
	
	if (i >= 3) i = 0;
	r = document.getElementById('slide')
	r.src = ris[i];
	i++; 
}