from browser import document as D, html as H

tbl = []
al = []
ap = 0


def reset(e):
    global tbl, al, ap
    if ap > 2: ap = 0
    tbl = [
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
    ][ap]
    al = [
        [
            (0, 3, 3, 2),
            (1, 2, 3, 3),
            (2, 1, 5, 4),
            (3, 1, 7, 9),
            (4, 1, 4, 5),
            (5, 2, 4, 6),
            (6, 1, 3, 7),
            (7, 1, 2, 8),
        ],
        [
            (0, 3, 3, 2),
            (1, 2, 3, 3),
            (2, 2, 3, 3),
            (3, 1, 4, 4),
            (4, 1, 4, 4),
            (5, 1, 7, 5),
            (6, 2, 4, 6),
        ],
        [
            (0, 3, 3, 2),
            (1, 2, 3, 3),
            (2, 1, 5, 4),
            (3, 1, 7, 9),
            (4, 1, 4, 5),
            (5, 2, 4, 6),
            (6, 1, 3, 7),
            (7, 1, 2, 8),
        ],
    ][ap]
    ut()


T = H.DIV()


def rotate(e):
    obj = al[int(e.target.id)]
    al[int(e.target.id)] = (obj[0], obj[2], obj[1], obj[3])
    ut()


def ds(e):
    global dx, dy, me
    me = int(e.target.id)
    rect = e.target.getBoundingClientRect()
    dy = rect.top - e.y
    dx = rect.left - e.x
    print(dx, dy, me)


def de(e):
    obj = al[int(me)]
    global dx, dy, t, ap
    trect = t.getBoundingClientRect()
    px = int((e.x + dx - trect.left + 20) // 34)
    py = int((e.y + dy - trect.top + 20) // 34)
    rx = obj[1]
    ry = obj[2]
    o = 0
    print(px, py, me, rx, ry)
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
    t = H.TABLE(
        [
            H.TR([H.TD(Class=f"x{e}") for (i, e) in enumerate(row)])
            for (j, row) in enumerate(tbl)
        ]
    )

    T <= H.DIV(t.bind("drop", de).bind("dragover", do))
    T <= H.DIV(
        H.DIV(
            Class=f"al al{c}",
            id=f"{i}",
            draggable=f"{not c==0}",
            style={"width": f"{34*x}px", "height": f"{34*y}px"},
        )
        .bind("click", rotate)
        .bind("dragstart", ds)
        for (i, x, y, c) in filter(lambda x: x[3], al)
    )


D <= H.H1("Mondrian")
D <= T
D <= H.BUTTON("Reset").bind("click", reset)
reset(0)
ut()
