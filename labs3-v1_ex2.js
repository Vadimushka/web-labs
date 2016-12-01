var input = document.getElementById('colDays');
	
var year = prompt("¬ведите год рождени¤ [xxxx]:");
var month = prompt("¬ведите номер мес¤ца рождени¤ [1-12]:");
var days = prompt("¬ведите день рождени¤:");
	
var birthday = new Date(year, (month-1), days);
var today = Date.now();
	
var coldays = today - birthday; 

console.log(coldays);
input.value = Math.ceil(coldays / 86400000);

