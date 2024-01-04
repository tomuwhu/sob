from browser import document as D, html as H
from browser import ajax as A


def f(s):
    sx = ""
    cl = ["#c71210", "#0080c0", "#f0d034", "black"]
    for i, c in enumerate(s):
        sx += f"<b style='color: {cl[i%4]};'>{c}<b>"
    return sx


def read(req):
    global tbl, al
    dat = list(req.text.split("."))
    tbl = list(map(lambda x: list(map(int, x)), dat[0].split()))
    al = list(map(lambda x: [x[0]] + list(map(int, x[1])), enumerate(dat[1].split())))
    ut()
    g()


def reset(e):
    global G, tbl, al, ap, psz
    if ap > psz - 1:
        G.clear()
    else:
        A.get(f"p{ap}.dat", oncomplete=read)


def rotate(e):
    id = int(e.target.id)
    obj = al[id]
    al[id] = (obj[0], obj[2], obj[1], obj[3])
    ut()


def ds(e):
    global dx, dy, me
    me = int(e.target.id)
    rect = e.target.getBoundingClientRect()
    dy = rect.top - e.y
    dx = rect.left - e.x


def de(e):
    obj = al[int(me)]
    global dx, dy, t, ap
    trect = t.getBoundingClientRect()
    px = int((e.x + dx - trect.left + 13) // 34)
    py = int((e.y + dy - trect.top + 13) // 34)
    rx = obj[1]
    ry = obj[2]
    for ix in range(rx):
        for iy in range(ry):
            tbl[py + iy][px + ix] = obj[3]
    al[me] = (obj[0], obj[1], obj[2], 0)
    ut()
    if len(list(filter(lambda x: x[3], al))) == 0:
        ap += 1
    g()


def do(e):
    obj = al[int(me)]
    global dx, dy, t, ap
    trect = t.getBoundingClientRect()
    px = int((e.x + dx - trect.left + 13) // 34)
    py = int((e.y + dy - trect.top + 13) // 34)
    rx = obj[1]
    ry = obj[2]
    if px + rx > len(tbl[0]) or px < 0:
        return
    if py + ry > len(tbl) or py < 0:
        return
    o = 0
    for ix in range(rx):
        for iy in range(ry):
            o += tbl[py + iy][px + ix]
    if o == 0:
        e.preventDefault()
        return True


def ut():
    global t
    T.clear()
    t = H.TABLE([H.TR([H.TD(Class=f"x{e}") for e in row]) for row in tbl])
    tx = 34 * len(tbl[0]) - 22
    T <= H.DIV(t.bind("drop", de).bind("dragover", do))
    alx = list(filter(lambda x: x[3], al))
    if len(alx):
        T <= H.DIV(
            [
                H.DIV(
                    Class=f"al al{c}",
                    id=f"{i}",
                    draggable="true",
                    style={"width": f"{34*x}px", "height": f"{34*y}px"},
                )
                .bind("click", rotate)
                .bind("dragstart", ds)
                for (i, x, y, c) in alx
            ],
            Class="xc",
            style={"min-inline-size": f"{tx}px"},
        )


def g():
    global G, H1, al
    H1.clear()
    G.clear()
    if ap == psz:
        G <= H.DIV("Nincs több pálya. :(")
        H1 <= H.H1("Modiran játék vége")
    else:
        s1 = len(list(filter(lambda x: x[3], al)))
        s2 = len(al)
        H1 <= H.H1(
            f"Mondrian {f('blocks')}: <i>{ap+1}. pálya</i>"
            if s1
            else f"Modiran {f('blocks')}: <i>sikeres kirakás</i>"
        )
        if s1 < s2:
            G <= H.BR() + H.BUTTON(
                "Reset" if s1 else f"Következő pálya ({ap + 1}.)",
                Class="a" if s1 else "b",
            ).bind("click", reset)


tbl, al, psz, ap, H1, T, G = [], [], 9, 0, H.DIV(), H.DIV(), H.DIV()
D <= H1 + T + G + H.DIV(
    H.A(
        "SOB Példaprogram - Dr. Németh Tamás",
        href="https://sob.es6.eu",
        target="sob",
        Class="sob",
    )
)
reset(0)
