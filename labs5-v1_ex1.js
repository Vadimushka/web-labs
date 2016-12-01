function generated(){
	var title = document.getElementById('title').value,
		signature = document.getElementById('signature').value;
		
	var dog = document.getElementById('dog');
	var flower = document.getElementById('flower');
	var bigdaisy = document.getElementById('bigdaisy');
	
	var img;
	if(dog.checked){
		img = '<img src="dog.jpg" />';
	}
	
	if(flower.checked){
		img = '<img src="flower.jpg" />';
	}
	
	if(bigdaisy.checked){
		img = '<img src="bigdaisy.png" />';
	}
	
	
	var backroungBlue = document.getElementById('backroungBlue');
	var backroungWhite = document.getElementById('backroungWhite');
	var backroungBlack = document.getElementById('backroungBlack');
	
	var backgroundColor;
	if(backroungBlue.selected){
		backgroundColor = backroungBlue.value;
	}
	if(backroungWhite.selected){
		backgroundColor = backroungWhite.value;
	}
	if(backroungBlack.selected){
		backgroundColor = backroungBlack.value;
	}
	
	
	
	var	colorWhite = document.getElementById('colorWhite');
	var	colorBlack = document.getElementById('colorBlack');
	var	colorBlue = document.getElementById('colorBlue');
		
	var color;
	if(colorBlue.checked){
		color = 'blue';
	}
	if(colorWhite.checked){
		color = 'white';
	}
	if(colorBlack.checked){
		color = 'black';
	}
	console.log(color);
	
	var style = '<head><style>body{background-color:' + backgroundColor + '; color: '  + color + ';}</style></head><body>';
	
	var win = window.open("", "", "width=1000,height=800");
	
	win.document.open();
	
	win.document.write(style);
	
	var str = '<h1>' + title + '</h1>';
	win.document.write(str);
	
	
	win.document.write(img);
	
	str = '<p>' + signature + '</p>';
	win.document.write(str);
	
	str = '<input type="button" value="Закрыть" onClick="window.close();" ></body>';
	win.document.write(str);
	
	win.document.close();
	
}