var text;
function calculateText() {
	text = document.getElementById("inputID").value;
	if (!text) {
		alert("Warning! Please enter the input.");
	} else {
		let totalWords, readingTime, mostFreqWord;

        [totalWords, readingTime] = countWords(text);
        
        mostFreqWord =  checkFreqWord(text);
		document.getElementById("words").innerHTML = totalWords + " words";
		document.getElementById("time").innerHTML =
            "You'll take " + readingTime + " seconds to read this and most frequent word is '" + mostFreqWord + "'.";
	}
}

function countWords(text) {
	let words = text.split(" ").length;

	return [words, Math.floor(words / 3)];
}

function checkFreqWord(text) {
    const occur = text.split(" ").reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    let temp =  Object.keys(occur).reduce(function (a, b) {
        return occur[a] > occur[b] ? a : b;
    });

    return temp;
}
