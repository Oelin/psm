let array = line => {
  let m

  return (
    m = [...line.matchAll(tok.data)]
    .map(e => JSON.parse(e[0]))
  )
  .length && m
}


let code = line => {

}


let ast = lines =>
  lines.map(e => e.match(tok.code) ? code(e) : array(e))
