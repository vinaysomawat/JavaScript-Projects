var tmarray = [
	"https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers3c9095c4.jpg",
	"https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers1dde2dff.jpg",
	"https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers2f856ebb.jpg",
	"https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers40b07bc7.jpg",
	"https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers51fd2ccc.jpg",
];

var index = 0;
document.getElementById("demo").src = tmarray[index];
var flag = 0;

function nextSlider() {
	index++;
	if (index > tmarray.length-1) {
		index = 0;
	}
	document.getElementById("demo").src = tmarray[index];
}

function prevSlider() {
	flag = 1;
	index--;
	if (index < 0) {
		index = tmarray.length - 1;
	}
	document.getElementById("demo").src = tmarray[index];
}
