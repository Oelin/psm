let trim = src =>
  src.replaceAll(tok.white, '')
  .replaceAll(tok.nend, ':').trim()


let names = list => {
  let m

  return list.map(e =>
  (m = e.match(tok.name)) && m[1])
}


let clean = src => {
  src = trim(src)
  let list = src.split('\n')

  names(list)
  .forEach((name, n) => {
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, '')
  })

  return src
}
