let op = /([abd-y]+)([zc])?/
let reg = /[a-z]/g
let elem = /("[^"]*"|\d+)/g
let loc = /a line of code/


let array = line =>
  [...line.matchAll(elem)]
  .map(e => JSON.parse(e[0]))


let code = line => {

}


let ast = list =>
  list.map(e => e.match(loc) ? code(e) : array(e))
