from browser import document as D, html as H
from browser import ajax as A


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
    px = int((e.x + dx - trect.left + 20) // 34)
    py = int((e.y + dy - trect.top + 20) // 34)
    rx = obj[1]
    ry = obj[2]
    if px + rx > len(tbl[0]):
        return
    if py + ry > len(tbl):
        return
    o = 0
    for ix in range(rx):
        for iy in range(ry):
            o += tbl[py + iy][px + ix]
    if o == 0:
        for ix in range(rx):
            for iy in range(ry):
                tbl[py + iy][px + ix] = obj[3]
        al[me] = (obj[0], obj[1], obj[2], 0)
        ut()
    if len(list(filter(lambda x: x[3], al))) == 0:
        ap += 1
    g()


def do(e):
    e.preventDefault()
    return True


def ut():
    global t
    T.clear()
    t = H.TABLE([H.TR([H.TD(Class=f"x{e}") for e in row]) for row in tbl])
    T <= H.DIV(t.bind("drop", de).bind("dragover", do))
    T <= H.DIV(
        H.DIV(
            Class=f"al al{c}",
            id=f"{i}",
            draggable="true",
            style={"width": f"{34*x}px", "height": f"{34*y}px"},
        )
        .bind("click", rotate)
        .bind("dragstart", ds)
        for (i, x, y, c) in filter(lambda x: x[3], al)
    )


def g():
    global G, al
    G.clear()
    if ap == psz:
        G <= H.DIV("Nincs több pálya. :(")
    else:
        s1 = len(list(filter(lambda x: x[3], al)))
        s2 = len(al)
        if s1 < s2:
            G <= H.BUTTON(
                "Reset" if s1 else f"Következő pálya ({ap + 2}.)",
                Class="a" if s1 else "b",
            ).bind("click", reset)


tbl, al, psz, ap = [], [], 5, 0
T, G = H.DIV(), H.DIV()
D <= H.H1("Mondrian") + T + G
reset(0)
