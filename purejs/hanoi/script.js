n = 5, i = 1, j = 2, s = 1, c = 0
h = (n, a, b) => n == 1 ? `${a}:${b}` : [h(n - 1, a, 6 - a - b), `${a}:${b}`, h(n - 1, 6 - a - b, b)].join(",")
mt = h(n, i, j).split(",").map(t => [t[0], t[2]])
pm = [0, 0, 0]
pm[i - 1] = n
setInterval(() => {
    if (s == 1) {
        g[mt[c][1] - 1].push(m = g[mt[c][0] - 1].pop())
        mit = m
        honnan = mt[c][0] - 1
        hova = mt[c][1] - 1
        document.getElementById(`k${m}`).style.top = "10px"
        setTimeout(() => {
            document.getElementById(`k${m}`).style.left = `${10 + 10 * mit + hova * 100}px`
            setTimeout(() => {
                document.getElementById(`k${m}`).style.top = `${150 - pm[hova] * 20}px`
                pm[honnan]--
                pm[hova]++
            }, 1000)
        }, 1000)
    }
    c = 2 ** n - 2 > c ? c + s : (s = 0, c)
}, 3000)
g = [[], [], []]
kt = Array(n).fill(0).map((_, i) => i)
kt.forEach(v => g[i - 1].push(v))
setTimeout(() => {
    kt.forEach(v => {
        g[i - 1].push(v)
        document.getElementById("b").innerHTML += `<div class="c c${v}" id="k${v}"><i>${n - v}</i></div>`
    })
}, 200)