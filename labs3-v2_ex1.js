var year = prompt("¬ведите год рождени¤ [xxxx]:");
var month = prompt("¬ведите номер мес¤ца рождени¤ [1-12]:");
var days = prompt("¬ведите день рождени¤:");
	
var birthday  = new Date(year, (month-1), days);

var nameMonth = ["¤нвар¤", "феврал¤", "марта", "апрел¤", "ма¤", "июн¤", "июл¤", "августа", "сентебр¤", "окт¤бр¤", "но¤бр¤", "декабр¤"];
var nameDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "п¤тница", "суббота"];

document.write("<h1>я родилс¤ " + birthday.getDate() + " " + nameMonth[birthday.getMonth()] + " " + birthday.getFullYear() + " года в " + nameDay[birthday.getDay()] + "</h1>");