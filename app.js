var printMultipleTimes = function(howManyTimes, whatToDraw) {
	for(var i = 0; i < howManyTimes; i++) {
		console.log(i + ":" + whatToDraw);
	}
}
printMultipleTimes(6, " =^.^=");

var fifthLetter = function(name) {
	if(name.length < 5) {
		return;
	}
	return console.log("dfnskjgnsg " + name[4]);
}
fifthLetter("Cerfduytu");

var medalForScore = function (score) {
	if(score < 3) {
		return console.log("Бронза");
	}
	if(score < 7) {
		return console.log("Срібна");
	}
	return console.log("Золото");
}


// Повна запись функції:
var a = function () {
	console.log("Hello World!");
}
a();

// Коротка запись функції:
function b() {
	console.log("Hello world 2!!")
}
b();

// Возврат значения из функции:


// Homework:

//	#1. Математические расчеты и функции

var сalculations = function(arg1, arg2) {
	return arg1 * arg2 + 777;
}

сalculations(36325,9824);



