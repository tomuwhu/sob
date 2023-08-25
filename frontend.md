# Frontend alkalmazásfejlesztés tematika

## GitHub

- github regisztráció
- git telepítés
- git beállítása
  - git init, clone, add, commit, push, pull
  - .gitignore
- GitHub Desktop
- index.html, README.md
- Beállítások, GitHub Pages

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

## HTML/CSS/Markdown ismétlés

- Markdown
- HTML objektumok, attribútumok, szelektorok
- CSS szelektorok, FlexBox
- Táblázatok
- Űrlapok, Űrlapelemek
- Események
- CSS Animációk
- Favicon

## JavaScript/TypeScript (Browser)

- JavaScript megjelenítés
  - Browser DevTools, console
  - window, document objects, DOM
  - getElementById, querySelectorAll()
  - element attribútumok
  - \<script src='...'\>, \<script type="module" src="./main.js"></script>
  - _{}, bind:value, ..._
- Eseménykezelés __~Függvények__
  - böngésző események (onclick, ...)
  - _események (on:click, ...)_
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
- _Számított értékek: $: ௐ_
- Tömbök (listák)
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
  - jellemzők
  - metódusok
  - constructor
  - extends, static
  - példányosítás
- _TypeScript: interface, implements, private, protected, \<T>_

## JavaScript fogások

- String template
- Array (map, forEach, fill, ...)
- SetInterval, SetTimeout
- Callback
- async, await
- Promisse
- Fetch
- EventSource
- Date, Time
- JSON
- RegExp
- Modulok, CDN
  - levenshtein
  - marked
  - highlight.js
  - Chart.js
  - vis.js
  - jQuery
- Browser Alkalmazás
  - Helyi tárhey (localStorage, sessionStorage)
  - IndexedDB
  - WebSQL

## NodeJS frontend-hez

- Development server
  - http-server
  - WebpPack
    - Entry
    - Output
    - Loaders
    - Plugins
  - VITE
    - dev server
    - build
    - deploy
    - Server-Side Rendering
- Axios, RestApi
- Socket.io

## _SvelteKit_

- npm create svelte
- adapter-static, .nojekyll, svelte.config, {basedir}
- sass: rollup.config, prettierrc
- routes
- onMount

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
