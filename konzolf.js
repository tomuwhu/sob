data = [{
    text: 'Morze - Programozás vizsgafeladat',
    path: 'morze',
    files: ['morze.pdf', 'morze.txt', 'morzeabc.txt', 'morze.js']
}]
setTimeout(() => 
    document.getElementById("cont").innerHTML = data.map(v => `<span class="cim">${v.text}</span>${v.files.map(fn =>
        `<a href="konzol/${v.path}/${fn}" target="_blank">${fn}</a>`).join("")}`).join("<br>")
, 1000)