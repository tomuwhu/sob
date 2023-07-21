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
    {   name:   `Répa télapó`,
        date:   `2023-08-02`,
        text:   `Karácsonyra megígért rágógumi`},
    {   name:   `Hangszóró`,
        date:   `2023-08-02`,
        text:   `Tüskecumi`}]
s = x => `${x.map((e, i) => `<div class="c">
    <div class="x">${e.date}</div>
    <div class="x">${e.name}</div>
    <div class="x"><u class="k1">${e.text}</u></div>
    <div><table>
    ${e.git && e.git[2].length ? `<td class="test bt">Próba: <a href="${e.git[2]}" target="git">${e.git[0]}</a></td>` : ``}
    <td class="bt">Forrás:</td>
    ${e.files ? e.files.map((fi, j) => `
    <td onclick='f(${i}, ${j}, "${fi.fn}")' class="bt" id="g${i}-${j}"><i>${fi.fn}</i></td>
    ` ).join('') : '<td class="bt"> --- <b>Nem listázható</b> --- </td>'} 
    ${e.git && e.git[1].length ? `<td class="git bt">Git: <a href="${e.git[1]}" target="git">${e.git[0]}</a></td>` : ``}
    </table></div>
    </div>
`).join('')}`

té = (bsz, hsz1, hsz2) => {
    lt = new Levenshtein(hsz1, bsz).distance
    len = hsz1.length
    lt2 = new Levenshtein(hsz2, bsz).distance
    len2 = hsz2.length
    return Math.min(lt/len + lt2/len2)
}

sz = t => {
    $(`#code`).text("")
    ds.sort( (r1, r2) => {
        if (!t.value.length) return true
        e1 = té(t.value.toUpperCase(), r1.name.toUpperCase(), r1.text.toUpperCase())
        e2 = té(t.value.toUpperCase(), r2.name.toUpperCase(), r2.text.toUpperCase())
        return e1 - e2
    } )
    $('#content').html(s(ds.slice(0, 2)))
}
$(() => {
    $('#content').html(s(ds.slice(0, 2)))
})
function f(i, j, fn) {
    $.get(fn, data => {
        $(`#code`).text(data)
        $(`#code`).removeAttr('class')
        $(`#code`).addClass(ds[i].files[j].type)
        $(`.bt`).removeClass("active")
        $(`#g${i}-${j}`).addClass("active")
        hljs.highlightAll()
    }, "text")
}