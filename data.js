ds = [{
        name:   `Weboldal forráskód`,
        date:   `2023-07-20`,
        text:   `Példaprogramokat tároló adatszerkezet, forráskód-megjelenítő`,
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
    <td><table><td class="bt">betölt:</td>
    ${e.files.map((fi, j) => `<td onclick='f(${i}, ${j})' class="bt"><i>${fi.fn}</i></td>` ).join('')}
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