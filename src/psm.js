let data = /("[^"]*"|\d+)/g
let code = /a line of code/
let op = /([abd-y]+)([zc])?/
let white = /^\s*[\r\n]+|#.*/gm
let name = /^([a-zA-Z_][\w_]*):/
let eon = /:[\n\s]+/g


let codes = [
  'addrr',
  'addrv',
  'subrr',
  'subrv',
  'andrr',
  'orrr',
  'xorrr',
  'notr',
  'bv',
  'movrr',
  'movrv',
  'loadrv',
  'storr',
  'stovr',
  'testrr',
  'pass'
]


let psm = src => {
  let tree = ast(strip(src))
}
