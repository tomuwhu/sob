data = [{
    text: 'Morze - Programozás vizsgafeladat',
    path: 'morze',
    files: ['feladat.pdf', 'morze.txt', 'morzeabc.txt', 'program.js']
}]
setTimeout(() => 
    document.getElementById("cont").innerHTML = data.map(v => `<span class="cim">${v.text}</span>${v.files.map(fn => (
        [f, k] = fn.split("."),
        `<a href="konzol/${v.path}/${fn}" ${k === "txt" ? "download" : ""} target="_blank">${f}</a>`
    )).join("")}`).join("<br>")
, 1000)