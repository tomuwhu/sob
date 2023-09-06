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
- BootStrap
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
  - objektum paraméter,
  - beépített függvények
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
- Beépített objektumok
  - Math, Array, ...
- Osztályok
  - jellemzők
  - metódusok
  - constructor
  - extends, static
  - példányosítás
- Beépített osztályok
  - Set, Map, ...
- _TypeScript: interface, implements, private, protected, \<T>_

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
  - Axios, RestApi
  - Socket.io<sup>*</sup>
  - levenshtein
  - marked
  - highlight.js
  - Chart.js
  - vis.js
- Browser Alkalmazás
  - Helyi tárhey (localStorage, sessionStorage)
  - Firefox: Svelte Dev Tools

## NodeJS frontend-hez

- Development server: VITE
  - dev server
  - build
  - vite.config.ts
    - plugins
    - rollupOptions
    - build.chunkSizeWarningLimit
- sass: rollup.config, prettierrc

## _SvelteKit_

- npm create svelte
- adapter-static, .nojekyll, svelte.config, {basedir}
- routes
- onMount
- komponensek
- MVC alkalmazások fejlesztése

## _SvelteUI_

- Telepítés
- Funkciók
- Beállítás
- Tartalom
- Űrlapok
- Komponensek

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
