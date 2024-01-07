from browser import document as D, html as H, bind, timer
from random import randrange as rr


def torol():
    global T, xp, yp, act
    for e in actu:
        t[yp + e[0]][xp + e[1]] = 0


yp = 0
xp = 5


@bind(D["body"], "keydown")
def act(e):
    global yp, xp, ti, speed
    if not go:
        if e.keyCode == 65:
            torol()
            if checkl():
                xp -= 1
            kirak()
        if e.keyCode == 68:
            torol()
            if checkr():
                xp += 1
            kirak()
        if e.keyCode in [83, 32]:
            timer.clear_interval(ti)
            step()
            ti = timer.set_interval(step, speed)
        if e.keyCode == 69:
            torol()
            checkrotl()
            kirak()
        if e.keyCode == 81:
            torol()
            checkrotr()
            kirak()


def check():
    global xp, yp, actu, t
    for e in actu:
        if t[e[0] + yp + 1][e[1] + xp]:
            return False
    return True


def checkrotl():
    global xp, yp, actu, t
    actument = actu
    forgat_l()
    for e in actu:
        if t[e[0] + yp][e[1] + xp]:
            actu = actument
            return False
    return True


def checkrotr():
    global xp, yp, actu, t
    actument = actu
    forgat_r()
    for e in actu:
        if t[e[0] + yp][e[1] + xp]:
            actu = actument
            return False
    return True


def checkr():
    global xp, yp, actu, t
    for e in actu:
        if t[e[0] + yp][e[1] + xp + 1]:
            return False
    return True


def checkl():
    global xp, yp, actu, t
    for e in actu:
        if t[e[0] + yp][e[1] + xp - 1]:
            return False
    return True


def step():
    global xp, yp, actu, next, nextid, actuid, al, go, psz, speed
    if not go:
        if speed > 800:
            speed -= 1.3
        if speed > 400:
            speed -= 0.3
        if speed > 200:
            speed -= 0.1
        if speed > 100:
            speed -= 0.03
        speed -= 0.01
        psz += 1
        torol()
        if check():
            yp += 1
            kirak()
            return
        kirak()
        for y in range(22, 1, -1):
            vanluk = False
            for x in range(1, 11):
                if t[y][x] == 0:
                    vanluk = True
            while not vanluk:
                psz += 15
                for j in range(y - 1, 2, -1):
                    for i in range(1, 11):
                        t[j + 1][i] = t[j][i]
                vanluk = False
                for i in range(1, 11):
                    if t[y][i] == 0:
                        vanluk = True
        mutat()
        actu = next
        actuid = nextid
        yp = 0
        xp = 5
        nextid = rr(0, 7)
        next = al[nextid]
        mutat()
        for e in actu:
            if t[e[0] + yp][e[1] + xp] != 0:
                go = True
        if not go:
            kirak()
        else:
            T <= H.DIV("Játék vége", Class="go")


def mutat():
    global nextid
    m = [[0 for i in range(size(next) + 1)] for j in range(size(next) + 1)]
    for e in next:
        m[e[0]][e[1]] = nextid + 1
    M.clear()
    M <= H.DIV("Következő:", Class="next")
    M <= H.TABLE([H.TR([H.TD(Class=f"x{a}") for a in row]) for row in m])


def kirak():
    global xp, yp, actuid, psz
    for e in actu:
        t[yp + e[0]][xp + e[1]] = actuid + 1
    T.clear()
    T <= H.TABLE([H.TR([H.TD(Class=f"x{a}") for a in row]) for row in t])
    T <= H.DIV(f"Pontszám: <b>{psz}</b> pont", Class="psz")


def size(x):
    max = 0
    for e in x:
        for i in e:
            if i > max:
                max = i
    return max


def forgat_l():
    global actu
    y = []
    for e in actu:
        y.append([e[1], size(actu) - e[0]])
    actu = y


def forgat_r():
    global actu
    y = []
    for e in actu:
        y.append([size(actu) - e[1], e[0]])
    actu = y


al = [
    [list(map(int, list(z))) for z in x.split(",")]
    for x in [
        "20,21,22,23",
        "00,01,02,11",
        "00,01,10,11",
        "10,11,12,20",
        "10,11,12,22",
        "00,01,11,12",
        "10,11,01,02",
    ]
]
T, M = H.DIV(Class="tb"), H.DIV(Class="tb next")


def start():
    global t, al, next, nextid, actu, actuid, go, ti, psz, speed
    speed = 900
    t = [[0 for i in range(12)] for j in range(24)]
    for i in range(12):
        t[23][i] = "a"
    for i in range(23):
        t[i][0] = "a"
        t[i][11] = "a"
    psz = 0
    actuid, nextid = rr(0, 7), rr(0, 7)
    next = al[nextid]
    actu = al[actuid]
    go = False
    mutat()
    kirak()
    ti = timer.set_interval(step, speed)


t, psz, speed = [], 0, 0
start()
D <= H.H1("Tetrisz")
D <= H.DIV([T, M], Class="mc")
D <= H.A(
    "SOB Szoftverfejlesztő képzés - példaprogtam By Dr. Németh Tamás",
    href="http://sob.es6.eu",
    target="sob",
)
