k = 0
n = 5
a = [-1, -1]
ds = [
  {
    name: `<a href="https://brython.info/" target="bry">Brython</a> - Tetris`,
    date: `2024-01-05`,
    text: `01-05 Online órai péda`,
    git: [`SOB`, `https://github.com/tomuwhu/sob/tree/main/brython/tetris`, `brython/tetris/`],
    keywords: [
      `Brython`, `Tetris`, `table`,`blocks`, `HTML`, `CSS`, `Python`, 'dragndrop', `game`, `játék`
    ]
  },
    {
    name: `<a href="https://brython.info/" target="bry">Brython</a> - QRCode`,
    date: `2024-01-04`,
    text: `01-04 Online órai péda`,
    git: [`SOB`, `https://github.com/tomuwhu/sob/tree/main/brython/qrcode`, `brython/qrcode/`],
    keywords: [
      `Brython`, `HTML`, `CSS`, `Python`, `qrcode`
    ]
  },
  {
    name: `<a href="https://brython.info/" target="bry">Brython</a> - Mondrian Blocks`,
    date: `2024-01-03`,
    text: `01-03 Online óra 2. feladat megoldása`,
    git: [`SOB`, `https://github.com/tomuwhu/sob/tree/main/brython/mondrian`, `/brython/mondrian/mondrian.html`],
    keywords: [
      `Brython`, `Mondrian`, `table`, `blocks`, `HTML`, `CSS`, `Python`, 'dragndrop', `game`, `játék`
    ]
  },
  {
    name: `Menü + Értékelő`,
    date: `2023-10-07`,
    text: `Svelte Frontend példa - Csillagozós`,
    git: [`SOB`, `https://github.com/tomuwhu/ertekelo`, `https://tomuwhu.github.io/ertekelo/`],
    keywords: [
      `SvelteKit`, `Táblázat`, `HTML`, `CSS`, `JavaScript`, `vite`, 'dragndrop', 'értékelő', 'menü', 'komponens'
    ]
  },
  {
    name: `Órarend`,
    date: `2023-10-05`,
    text: `Svelte Frontend példa - Órarend`,
    git: [`SOB`, `https://github.com/tomuwhu/legyenmonjuk`, `https://tomuwhu.github.io/legyenmonjuk/`],
    keywords: [
      `SvelteKit`, `Táblázat`, `HTML`, `CSS`, `JavaScript`, `vite`, 'todo', 'órarend', 'elválasztó'
    ]
  },
  {
    name: `Sakk2`,
    date: `2023-10-04`,
    text: `Svelte Frontend példa - Sakk2`,
    git: [`SOB`, `https://github.com/tomuwhu/chess/blob/master/src/routes/%2Bpage.svelte`, `https://tomuwhu.github.io/chess/`],
    keywords: [
      `SvelteKit`, `Táblázat`, `HTML`, `CSS`, `JavaScript`, `vite`, 'sakk', 'chess'
    ]
  },
  {
    name: `Sakk`,
    date: `2023-09-28`,
    text: `Svelte Frontend példa - Sakk`,
    files: [{
      type: `svelte`,
      fn: `Chess.svelte`
    }],
    git: [`SOB`, `https://github.com/tomuwhu/sv03/blob/master/src/routes/chess/%2Bpage.svelte`, `https://tomuwhu.github.io/sv03/chess`],
    keywords: [
      `SvelteKit`, `Táblázat`, `HTML`, `CSS`, `JavaScript`, `vite`, 'sakk', 'chess', 'get'
    ]
  },
  {
    name: `Map osztály felüldefiniálása`,
    date: `2023-09-20`,
    text: `Ismétlődő elemek szorzata`,
    files: [{
      type: `javascript`,
      fn: `mymap.js`
    },
    {
      type: `javascript`,
      fn: `mymap.test.js`
    },
    {
      type: `javascript`,
      fn: `bracket.js`
    }],
    keywords: [
      `js`, `objektum`, `osztály`, `Map`, `extends`, `kupac`, `szótár`, `objektum`, `értékadás`
    ]
  },
  {
    name: `Aknakereső`,
    date: `2023-09-20`,
    text: `Svelte Frontend példa`,
    files: [{
      type: `svelte`,
      fn: `Aknakereso.svelte`
    }],
    git: [`SOB`, `https://github.com/tomuwhu/aknakereso/blob/master/src/routes/%2Bpage.svelte`, `https://tomuwhu.github.io/aknakereso/`],
    keywords: [
      `SvelteKit`, `Táblázat`, `HTML`, `CSS`, `JavaScript`, `vite`
    ]
  },
  {
    name: `Jest tesztek (verem)`,
    date: `2023-09-20`,
    files: [{
      type: `javascript`,
      fn: `jest_verem.js`
    },
    {
      type: `javascript`,
      fn: `jest_verem_test.js`
    }],
    keywords: [
      `js`, `objektum`, `osztály`, `verem`, `teszt`, `unit_teszt`, `jest`, `module`
    ]
  },
  {
    name: `Verem (objektum || osztály)`,
    date: `2023-09-20`,
    files: [{
      type: `javascript`,
      fn: `veremobj.js`
    },
    {
      type: `javascript`,
      fn: `veremclass.js`
    },
    {
      type: `javascript`,
      fn: `queue.js`
    }],
    keywords: [
      `js`, `objektum`, `osztály`, `verem`, `sor`, `kupac`, `prioritási`
    ]
  },
  {
    name: `Hanoi torony + animáció`,
    date: `2023-09-11`,
    git: [`SOB`, ``, `purejs/hanoi`],
    files: [{
      type: `javascript`,
      fn: `Hanoi JavaScript.js`
    },
    {
      type: `python`,
      fn: `Hanoi Python.py`
    }],
    keywords: [
      `html`, `css`, `js`, `egyszerű`, `animáció`, `hanoi`, `rekurzió`
    ]
  },
  {
    name: `C# File Beolvasás`,
    date: `2023-09-06`,
    files: [{
      type: `csharp`,
      fn: `FileIO.cs`
    }],
    keywords: [
      `C#`, `Console`, `konzol`, `File`, `Alkalmazás`, `olvasás`, `fájl olvasás`
    ]
  },
  {
    name: `C# WPS Alap példa`,
    date: `2023-09-01`,
    git: [`SOB`, `https://learn.microsoft.com/hu-hu/dotnet/desktop/wpf/get-started/create-app-visual-studio?view=netdesktop-7.0`, ``],
    files: [{
      type: `md`,
      fn: `Main_example.md`
    }],
    keywords: [
      `C#`, `Desktop`, `WPS`, `Alkalmazás`
    ]
  },
  {
    name: `PHP Full Stack Form Template`,
    date: `2023-09-01`,
    git: [`SOB`, ``, `https://www.inf.u-szeged.hu/~tnemeth/SOB/Osszeado.php`],
    files: [{
      type: `php`,
      fn: `Osszeado.php`
    }],
    keywords: [
      `PHP`, `HTML`, `CSS`, `Backend`, `Form`, `REST`, `GET`, `POST`
    ]
  },
  {
    name: `SOB Intranet forráskód`,
    date: `2023-08-29`,
    git: [`SOB`, `https://github.com/tomuwhu/SOB_Intranet/`, `https://tomuwhu.github.io/SOB_Intranet/`],
    files: [{
      type: `md`,
      fn: `Configs.md`
    }],
    keywords: [
      `SvelteKit`, `HTML`, `CSS`, `JavaScript`, `vite`, `drag`, `drop`, `app`
    ]
  },
  {
    name: `SvelteUI Template`,
    date: `2023-08-24`,
    files: [{
      type: `svelte`,
      fn: `SvelteUI.svelte`
    }, {
      type: `svelte`,
      fn: `Link.svelte`
    }],
    git: [`SOB`, `https://github.com/tomuwhu/svelteui`, `https://tomuwhu.github.io/svelteui`],
    keywords: [
      `SvelteKit`, `SvelteUI`, `HTML`, `CSS`, `JavaScript`, `vite`, `simple`, `egyszerű`, `counter`, `app`
    ]
  }, {
    name: `Fizikai szimuláció`,
    date: `2023-08-23`,
    text: `Sebesség állítása példa`,
    files: [{
      type: `svelte`,
      fn: `Anim2.svelte`
    }],
    git: [`SOB`, `https://github.com/tomuwhu/svs/blob/master/src/routes/anim/%2Bpage.svelte`, `https://tomuwhu.github.io/svs/anim`],
    keywords: [
      `SvelteKit`, `Animáció`, `HTML`, `CSS`, `JavaScript`, `vite`, 'range', 'fizika', 'szimuláció', 'egyenes', 'egyenletes', 'mozgás', 'vonalú'
    ]
  }, {
    name: `FullStack példa 1`,
    date: `2023-08-22`,
    text: `PHP - Sveltekit - MySQL FullStack Web APP`,
    git: [`SOB`, `https://github.com/tomuwhu/SOB_Intranet`, `https://tomuwhu.github.io/SOB_Intranet`],
    keywords: [
      `PHP`, `SvelteKit`, `FullStack`, `HTML`, `CSS`, `JavaScript`, `vite`
    ]
  }, {
    name: `FullStack példa 2`,
    date: `2023-08-23`,
    text: `ExpressJS - Sveltekit FullStack Web APP`,
    git: [`SOB`, `https://github.com/tomuwhu/express-svelte`, ``],
    keywords: [
      `ExpressJS`, `SvelteKit`, `FullStack`, `HTML`, `CSS`, `JavaScript`, `nodejs`
    ]
  },
  {
    name: `sob.es6.eu forráskód`,
    date: `2023-07-20`,
    git: [`SOB`, `https://github.com/tomuwhu/sob`, ``],
    keywords: [
      `Damerau`, `Levenshtein`, `JQuery`, `HTML`, `CSS`, `JavaScript`
    ]
  },
  {
    name: `Amőba <a href="https://svelte.dev/" target="x">Svelte</a>`,
    date: `2023-07-22`,
    text: `Amőba-kezdemény
                <a  href="https://kit.svelte.dev/"
                    target="x">Svelte KIT Frontend Component Framework</a>`,
    git: [`sv01`,
      `https://github.com/tomuwhu/sv01`,
      `http://www.inf.u-szeged.hu/~tnemeth/sv_amoba0/`],
    files: [{
      type: `svelte`,
      fn: `Amoba.svelte`
    }],
    keywords: [
      `táblázat`, `onclick`, `svelte`, `{#each}`, `amőba`
    ]
  },
  {
    name: `A válasz mindenre <a href="https://svelte.dev/" target="x">Svelte</a> Példa`,
    date: `2023-07-23`,
    text: `<a href="https://kit.svelte.dev/"
                    target="x">SvelteKIT</a> RestAPI FrontEnd`,
    git: [`sv01/question`,
      `https://github.com/tomuwhu/sv01/tree/question`,
      `https://tomuwhu.github.io/sv01/`],
    files: [{
      type: `svelte`,
      fn: `Valasz.svelte`
    },
    {
      type: `svelte`,
      fn: `+page.svelte`
    }],
    keywords: [
      `táblázat`, `onclick`, `svelte`, `amőba`, `{#each}`, `válasz`, `mindenre`, `42`
    ]
  },
  {
    name: `Számláló`,
    date: `2023-07-28`,
    text: `Mintaalkalmazás a telepítés ellenőrzéséhez`,
    git: [`sv01/question`,
      `https://github.com/tomuwhu/sv01/tree/question`,
      `https://tomuwhu.github.io/sv01/Counter`],
    files: [{
      type: `svelte`,
      fn: `Counter.svelte`
    }],
    keywords: [
      `svelte`, `counter`, `onclick`, `click`, `egyszerű`, `számláló`
    ]
  },
  {
    name: `Lista kezelése`,
    date: `2023-07-31`,
    text: `Array TS mintaalkalmazás`,
    git: [`sv01/question`,
      `https://github.com/tomuwhu/sv01/tree/question`,
      `https://tomuwhu.github.io/sv01/Array`],
    files: [{
      type: `svelte`,
      fn: `Array.svelte`
    }],
    keywords: [
      `Array`, `Svelte`, `minimal`, `egyszerű`, `lista`, `map`
    ]
  }, {
    name: `Damerau–Levenshtein távolság`,
    date: `2023-08-01`,
    text: `Két szöveg hasonlósága`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/blob/master/src/routes/%2Bpage.svelte`,
      `https://tomuwhu.github.io/svnt2/`],
    files: [{
      type: `svelte`,
      fn: `Damerau.svelte`
    }],
    keywords: [
      `svelte`, `damerau`, `levenshtein`, `input`, `bind`, `hasonlósági`, `mérték`,
      `string`, `szöveg`, `távolság`
    ]
  },
  {
    name: `A válasz mindenre`,
    date: `2023-08-02`,
    text: `<a   href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
                    target="_blank">JavaScript</a> RestAPI FrontEnd`,
    git: [`Amőba`,
      `https://github.com/tomuwhu/sob/blob/main/pp/Fetch.html`,
      `pp/Fetch.html`],
    files: [{
      type: `language-html`,
      fn: `Fetch.html`
    }, {
      type: `language-html`,
      fn: `Fetch2.html`
    }, {
      type: `language-html`,
      fn: `Fetch3.html`
    }],
    keywords: [
      `Egyszerű`, `Svelte`, `FullStack`, `válasz`, `mindenre`, `42`
    ]
  },
  {
    name: `Amőba`,
    date: `2023-08-03`,
    text: `HTML / CSS / <a   href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
                    target="_blank">JS</a> példaprogram`,
    git: [`Amőba`,
      `https://github.com/tomuwhu/sob/blob/main/pp/Amoba.html`,
      `pp/Amoba.html`],
    files: [{
      type: `language-html`,
      fn: `Amoba.html`
    }],
    keywords: [
      `amőba`, `svelte`, `táblázat`, `onclick`, `{#each}`
    ]
  }, {
    name: `Malom tábla`,
    date: `2023-08-04`,
    text: `Gráf adatszerkezet alkalmazása, SVG`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/blob/master/src/routes/malom_v01/%2Bpage.svelte`,
      `https://tomuwhu.github.io/svnt2/malom_v01`],
    files: [{
      type: `svelte`,
      fn: `Malom.svelte`
    }],
    keywords: [
      `svelte`, `malom`, `gráf`, `adatszerkezet`, `svg`, `line`, `circle`, `{#each}`, `tábla`
    ]
  }, {
    name: `Drag & Drop példa`,
    date: `2023-08-05`,
    text: `<a
            target="_blank" 
            href="https://svelte.dev/repl/b225504c9fea44b189ed5bfb566df6e6?version=4.1.2">Forrás (Svelte.dev)</a>`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/blob/master/src/routes/dragdrop/%2Bpage.svelte`,
      `https://tomuwhu.github.io/svnt2/dragdrop`],
    files: [{
      type: `svelte`,
      fn: `Dragndrop.svelte`
    }],
    keywords: [
      `svelte`, `drag`, `drop`, `{#each}`
    ]
  }, {
    name: `Számjáték`,
    text: `Drag & Drop példa`,
    date: `2023-08-20`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/blob/master/src/routes/dragntable/%2Bpage.svelte`,
      `https://tomuwhu.github.io/svnt2/dragntable`],
    files: [{
      type: `svelte`,
      fn: `DragnTable.svelte`
    }],
    keywords: [
      `svelte`, `drag`, `drop`, `table`, `számjáték`, `{#each}`
    ]
  }, {
    name: `Malom bábuk mozgatása`,
    date: `2023-08-06`,
    text: `Drag & Drop alkalmazása`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/blob/master/src/routes/malom_v02/%2Bpage.svelte`,
      `https://tomuwhu.github.io/svnt2/malom_v02`],
    files: [{
      type: `svelte`,
      fn: `Malomdd.svelte`
    }],
    keywords: [
      `svelte`, `malom`, `drag`, `drop`, `svg`, `bábuk`, `mozgatása`
    ]
  }, {
    name: `Malom teljes játék`,
    date: `2023-08-07`,
    text: `SVG, Gráf adatszerkezet, Drag & Drop`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/tree/master/src/routes/malom_v03`,
      `https://tomuwhu.github.io/svnt2/malom_v03`],
    files: [{
      type: `svelte`,
      fn: `Malomfull.svelte`
    }],
    keywords: [
      `svelte`, `malom`, `drag`, `drop`, `svg`, `teljes`, `játék`
    ]
  }, {
    name: `Animáció`,
    date: `2023-08-13`,
    text: `Változó hozzárendelése, Range Input`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/blob/master/src/routes/animation/%2Bpage.svelte`,
      `https://tomuwhu.github.io/svnt2/animation`],
    files: [{
      type: `svelte`,
      fn: `Animation.svelte`
    }],
    keywords: [
      `svelte`, `input`, `range`, `bind`, `position`, `animáció`
    ]
  }, {
    name: `Időzítő`,
    date: `2023-08-12`,
    text: `Változó változtatása időzítővel`,
    git: [`svnt2`,
      `https://github.com/tomuwhu/svnt2/blob/master/src/routes/seti/%2Bpage.svelte`,
      `https://tomuwhu.github.io/svnt2/seti`],
    files: [{
      type: `svelte`,
      fn: `setInterval.svelte`
    }],
    keywords: [
      `svelte`, `setInterval`, `időzítő`, `négyzet`, `hatványozás`
    ]
  }, {
    name: `Órarend`,
    date: `2023-08-21`,
    text: `Dinamikus tartalom-generálás`,
    git: [`sv02`,
      `https://github.com/tomuwhu/sv02/blob/master/src/routes/orarend/%2Bpage.svelte`,
      `https://tomuwhu.github.io/sv02/orarend`],
    files: [{
      type: `svelte`,
      fn: `Orarend.svelte`
    }, {
      type: `json`,
      fn: `input.json`
    }],
    keywords: [
      `svelte`, `setInterval`, `időzítő`, `each`, `onMount`, `fixed`, `position`, `dinamikus`, `órarend`
    ]
  }]
