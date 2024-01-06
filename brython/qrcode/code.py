from browser import document as D, html as H, window as W


def f(e):
    global qr
    qr.clear()
    qr.makeCode(e.target.value)


D <= H.H1("QRCode példa")
D <= H.DIV(H.INPUT(value="http://es6.eu").bind("input", f), Class="ic")
Qc = H.DIV(Class="qc")
Qr = W.QRCode
qr = Qr.new(
    Qc,
    {
        "text": "http://es6.eu",
        "width": 256,
        "height": 256,
        "colorDark": "#046073",
        "colorLight": "#ffffff",
        "correctLevel": Qr.CorrectLevel.H,
    },
)
D <= Qc
