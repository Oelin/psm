## psm
psm is an assembler for [pixy](https://circuitverse.org/27264/projects/pixy-indev) written in JavaScript.

* include in your site

```html
<script src='path/to/dist/psm.js' async></script>
```

* produce pixy binaries

```js
let code = `
# count down from 10
mov a, 10
mov b, 1234 # tty stdout address
loop: add a, 0
bz $end
sub a, 1
sto a, b
b $loop
end: pass`

psm(code)
// => Int32Array(8) [1342177290, 1234, 134217728, 1174405127, 402653185, 1619001344, 1073741826, 2013265920]
```

`
