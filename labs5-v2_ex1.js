function generated(){
	var painter1 = document.getElementById('painter1');
	var painter2 = document.getElementById('painter2');
	var painter3 = document.getElementById('painter3');
	
	var title;
	var img;
	
	if(painter1.selected){
		title = '<h1>Айвазовский</h1>';
		img = '<img src="Айвазовский.jpg" />';
	}
	if(painter2.selected){
		title = '<h1>Репин</h1>';
		img = '<img src="Репин.jpg" />';
	}
	if(painter3.selected){
		title = '<h1>Тропинин</h1>';
		img = '<img src="Тропинин.jpg" />';
	}
	
	var	signature = document.getElementById('signature').value;
	
	var	imgFon1 = document.getElementById('imgFon1');
	var	imgFon2 = document.getElementById('imgFon2');
	var	imgFon3 = document.getElementById('imgFon3');
	
	var imageFon;
	if(imgFon1.checked){
		imageFon = 'background-image: url(fon1.gif); background-repeat: repeat;';
	}
	if(imgFon2.checked){
		imageFon = 'background-image: url(fon2.gif); background-repeat: repeat;';
	}
	if(imgFon3.checked){
		imageFon = 'background-image: url(fon3.gif); background-repeat: repeat;';
	}
	
	
	var italic = document.getElementById('italic');
	var underline = document.getElementById('underline');
	var bold = document.getElementById('bold');
	
	var font;
	
	if(italic.checked && !bold.checked && !underline.checked){
		font = 'font-style: italic;';
	}
	
	if(underline.checked && !bold.checked  && !italic.checked){
		font = "text-decoration: underline;";
	}
	
	if(bold.checked && !underline.checked && !italic.checked){
		font = 'font-weight: bold;';
	}
	
	if(italic.checked && bold.checked && !underline.checked){
		font = 'font: bold italic 100% serif;';
	}
	if(underline.checked && bold.checked && !italic.checked){
		font = 'font-weight: bold; text-decoration: underline;';
	}
	if(italic.checked && underline.checked && !bold.checked ){
		font = 'font-style: italic;text-decoration: underline;';
	}
	if(italic.checked && bold.checked && underline.checked){
		font = 'font: bold italic 100% serif;text-decoration: underline;';
	}

	
	var style = '<head><style>body{' + imageFon + font + '}</style></head><body>';
	
	var win = window.open("", "", "width=600,height=600");
	
	win.document.open();
	
	win.document.write(style);
	
	win.document.write(title);
	
	win.document.write(img);
	
	str = '<p>' + signature + '</p>';
	win.document.write(str);
	
	str = '<input type="button" value="Закрыть" onClick="window.close();" ></body>';
	win.document.write(str);
	
	win.document.close();
	
}