ds = [{
        name:   `adatszerkezet`,
        date:   `2023-07-20`,
        text:   `Példaprogramokat tároló adatszerkezet: js`,
        type:   `javascript`,
        fn:     `data.js`
    },
    {
        name:   `adatszerkezet`,
        date:   `2023-07-20`,
        text:   `Példaprogramokat tároló adatszerkezet: html`,
        type:   `language-html`,
        fn:     `index.html`
    },
    {
        name:   `adatszerkezet`,
        date:   `2023-07-20`,
        text:   `Példaprogramokat tároló adatszerkezet: css`,
        type:   `language-css`,
        fn:     `style.css`
    }]
s = `<table>${ds.map((e, i) => `<tr>
    <td>${e.date}</td>
    <td>${e.name}</td>
    <td>${e.text}</td>
    <td onclick='f(${i})' class="bt">betölt: <i>${e.fn}</i></td>
</tr>`).join('')}</table>`
$(() => {
    $('#content').html(s)
})
function f(i) {
    $.get(ds[i].fn, data => {
        $(`#code`).text(data)
        $(`#code`).removeAttr('class')
        $(`#code`).addClass(ds[i].type)
        hljs.highlightAll()
    })
}