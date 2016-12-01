function generated(){
	var name = document.getElementById('name').value,
		likeDo = document.getElementById('likeDo').value,
		friend = document.getElementById('friend').value,
		like_present = document.getElementById('like_present').value;
	
	var w = window.open("", "", "width=500,height=300");
	
	w.document.open();
	
	var str = '<h1>' + name + ' и ' + like_present +'</h1><hr><p>';
	w.document.write(str);
	
	str = 'В одном лесу жила мальнькая ' + name + ', которая очень любила ' + likeDo + ' чудесные песни. У нее так хорошо получалось, что весь лес собирался послушать её! От сороки она узнала, что у людей принято дарить ' + like_present + ' любимым исполнителям. А ' + like_present + ' она любила также сильно, как и ' + likeDo + '. Долго грустила ' + name + '. Но однажды, после очередного импровизированного концерта, ' + friend + ' подлетел к ' + name + ' и подарил её... ' + like_present + '! Уж он то был истинным джетельменом! ' + name + ' была невероятно счастлива!!!';
	w.document.write(str);
	
	str = '</p><input type="button" value="Закрыть" onClick="window.close();" >';
	w.document.write(str);
	
	w.document.close();
	
}