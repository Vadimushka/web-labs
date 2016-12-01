var input = document.getElementById('colDays');

var newYear = new Date(2017, 0, 1);
var today = Date.now();
	
var coldays = newYear - today; 

console.log(coldays);
input.value = Math.ceil(coldays / 86400000);