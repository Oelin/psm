let cut = line =>
  line.replaceAll(',', ' ')
  .replaceAll(/\s+/g, ' ')
  .split(' ')


let types = args =>
  args.map(a => isNaN(parseInt(a)) ? 'r' : 'v')


// parser

let pdata = line =>
  [...line.matchAll(data)]
  .map(e => JSON.parse(e[0]))


let pcode = line => {
	
}


// construct an abstract syntax tree

let ast = src =>
  src.map(e => e.match(code) ? pcode(e) : pdata(e))
