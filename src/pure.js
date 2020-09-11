let white = /^\s*[\r\n]+|#.*/gm
let name = /^([a-zA-Z_][\w_]*):/
let nend = /:[\n\s]+/g


let prune = src =>
  src.replaceAll(white, '')
  .replaceAll(nend, ':').trim()


let names = list => {
  let m

  return list.map(e =>
    (m = e.match(name)) && m[1])
}


let pure = src => {
  src = prune(src)
  let list = src.split('\n')

  names(list).forEach((name, n) => {
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, '')
  })

  return src
}
