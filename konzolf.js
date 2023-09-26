data = [{
    text: 'Morze - Programozás vizsgafeladat',
    path: 'morze',
    files: ['feladat.pdf', 'morze.txt', 'morzeabc.txt', 'morze.js']
}]
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
function fl(fn) {
    $.get(fn, data => {
        copyTextToClipboard(data)
        $(`#code`).text(data)
        hljs.highlightAll()
        $(`#p1`).show()
        $(`#code`).show()
    }, "text")
}
$(() => {
    $(`#p1`).hide()
    $(`#code`).hide()
    $("#cont").html(data.map(v => `<div class="row"><span class="z cim">${v.text}</span>${v.files.map(fn => (
        [f, k] = fn.split("."),
        k === 'js'
        ?   `<button class="z" onclick="fl('konzol/${v.path}/${fn}')"><i class='i'>program:</i> ${fn}</button>`
        :   `<a class="z" href="konzol/${v.path}/${fn}" ${k === "txt" ? "download" : ""} target="_blank">${k === "txt" ? "<i class='i'>letöltés:</i> " : ""}${fn}</a>`
    )).join("")}</div>`).join(""))
})

