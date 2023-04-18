var colorArray = [
	"YELLOW",
    "RED",
    "CHOCOLATE",
	"PINK",
	"BROWN",
	"VOILET",
	"BLUE",
    "GREEN",
    "NAVY",
    "PURPLE",
    "ORANGE",
    "ORANGERED"
];

function setRandomBg() {
	setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
}

function buildDropdown() {
	let container = document.getElementById("container");

	let label = document.createElement("label");
	label.className = "text-center";
	label.innerHTML = "Choose Colour: ";

	let select = document.createElement("select");
	select.onchange = function () {
		dropdownChange(this);
	};
	for (let i = 0; i < colorArray.length; i++) {
		let option = document.createElement("option");
		option.innerHTML = colorArray[i];
		option.value = colorArray[i];
		select.append(option);
	}

	container.append(label);
    container.append(select);
    setColor(colorArray[0]);
}

function dropdownChange(event) {
    setColor(event.value.toLowerCase());
	// console.log("event", event.value);
}

function setColor(color) {
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
}
