function getMonth(msg) {
	let readNumber = parseInt(prompt(msg));
	checkMonth(readNumber)
}

function checkMonth(number) {
	if (number === 12 || number === 1 || number === 2) {
		document.write("winter")
	} else if (number === 3 || number === 4 || number === 5) {
		document.write("spring")
	} else if (number === 6 || number === 7 || number === 8) {
		document.write("summer")
	} else if (number === 9 || number === 10 || number === 11) {
		document.write("autumn")
	} else {
		getMonth("Error! Write corect month!")
	}
}

getMonth("What is the month number?")
