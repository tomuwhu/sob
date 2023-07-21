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
        name:   ` Cica kód` ,
        date:   `2023-07-20`,
        text:   `Példaprogramokat tároló adatszer`,
        git:    [`SOB`, `https://github.com/tomuwhu/sob`, `http://sob.es6.eu/`],
        files: [{
            type:   `language-html`,
            fn:     `indexdfg.html`
        }, {
            type:   `javascript`,
            fn:     `datadfgfdg.js`
        }, {
            type:   `language-css`,
            fn:     `styledfgdfg.css`
        }
        ]
    }]
s = x => `${x.map((e, i) => `<div class="c">
    <div class="x">${e.date}</div>
    <div class="x">${e.name}</div>
    <div class="x"><u class="k1">${e.text}</u></div>
    <div><table>
    <td class="test bt">Próba: <a href="${e.git[2]}" target="git">${e.git[0]}</a></td>
    <td class="bt">Forrás:</td>
    ${e.files.map((fi, j) => `<td onclick='f(${i}, ${j})' class="bt" id="g${i}-${j}"><i>${fi.fn}</i></td>` ).join('')}
    <td class="git bt">Git: <a href="${e.git[1]}" target="git">${e.git[0]}</a></td>
    </table></div>
    </div>
`).join('')}`
sz = t => {
    $('#content').html(s(ds.filter( r => {
        lt = new Levenshtein(r.name.toUpperCase(), t.value.toUpperCase()).distance
        len = r.name.length
        lt2 = new Levenshtein(r.text.toUpperCase(), t.value.toUpperCase()).distance
        len2 = r.text.length
        return (lt/len < 0.9) || (lt2/len2 < 0.92)
    } )))
}
$(() => {
    $('#content').html(s(ds))
})
function f(i, j) {
    $.get(ds[i].files[j].fn, data => {
        $(`#code`).text(data)
        $(`#code`).removeAttr('class')
        $(`#code`).addClass(ds[i].files[j].type)
        $(`.bt`).removeClass("active")
        $(`#g${i}-${j}`).addClass("active")
        hljs.highlightAll()
    }, "text")
}