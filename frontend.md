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

## JavaScript/TypeScript Szintaxis

- JavaScript megjelenítés
  - böngésző funkciók (.innerHTML(), ...)
  - console.log()
  - _{}, bind:value, ..._
- Eseménykezelés
  - böngésző események (onclick, ...)
  - _események (on:click, bind:value, ...)_
- Szintaxis
  - Értékek, típusok (számok, szöveg)
  - Változók, definiálás, értékadás (var, let, const)
  - Operátorok, kifejezések, precedencia
  - Feltételes értékadás: ண ? ண : ண
  - Kulcsszavak
  - Kommentek: //, /⁕ &lt;!-- ண -->
- Függvények
- _Számított értékek: $: ௐ_
- Tömbök (listák)
- Utasítások
  - if, elseif, else, switch-case
  - for, .forEach(ண), .map(ண), ...
  - _{#if ண} ... {:else if ண} ... {:else} ... {/if}_
  - _{#each ஃ as ୦} ... {/each}_
  - try...catch
- Objektumok
- Osztályok
- TypeScript: Interface

## JavaScript fogások

- String template
- Array (map, forEach, fill, ...)
- SetInterval, SetTimeout
- Callback
- async, await
- Promisse
- Fetch
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

## JQUERY (ha lesz idő)

- Szintaxis
- Szelektorok
- Események
- html, text, css
- méretek
- filterek

## Browser JavaScript

- Browser DevTools
- \<script src='...'\>, \<script type="module" src="./main.js"></script>
- Helyi tárhey
- IndexedDB
- WebSQL

## Axios, RestAPI, CORS

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

## BootStrap

- Telepítés
- Funkciók
- Beállítás
- Tartalom
- Formok
- Komponensek

## _SvelteKit_

- npm create svelte
- adapter-static, .nojekyll, svelte.config, {basedir}
- sass: rollup.config, prettierrc
- routes
- onMount

## _SvelteStrap, SvelteUI_

- Telepítés
- Funkciók
- Beállítás
- Tartalom
- Formok
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
