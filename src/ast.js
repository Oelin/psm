let elem = /("[^"]*"|\d+)/g
let loc = /a line of code/


// parses an array of data values 

let array = line =>
  [...line.matchAll(elem)]
  .map(e => JSON.parse(e[0]))


let cut = line =>
  line.replaceall(',', '').replaceAll(/\s+/g, ' ')
  .split(' ')


// parses a line of assembly code

let code = line => {
	let parts = cut(line)
	
	return parts
}


let parse = list =>
  list.map(e => e.match(loc) ? code(e) : array(e))
