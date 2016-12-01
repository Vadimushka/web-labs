function generatedBio(){
	var surname = document.getElementById('surname').value,
		name = document.getElementById('name').value,
		lastname = document.getElementById('lastname').value,
		year = document.getElementById('year').value,
		place = document.getElementById('place').value,
		like = document.getElementById('like').value,
		noLike = document.getElementById('noLike').value;
	
	var win = window.open("", "", "width=500,height=300");
	
	win.document.open();
	
	var str = '<h1>О себе</h1><hr><p>';
	win.document.write(str);
	
	str = 'Я, ' + surname + ' ' + name + ' ' + lastname + ' родился в ' + year + ' году в городе ' + place + '</p><br><p>';
	win.document.write(str);
	
	str = 'Больше всего я люблю ' + like + ' и очень не люблю ' + noLike + '. Было бы замечательно, всю жизнь только ' + like + ', но к сожалению приходится иногда и ' + noLike + '.</p>';
	win.document.write(str);
	
	str = '<input type="button" value="Закрыть" onClick="window.close();" >';
	win.document.write(str);
	
	win.document.close();
	
}