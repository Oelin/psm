let array = line => {
  let m

  return (
    m = [...line.matchAll(token.data)]
    .map(e => JSON.parse(e[0]))
  )
  .length && m
}


let code = line => {

}


let parse = list =>
  list.map(e => e.match(token.code) ?
  code(e) : array(e))
