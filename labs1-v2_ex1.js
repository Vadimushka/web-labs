var fio = prompt("Введите свои ФИО: ");
var gender = prompt("Введите свой пол: ");
var years = prompt("Введите свой возраст: ");

var bio = "ФИО: " + fio + "\nПол: " + gender + "\nВозраст: " + years;


if(confirm(bio + "\nВсе верно?")){
	alert("Молодец, " + fio);
} else {
	alert("Ошибка в данных");
}