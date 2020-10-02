let tok = {
  white: /^\s*[\r\n]+|#.*/gm,
  nend: /:[\n\s]+/g,
  name: /^([a-zA-Z_][\w_]*):/,
  data: /(".*"|\d+)/g,
  code: /^[a-z]+\s([a-d]|\d+)(\s*,([a-d]|\d+))*$/
}


let codes = [
  'add reg reg',
  'add reg val',
  'sub reg reg',
  'sub reg val',
  'and reg reg',
  'or reg reg',
  'xor reg reg',
  'not reg',
  'b val',
  'mov reg reg',
  'mov reg val',
  'load reg val',
  'sto reg reg',
  'sto val reg',
  'test reg reg',
  'stop'
]


let psm = src => {
	
}
