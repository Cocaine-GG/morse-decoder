const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
}

function decode(expr) {
	const reducer = Array.from(expr).map((e, i) => ((i + 1) % 10 === 0) ? e + ' ' : e).join('')
	const regZero = /(1)[0-1]*/g
	const split = reducer.split(' ')
	const splicer = split.slice(0, -1)
	const dash = ['11', '-']
	const dot = ['10', '.']
	const arr = splicer.map(e => e.match(regZero))
	const fractalMap = arr.map(e => e === null
		? ' '
		: e.toString().length > 2
			? e.toString()
					.split('')
					.map((el, i) => ((i + 1) % 2 === 0) ? el + ' ' : el)
					.join('')
					.trim()
					.split(' ')
			: e.join()
	)

	const innerArrSplicer = fractalMap.map(el => el === ' '
		? el
		: el.toString().length > 2
			? Array.from(el)
							.map(elem => elem === dash[0] ? dash[1] : dot[1])
							.join('')
			: el === dash[0] ? dash[1] : dot[1]
	)

	return innerArrSplicer.map((elem => elem === ' ' ? elem : MORSE_TABLE[elem])).join('')
}

module.exports = { decode }