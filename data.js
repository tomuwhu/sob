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
    }]
s = `<table>${ds.map((e, i) => `<tr>
    <td>${e.date}</td>
    <td>${e.name}</td>
    <td class="k1">${e.text}</td>
    <td class="test"><a href="${e.git[2]}" target="git">Próba: ${e.git[0]}</a></td>
    <td><table><td class="bt">Forrás:</td>
    ${e.files.map((fi, j) => `<td onclick='f(${i}, ${j})' class="bt"><i>${fi.fn}</i></td>` ).join('')}
    <td class="git bt"><a href="${e.git[1]}" target="git">GIT: ${e.git[0]}</a></td>
    </table></td>
</tr>`).join('')}</table>`
$(() => {
    $('#content').html(s)
})
function f(i, j) {
    $.get(ds[i].files[j].fn, data => {
        $(`#code`).text(data)
        $(`#code`).removeAttr('class')
        $(`#code`).addClass(ds[i].files[j].type)
        hljs.highlightAll()
    })
}