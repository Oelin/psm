let white = /^\s*[\r\n]+|#.*/gm
let name = /^([a-zA-Z_][\w_]*):/
let eon = /:[\n\s]+/g


let trim = src =>
  src.replaceAll(white, '')
  .replaceAll(eon, ':').trim()


let names = list => {
  let m

  return list.map(e =>
  (m = e.match(name)) && m[1])
}


let clean = src => {
  src = trim(src)
  let list = src.split('\n')

  names(list).forEach((name, n) => {
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, '')
  })

  return src
}