s = x => `${x.map((e, i) => `<div class="c">
    <div class="x">${e.date} &nbsp; | &nbsp; </div>
    <div class="x">${e.name}</div>
    ${e.text ? `<div class="x"> &nbsp; | &nbsp; <u class="k1">${e.text}</u></div>` : ``}
    <div><table>
    ${e.git && e.git[2].length ?
    `<td> | </td><td class="test bt"><a class="ap" href="${e.git[2]}" target="git">Futtat</a></td>`
    : ``}
    ${e.files ? ` <td> | </td><td class="bt">Forrás:` : ``}
    ${e.files ? e.files.map((fi, j) => `
    <span onclick='f(${i}, ${j}, "pp/${fi.fn}", "${fi.type}")' class="bt" id="g${i}-${j}"><i>${fi.fn.split(".")[0]}</i></span>
    ` ).join('') : ''} 
    ${e.files ? `</td>` : ``}
    ${e.git && e.git[1].length ?
    `<td class="git bt"><a class="ap" href="${e.git[1]}" target="git">GitHub</a></td>`
    : ``}
     </table></div>
    </div><div class="break"></div>
`).join('')}`
ar = () => ds.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
té = (bsz, hsz1, hsz2, kwt) => {
  vt = []
  hsz1 = hsz1.split("<")[0]
  lt = new Levenshtein(hsz1, bsz).distance
  len = hsz1.length
  hsz2 = hsz2.split("<")[0]
  lt2 = new Levenshtein(hsz2, bsz).distance
  len2 = hsz2.length
  vt.push(lt / len)
  vt.push(lt2 / len2)
  kwt.forEach(v => {
    hsz1 = v
    lt = new Levenshtein(hsz1, bsz).distance
    len = hsz1.length
    vt.push(lt / len)
  })
  return Math.min(...vt)
}
sz = t => {
  $(`#code`).text("")
  if (!t.value.length) ar()
  else ds.sort((r1, r2) => {
    e1 = té(t.value.toUpperCase(), r1.name.toUpperCase(), r1.text ? r1.text.toUpperCase() : '', r1.keywords.map(v => v.toUpperCase()))
    e2 = té(t.value.toUpperCase(), r2.name.toUpperCase(), r2.text ? r2.text.toUpperCase() : '', r2.keywords.map(v => v.toUpperCase()))
    return e1 - e2
  })
  $('#content').html(s(ds.slice(k, k + n)))
}
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
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
  navigator.clipboard.writeText(text).then(function () {

  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}
function tget(fn, id, i, j) {
  if (a[0] != id) {
    a[0] = id
    $.get(fn, data => {
      copyTextToClipboard(data)
      $(`#html`).show()
      $(`#code`).hide()
      $(`#code`).parent().addClass('click')
      $('pre.click').css('display', 'inline-block')
      $(`#html`).html(
        marked.parse(data, { mangle: false, headerIds: false })
      )
      $(`#html`).on("contextmenu", () => {
        $(`#html`).hide()
        $('#code').css('display', 'inline-block')
        return false
      })
      $(`#code`).on("contextmenu", () => {
        $(`#html`).show()
        $(`#code`).hide()
        return false
      })
      $(`#code`).addClass('markdown')
      $(`#html`).addClass('markdown')
      $(`#code`).text(data)
      $(`#code`).removeAttr('class')
      $(`.bt`).removeClass("active")
      $(`.md`).removeClass("active")
      if (i > 0) {
        $(`#g${i}-${j}`).addClass("active")
      } else {
        $(`#${id}`).addClass("active")
      }
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
  $('#t1').click(() => { tget('frontend.md', 't1') })
  $('#t2').click(() => { tget('backend.md', 't2') })
  $('#t3').click(() => { tget('mobile.md', 't3') })
  $('#t4').click(() => { tget('configs.md', 't4') })
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
    $('input').css('display', 'inline-block')
    $('hr').css('display', 'block')
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
    if (type == 'md') {
      tget(fn, null, i, j)
    } else
      $.get(fn, data => {
        copyTextToClipboard(data)
        $(`#html`).hide()
        $(`#code`).show()
        $(`#html`).unbind()
        $(`#code`).unbind()
        $(`#code`).parent().removeClass('click')
        $('pre').css('display', 'inline-block')
        $(`#html`).hide()
        $(`#code`).text(data)
        $(`#code`).removeAttr('class')
        $(`#code`).addClass(type)
        $(`#code`).css('display', 'inline-block')
        if (type == "svelte") {
          $(`#code`).removeClass('language-yaml')
          $(`#code`).addClass('language-xml')
        }
        $(`.bt`).removeClass("active")
        $(`.md`).removeClass("active")
        $(`#g${i}-${j}`).addClass("active")
        hljs.highlightAll()
      }, "text")
    a[0] = i
    a[1] = j
  }
}
