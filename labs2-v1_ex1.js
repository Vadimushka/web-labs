function time(){
	var hour = parseInt(prompt("Введите количество часов: "));
	var minutes = parseInt(prompt("Введите количество минут: "));

	if((hour == 23) && (minutes == 59)){
		hour = 0;
		minutes = 0;
	} else if((minutes == 59)){
		hour++;
		minutes = 0;
	} else {
		minutes++;
	}

	alert("Через минуту будет " + hour + " час и " + minutes + " мин");
}