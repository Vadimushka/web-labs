var surname = prompt("Введите свою фамилию: ");
var name = prompt("Введите свое имя: ");
var lastname = prompt("Введите свое отчество: ");

var SNL = surname + " " + name + " " + lastname;

if(confirm(SNL + "\nВсе верно?")){
	alert("Молодец,\n" + SNL);
} else {
	alert("Ошибка в данных");
}