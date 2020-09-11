let prune = src =>
  src.replaceAll(token.white, '')
  .replaceAll(token.nend, ':').trim()


let names = list => {
  let m

  return list.map(e =>
    (m = e.match(token.name)) && m[1])
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
