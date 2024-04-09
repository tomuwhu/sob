# Frontend alkalmazásfejlesztés tematika

## [![Logók](https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png)](https://github.com/logos)

- github regisztráció
- git telepítés
- git beállítása
  - git init, clone, add, commit, push, pull
  - .gitignore
- GitHub Desktop
- index.html, README.md
- Beállítások, GitHub Pages
- Domain beállítások
- Adatvédelmi tudnivalók, GitGuardian

```bash
git config --global user.name "Your Name"
git config --global user.email "<youremail@yourdomain.com>"
```

## VSCode használata

- kód bevitel
- UTF-8, Szimbólumok
- témák használata
- pluginek
  - ESLint
  - Prettier
  - GitHub Pull Requests
  - Indent-rainbow
  - Live Server
  - Live Share
  - Markdown All in One
  - Markdownlint
  - IntelliCode
  - Material Icons
  - _Svelte preview_
  - _Svelte counter példaalkalmazás_

## HTML/CSS/Markdown/SVG ismétlés

- Markdown
- HTML objektumok, attribútumok, szelektorok
- CSS szelektorok, FlexBox
- Táblázatok
- Űrlapok, Űrlapelemek
- Események
- CSS Animációk
- Favicon
- .css file, \<link>
- SVG formátum, SVG használata HTML-ben

## JavaScript/TypeScript (Browser)

- JavaScript megjelenítés
  - Browser DevTools, console
  - window, document objects, DOM
  - getElementById, querySelectorAll()
  - element attribútumok (id, class, draggable, ...)
  - \<script src='...'\>, \<script type="module" src="./main.js"></script>
  - _{}, bind:value, ..._
- Eseménykezelés __~Függvények__
  - böngésző események
  - (onclick, keydown, keyup, onmousemove, onmouseout, ...)
  - (oninput, onchange, dragstart, dragover, drop...)
  - _események (on:click, bind:value, on:dragstart, ...)_
- Szintaxis
  - Értékek, típusok (számok, szöveg)
  - Változók, definiálás, értékadás
  - _var, let, const_
  - JavaScript / TypeScript
    - alap típusok: string, number, boolean
    - bigint, symbol, object, funtion, any
  - Kulcsszavak
  - Kommentek: //, /⁕ &lt;!-- ண -->
  - Operátorok, kifejezések, precedencia
  - String függvények, template
  - Feltételes értékadás: ண ? ண : ண
- Függvények
  - function f() {}
  - f = (...) => { ... ; return ௐ}
  - f = ௐ => ண
  - alapértelmezett érték
  - _nem kötelező paraméter, kötelező típussal: ௐ?:ண_
  - objektum paraméter
  - get, set
  - beépített függvények
  - generátorfüggvények, yield, yield*
- _Számított értékek: $: ௐ_
- Tömbök (listák)
  - Lista létrehozása
  - Elem hozzáadása, adott elem kiválasztása
  - Elem törlése, adott elem keresése
  - Szűrés, rendezés, elemek módosítása
