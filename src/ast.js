let elem = /("[^"]*"|\d+)/g
let loc = /a line of code/


let cut = line =>
  line.replaceall(',', '').replaceAll(/\s+/g, ' ').split(' ')


// parses an array of data values 

let data = line =>
  [...line.matchAll(elem)].map(e => JSON.parse(e[0]))


// parses a line of assembly code

let code = line => {
  let parts = cut(line)
  return parts
}


let parse = list =>
  list.map(e => e.match(loc) ? code(e) : data(e))
