let mapping = {
	'A': '.-',
	'B': '-...',
	'C': '-.-.',
	'D': '-..',
	'E': '.',
	'F': '..-.',
	'G': '--.',
	'H': '....',
	'I': '..',
	'J': '.---',
	'K': '-.-',
	'L': '.-..',
	'M': '--',
	'N': '-.',
	'O': '---',
	'P': '.--.',
	'Q': '--.-',
	'R': '.-.',
	'S': '...',
	'T': '-',
	'U': '..-',
	'V': '...-',
	'W': '.--',
	'X': '-..-',
	'Y': '-.--',
	'Z': '--..',
	'0': '-----',
	'1': '.----',
	'2': '..---',
	'3': '...--',
	'4': '....-',
	'5': '.....',
	'6': '-....',
	'7': '--...',
	'8': '---..',
	'9': '----.',
	' ': ' '
}
let reverseMapping = {}
for (let key in mapping) {
	reverseMapping[mapping[key]] = key
}

function a2m(char) {
	char = char.toUpperCase();
	if (mapping[char]) {
		return mapping[char]
	} else {
		return char
	}
}

function m2a(singleMorseCode) {
	if (reverseMapping[singleMorseCode]) {
		return reverseMapping[singleMorseCode]
	} else {
		return singleMorseCode
	}
}
document.getElementById('input').addEventListener('input', function() {
	let input = document.getElementById('input').value
	let output = ''
	if (input) {
		if (input.slice(0, 1) == '.' || input.slice(0, 1) == '-') {
			// input is morse code
			output = input.split(' ').map(m2a).join('');
			// create dash and dot to the id graphic
		} else {
			// input is characters
			output = input.split('').map(a2m).join(' ')
			let graphic = document.getElementById('graphic');
			let tempHtml = ``;
			for (let code of output) {
				if (code === '.') {
					tempHtml += "<div class='dot morse-div'></div>"
				} else if (code === '-') {
					tempHtml += "<div class='dash morse-div'></div>"
				} else if (code === ' ') {
					tempHtml += "<div class='space morse-div'></div>"
				}
			}
			graphic.innerHTML = tempHtml;
		}
		document.getElementById('output').value = output
	}
})
