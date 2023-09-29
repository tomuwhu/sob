const h = (n, a, b) => n === 1 ? `|${a}⇨${b}| ` : h(n - 1, a, 6 - a - b) + h(1, a, b) + h(n - 1, 6 - a - b, b)
console.log(h(4, 1, 2))