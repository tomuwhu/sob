k = 0
n = 20
a = [-1, -1]
ds = [{
        name:   `Weboldal forráskód`,
        date:   `2023-07-20`,
        text:   `Példaprogramokat tároló adatszerkezet, forráskód-megjelenítő`,
        git:    [`SOB`, `https://github.com/tomuwhu/sob`, ``]
    },
    {
        name:   `Amőba <a href="https://svelte.dev/" target="x">Svelte</a>`,
        date:   `2023-07-22`,
        text:   `Amőba-kezdemény
                <a  href="https://kit.svelte.dev/"
                    target="x">Svelte KIT Frontend Component Framework</a>`,
        git:    [   `sv01`, 
                    `https://github.com/tomuwhu/sv01`, 
                    `http://www.inf.u-szeged.hu/~tnemeth/sv_amoba0/`],
        files: [{
            type:   `svelte`,
            fn:     `Amoba.svelte`
        }]
    },
    {
        name:   `A válasz mindenre <a href="https://svelte.dev/" target="x">Svelte</a> Példa`,
        date:   `2023-07-23`,
        text:   `<a href="https://kit.svelte.dev/"
                    target="x">SvelteKIT</a> RestAPI FrontEnd`,
        git:    [   `sv01/question`,
                    `https://github.com/tomuwhu/sv01/tree/question`,
                    `https://tomuwhu.github.io/sv01/`],
        files: [{
            type:   `svelte`,
            fn:     `Valasz.svelte`
        },
        {
            type:   `svelte`,
            fn:     `+page.svelte`
        }]
    },
    {
        name: `Számláló`,
        date: `2023-07-28`,
        text: `Mintaalkalmazás a telepítés ellenőrzéséhez`,
        files: [{
            type:   `svelte`,
            fn:     `Counter.svelte`
        }]
    },
    {
        name: `Lista kezelése`,
        date: `2023-07-31`,
        text: `Array TS mintaalkalmazás`,
        files: [{
            type:   `svelte`,
            fn:     `Array.svelte`
        }]
    }]
s = x => `${x.map((e, i) => `<div class="c">
    <div class="x">${e.date}</div>
    <div class="x">${e.name}</div>
    <div class="x"><u class="k1">${e.text}</u></div>
    <div><table>
    ${e.git && e.git[2].length ? 
    `<td class="test bt"><a class="ap" href="${e.git[2]}" target="git">Futtat</a></td>`
    : ``}
    <td> | </td>
    ${e.files ? `<td class="bt">Forrás:` : ``}
    ${e.files ? e.files.map((fi, j) => `
    <span onclick='f(${i}, ${j}, "pp/${fi.fn}")' class="bt" id="g${i}-${j}"><i>${fi.fn.split(".")[0]}</i></span>
    ` ).join('') : ''} 
    ${e.files ? `</td>` : ``}
    ${e.git && e.git[1].length ? 
    `<td class="git bt"><a class="ap" href="${e.git[1]}" target="git">GitHub</a></td>`
    : ``}
    <td> | </td>
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
function tget(fn, id) {
    if (a[0] != id) {
        a[0] = id
        $.get(fn, data => {
            $(`#html`).show()
            $(`#code`).hide()
            $(`#code`).parent().addClass('click')
            $('pre').css('display','inline-block')
            $(`#html`).html(
                marked.parse(data, {mangle: false, headerIds: false})
            )
            $(`#html`).click(() => {
                $(`#html`).hide()
                $(`#code`).show()
            })
            $(`#code`).text(data)
            $(`#code`).click(() => {
                $(`#html`).show()
                $(`#code`).hide()
            })
            $(`#code`).removeAttr('class')
            $(`#code`).addClass('markdown')
            $(`.bt`).removeClass("active")
            $(`.md`).removeClass("active")
            $(`#${id}`).addClass("active")
            hljs.highlightAll()
            $(`#code`).addClass("cx")
        }, "text")
    } else {
        $(`.md`).removeClass("active")
        a[0] = -1
        $(`#html`).hide()
        $(`#code`).hide()
    }
}
$(() => {
    $('#t1').click(() => { tget('frontend.md','t1') })
    $('#t2').click(() => { tget('backend.md', 't2') })
    $('#t3').click(() => { tget('mobile.md',  't3') })
    disp()
    $(`#html`).hide()
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
    if (a[0] == i && a[1] == j) {
        $(`#code`).hide()
        $(`.bt`).removeClass("active")
        a[0] = -1
        a[1] = -1
    } 
    else {
        $.get(fn, data => {
            $(`#html`).hide()
            $(`#code`).show()
            $(`#code`).unbind('click')
            $(`#code`).parent().removeClass('click')
            $('pre').css('display','inline-block')
            $(`#html`).hide()
            $(`#code`).text(data)
            $(`#code`).removeAttr('class')
            $(`#code`).addClass(ds[i].files[j].type)
            $(`.bt`).removeClass("active")
            $(`.md`).removeClass("active")
            $(`#g${i}-${j}`).addClass("active")
            hljs.highlightAll()
        }, "text")
        a[0] = i
        a[1] = j
    }
}