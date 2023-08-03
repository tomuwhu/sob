k = 0
n = 5
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
        git:    [   `sv01/question`,
                    `https://github.com/tomuwhu/sv01/tree/question`,
                    `https://tomuwhu.github.io/sv01/Counter`],
        files: [{
            type:   `svelte`,
            fn:     `Counter.svelte`
        }]
    },
    {
        name: `Lista kezelése`,
        date: `2023-07-31`,
        text: `Array TS mintaalkalmazás`,
        git:    [   `sv01/question`,
                    `https://github.com/tomuwhu/sv01/tree/question`,
                    `https://tomuwhu.github.io/sv01/Array`],
        files: [{
            type:   `svelte`,
            fn:     `Array.svelte`
        }]
    }, {
        name: `Damerau–Levenshtein távolság`,
        date: `2023-08-01`,
        text: `Két szöveg hasonlósága`,
        git:    [   `svnt2`,
                    `https://github.com/tomuwhu/svnt2`,
                    `https://tomuwhu.github.io/svnt2/`],
        files: [{
            type:   `svelte`,
            fn:     `Damerau.svelte`
        }]
    },
    {
        name:   `A válasz mindenre`,
        date:   `2023-08-02`,
        text: `<a   href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
                    target="_blank">JavaScript</a> RestAPI FrontEnd`,
        git:    [   `Amőba`,
                    `https://github.com/tomuwhu/sob/blob/main/pp/Fetch.html`,
                    `pp/Fetch.html`],
        files: [{
            type:   `language-html`,
            fn:     `Fetch.html`
        },{
            type:   `language-html`,
            fn:     `Fetch2.html`
        },{
            type:   `language-html`,
            fn:     `Fetch3.html`
        }]
    },
    {
        name:   `Amőba`,
        date:   `2023-08-03`,
        text: `HTML / CSS / <a   href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
                    target="_blank">JS</a> példaprogram`,
        git:    [   `Amőba`,
                    `https://github.com/tomuwhu/sob/blob/main/pp/Amoba.html`,
                    `pp/Amoba.html`],
        files: [{
            type:   `language-html`,
            fn:     `Amoba.html`
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
    <span onclick='f(${i}, ${j}, "pp/${fi.fn}", "${fi.type}")' class="bt" id="g${i}-${j}"><i>${fi.fn.split(".")[0]}</i></span>
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
    hsz1 = hsz1.split("<")[0]
    lt = new Levenshtein(hsz1, bsz).distance
    len = hsz1.length
    hsz2 = hsz2.split("<")[0]
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
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}
function tget(fn, id) {
    if (a[0] != id) {
        a[0] = id
        $.get(fn, data => {
            copyTextToClipboard(data)
            $(`#html`).show()
            $(`#code`).hide()
            $(`#code`).parent().addClass('click')
            $('pre.click').css('display','inline-block')
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
            $(`#code`).addClass("cx")
            hljs.highlightAll()
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
    $(`#code`).hide()
    $(`.bt`).removeClass("active")
    a[0] = -1
    a[1] = -1
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
function f(i, j, fn, type) {
    if (a[0] == i && a[1] == j) {
        $(`#code`).hide()
        $(`.bt`).removeClass("active")
        a[0] = -1
        a[1] = -1
    } 
    else {
        $.get(fn, data => {
            copyTextToClipboard(data)
            $(`#html`).hide()
            $(`#code`).show()
            $(`#code`).unbind('click')
            $(`#code`).parent().removeClass('click')
            $('pre').css('display','inline-block')
            $(`#html`).hide()
            $(`#code`).text(data)
            $(`#code`).removeAttr('class')
            $(`#code`).addClass(type)
            $(`.bt`).removeClass("active")
            $(`.md`).removeClass("active")
            $(`#g${i}-${j}`).addClass("active")
            hljs.highlightAll()
        }, "text")
        a[0] = i
        a[1] = j
    }
}
