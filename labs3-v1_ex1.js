var now = new Date();

var nameMonth = ["¤нвар¤", "феврал¤", "марта", "апрел¤", "ма¤", "июн¤", "июл¤", "августа", "сентебр¤", "окт¤бр¤", "но¤бр¤", "декабр¤"];
var nameDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "п¤тница", "суббота"];

document.write("<h1>—егодн¤ " + now.getDate() + " " + nameMonth[now.getMonth()] + " " + now.getFullYear() + " года " + nameDay[now.getDay()] + "</h1>");