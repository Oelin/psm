let trim = src =>
  src.replaceAll(white, '')
  .replaceAll(eon, ':').trim()


let sub = list => {
  let m
	
  return list.map(e =>
  (m = e.match(name)) && m[1])
}


let strip = src => {
  src = trim(src)
  let list = src.split('\n')

  sub(list).forEach((name, n) => {
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, '')
  })

  return src
}
