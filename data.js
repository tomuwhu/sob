k = 0
n = 20
ds = [{
        name:   `Weboldal forráskód`,
        date:   `2023-07-20`,
        text:   `Példaprogramokat tároló adatszerkezet, forráskód-megjelenítő`,
        git:    [`SOB`, `https://github.com/tomuwhu/sob`, `http://sob.es6.eu/`],
        files: [{
            type:   `language-html`,
            fn:     `index.html`
        }, {
            type:   `javascript`,
            fn:     `data.js`
        }, {
            type:   `language-css`,
            fn:     `style.css`
        }
        ]
    },
    {
        name:   `Amőba <a href="https://svelte.dev/" target="x">Svelte</a>`,
        date:   `2023-07-22`,
        text:   `Amőba-kezdemény
        <a  href="https://en.wikipedia.org/wiki/Svelte"
            target="x">Svelte KIT Frontend Component Framework</a>`,
        git:    [`SOB`, `https://github.com/tomuwhu/sv01`, `http://www.inf.u-szeged.hu/~tnemeth/sv_amoba0/`],
        files: [{
            type:   `svelte`,
            fn:     `pp/Amoba.svelte`
        }]
    }]
s = x => `${x.map((e, i) => `<div class="c">
    <div class="x">${e.date}</div>
    <div class="x">${e.name}</div>
    <div class="x"><u class="k1">${e.text}</u></div>
    <div><table>
    ${e.git && e.git[2].length ? 
    `<td class="test bt">Próba: <a href="${e.git[2]}" target="git">${e.git[0]}</a></td>`
    : ``}
    <td class="bt">Forrás:</td>
    ${e.files ? e.files.map((fi, j) => `
    <td onclick='f(${i}, ${j}, "${fi.fn}")' class="bt" id="g${i}-${j}"><i>${fi.fn}</i></td>
    ` ).join('') : '<td class="bt"> --- <b>Nem listázható</b> --- </td>'} 
    ${e.git && e.git[1].length ? 
    `<td class="git bt">Git: <a href="${e.git[1]}" target="git">${e.git[0]}</a></td>`
    : ``}
    </table></div>
    </div><div class="break"></div>
`).join('')}`
ar = () => ds.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) 
té = (bsz, hsz1, hsz2) => {
    lt = new Levenshtein(hsz1, bsz).distance
    len = hsz1.length
    lt2 = new Levenshtein(hsz2, bsz).distance
    len2 = hsz2.length
    return Math.min(lt/len + lt2/len2)
}
sz = t => {
    $(`#code`).text("")
    if (!t.value.length) ar()
    else ds.sort( (r1, r2) => {
        e1 = té(t.value.toUpperCase(), r1.name.toUpperCase(), r1.text.toUpperCase())
        e2 = té(t.value.toUpperCase(), r2.name.toUpperCase(), r2.text.toUpperCase())
        return e1 - e2
    } )
    $('#content').html(s(ds.slice(k, k + n)))
}
function tget(fn) {
    $.get(fn, data => {
        $('pre').css('display','inline-block')
        $(`#code`).html(
            marked.parse(data, {mangle: false, headerIds: false})
        )
        $(`#code`).removeAttr('class')
        $(`#code`).addClass('markdown')
        $(`.bt`).removeClass("active")
        hljs.highlightAll()
    }, "text")
}
$(() => {
    $('#t1').click(() => { tget('frontend.md') })
    $('#t2').click(() => { tget('backend.md') })
    $('#t3').click(() => { tget('mobile.md') })
    disp()
})
function disp() {
    if (ds.length <= k + n) {
        $('#lny').hide()
    } 
    if (k <= 0) $('#fny').hide()
    ar()
    $('#content').html(s(ds.slice(k, k + n)))
    if (ds.length > n) {
        $('input').css('display','inline-block')
        $('hr').css('display','block')
    }
}
function pd(x) {
    if (x == 5) {
        if (ds.length > k + 5) {
            k += 5
            $('#lny').show()
        } 
        disp()
        $('#fny').show()
    }
    if (x == -5) {
        if (0 < k) {
            k -= 5
            $('#fny').show()
        } 
        disp()
        if (0 >= k) {
            $('#fny').hide()
            k = 0
        }
        $('#lny').show() 
    }
}
function f(i, j, fn) {
    $.get(fn, data => {
        $('pre').css('display','inline-block')
        $(`#code`).text(data)
        $(`#code`).removeAttr('class')
        $(`#code`).addClass(ds[i].files[j].type)
        $(`.bt`).removeClass("active")
        $(`#g${i}-${j}`).addClass("active")
        hljs.highlightAll()
    }, "text")
}