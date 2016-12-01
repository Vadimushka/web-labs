var x = parseInt(prompt("Введите первое число: "));
var y = parseInt(prompt("Введите второе число: "));
var operand = prompt("Введите знак: ");

switch(operand){
	case "+":
		alert(x + operand + y + " = " + (x + y));
		break;
	case "-":
		alert(x + operand + y + " = " + (x - y));
		break;
	case "*":
		alert(x + operand + y + " = " + (x * y));
		break;
	case "/":
		if(y == 0){
			alert("Делить на ноль нельзя!");
		} else {
			alert(x + operand + y + " = " + (x / y));
		}
		break;
	default:
		alert("Такого знака нет..");
		break;
}