- Utasítások
  - if, elseif, else, switch...case
  - for, .forEach(ண), .map(ண), ...
  - _{#if ண} ... {:else if ண} ... {:else} ... {/if}_
  - _{#each ஃ as ୦} ... {/each}_
  - try...catch
- Objektumok
  - jellemzők
  - metódusok
- Osztályok
  - jellemzők, private, public
  - metódusok
  - constructor
  - extends, static
  - példányosítás
- Beépített osztályok
  - Math
    - E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2
    - abs, sin, cos, asin, acos, ceil, trunc, floor, round
    - sin, cos, exp, sgn, sqrt, log, log2, log10
    - max, min, pow, random
  - Array
    - length
    - fill, every, join, keys, values, push, pop, *shift, unshift*
    - splice, toSpliced, reverse, toReversed
    - forEach, map, filter, sort, toSorted
  - Set
    - size
    - add, delete, has, keys (values), forEach, clear
    - union, intersection, symmetricDifference
  - Map, WeakMap
    - size
    - set, has, gat, delete, forEach, keys, values, clear
  - Date
  - eval()
  - JSON
  - RegExp
- _TypeScript: interface, implements, private, protected, \<T>_
[JavaScript referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## JavaScript fogások

- String template
- Array (map, forEach, fill, sort, filter, reduce)
- SetInterval, SetTimeout
- Callback
- async, await
- Promisse
- Fetch
  - Stream
  - Stream => Text
  - Stream => JSON
- EventSource
- Date, Time
- JSON
- RegExp
- Modulok, CDN
  - jQuery
  - AngularJS
  - Axios, RestAPI
  - Socket.io<sup>*</sup>
  - levenshtein
  - marked
  - highlight.js
  - Chart.js
  - vis.js
- Browser Alkalmazás
  - Helyi tárhey (localStorage, sessionStorage)
  - Firefox: Svelte Dev Tools
- FrontEnd technológiák, fogások
  - Egér és billentyűzet események
  - Drag & Drop
  - Animációk, fizikai szimulációk
    - Egyenes vonalú egyenletes mozgás, sebességvektor
    - Gyorsulás, Lassulás
    - Ütközésdetektálás
    - Lendületmegmaradás törvénye és alkalmazása
  - Design fogások
  - BootStrap

## HTML/CSS/JS Mobile

- viewport
- @media
- inspect
- device toolbar
- touchstart, touchend, touchmove, touchcancel események
- dragndrop speciális tulajdonságok
- navigator.geolocation
- DeviceOrientationEvent
- DeviceMotionEvent
  - acceleration, accelerationIncludingGravity
  - interval
  - rotationRate

## JQuery UI

- HTML
- JavaScript
- Options
- Metódusok
- Események
- Styílusok
- Interakciók
- Widgetek
- Effektek
- Eszközök

## JQuery Mobile

- ThemeRoller
- Eszközök

## Python ismétlés

- python telepítése
- python futtatása terminálban
- hello world pythonban
- számok (int, float, nagy számok)
- operátorok (+, -, *, /, //, %, **, ... )
- python függvények használata ( int(), float(), max(), min() )
- számrendszerek (0x, 0b, 0o, format())
- python stringek
- python programok szerkesztése vscode-ban
- print()
- input()
- string template, format
- if - elif - else, tabulálás a pythonban
- logikai típus és operátorai
- while ciklus és használata
- függvények definiálása
- bemeneti paraméterek
- visszatérési érték (return)
- generátor függvények (yield)
- rekurzió
- rekurzió a generátorokban (yield from)
- a *operátor
- range, python listák
- listák és generátorok bejárása, a for utasítás
- lista generátor használata [i for i in l if i]
- alapvető algoritmusok
  - eldöntés (in)
  - keresés (find)
  - összegzés (max, min, sum, count)
  - szűrés (filter)
  - rendezés (sort, sorted)
  - további lista és stringműveletek
- szövegfájlok kezelése
- teknőcgrafika (like logo) vs. graphics
- random modul, valószínűségszámítás, statisztika
- összetett feladatok
- objektum, referencia
- console alkalmazások, sys.argv
- szótárak
- osztályok, objektumok
- fájlkezelés
- modulok

## FrontEnd Python: Brython

- browser
- html
- bind
- axios

## NodeJS frontend-hez, fullstack-hez

- Development server: VITE
  - dev server
  - build
  - vite.config.ts
    - plugins
    - rollupOptions
    - build.chunkSizeWarningLimit
- sass: rollup.config, prettierrc
- TypeScript
  - Types
  - Classes
  - Templates
- Vite technológiák:
  - Vanilla
  - Vue
  - React
  - Svelte

## _Svelte_

- Svelte komponensek
  - export prop
  - reactivitás, számított változók
  - state management, store
  - style :global
- Logikai blokkok (#if, #each, #await, #key)
  - speciális elemek (@html, @debug, @const)
- Direktívák
  - on:__, bind:__, class:__, style:__
  - use:__, transition:__, animate:__
- Svelte runtime
  - onMount, beforeUpdate, afterUpdate, onDestroy, tick
  - setContext, getContext, hasContext, getAllContexts
  - createEventDispatcher
- Svelte Store
- Motion, Transition, Animation

## _SvelteUI_

- Telepítés
- Funkciók
- Beállítás
- Tartalom
- Űrlapok
- Komponensek

## Full-stack multiplatform alkalmazás fejlesztése

  {Tárgyak közötti együttműködéssel}

- Felhasználó kezelő modul
  - Bejelentkező űrlap¹
  - Regisztrációs űrlap¹
  - Felhasználói profil szerkesztő¹
- Funkcionális modul¹
  - Rendszerelemek, komponensek azonosítása
  - Komponensek tervezése
  - Komponenstesztek tervezése
  - Komponensek fejlesztése
  - Komponensek tesztelése
- Elkészült rendszer tesztelése
- Elkészült rendszer közzététele

  {¹ tervezése és fejlesztése}

***

## PHP on frontend: [Laravel Livewire](https://livewire.laravel.com/)

- komponensek
- változók
- változó hozzárendelése HTML objektumhoz (binding)

[Központi tematika](pdf/Frontend%20programozás%20és%20tesztelés.pdf)
