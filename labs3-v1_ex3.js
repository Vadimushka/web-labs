function calculation(){
	var x = parseInt(document.getElementById('x').value);
	var y = parseInt(document.getElementById('y').value);
	
	
	var result = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
	
	alert(result);
}