from browser import document as D, html as H, window as W

D <= H.H1("QRCode példa")
Q = H.DIV(Class='qc')
Qr = W.QRCode
Qr.new(
    Q,
    {
        'text': "http://es6.eu",
        'width': 256,
        'height': 256,
        'colorDark': "#046073",
        'colorLight': "#ffffff",
        'correctLevel': Qr.CorrectLevel.H,
    },
)
D <= Q
