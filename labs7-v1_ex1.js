i = 0;
function change() {
	borderImg = document.getElementById('borderImg');
	el = document.getElementById('el');
	
	if (i == 0){
		borderImg.style.borderColor = '#0000ff';
		el.value = 'изменить цвет рамки на серый';
		i = 1;
	} else {
		borderImg.style.borderColor = '#808080';
		el.value = 'изменить цвет рамки';
		i = 0;
	}
}