var tmarray = [
	"Thank you so much for a job well done",
	"You guys are the best! Keep up the great work!",
	"I just wanted to let you know that it’s been great working with you.",
	"You’ve been so helpful. Is there anything I can do for you?",
];

var index = 0;
document.getElementById("demo").innerHTML = tmarray[index];

function nextSlider() {
	index++;
	index %= 4;
	document.getElementById("demo").innerHTML = tmarray[index];
}

function prevSlider() {
	index--;
	if (index < 0) {
		index = 4;
	}
	document.getElementById("demo").innerHTML = tmarray[index];
}
