from browser import document as D, html as H
from browser import ajax as A


def read(req):
    global tbl, al
    dat = list(req.text.split("."))
    tbl = list(map(lambda x: list(map(int, x)),dat[0].split()))
    al = list(map(lambda x: list(map(int, str(x[0])+x[1])), enumerate(dat[1].split())))
    ut()


def reset(e):
    global tbl, al, ap
    if ap > 2:
        ap = 0
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
    if px + rx > 7:
        return
    if py + ry > 7:
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


tbl = []
al = []
ap = 2
T = H.DIV()
D <= H.H1("Mondrian")
D <= T
D <= H.BUTTON("Reset").bind("click", reset)
reset(0)
ut()
