var col = 10;
var color;

document.write('<div style="float: left">');
document.write('<table>');
for(i = 1; i <= col; i++){
	document.write("<tr>");
		for(j = 1; j <= col; j++){
			if (i+j < 10){
				color = "Cyan"; 
			} else {
				color = "DarkBlue";
			}
			document.write('<td style="width: 45px; height: 45px; background-color:' + color + '"></td>');
		}
	document.write("</tr>");
}
document.write("</table>");
document.write("</div>");


document.write('<div style="float: right">');
document.write('<table>');
for(i = 1; i <= col; i++){
	document.write("<tr>");
		for(j = 1; j <= col; j++){
			if((i + j)%4 == 0) {
				color = "GreenYellow";
			} else {
				color = "Plum";
			}
			document.write('<td style="width: 45px; height: 45px;color: white; background-color:' + color + '"></td>');
		}
	document.write("</tr>");
}
document.write("</table>");
document.write("</div>");