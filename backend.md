# Backend alkalmazásfejlesztés tematika

## Bash

- Fájltendszer, könyvtárstruktúra
  - fájltípusok, kiterjesztések
  - fa könyvtár-struktúra
  - abszolút-, relatív elérési út
  - file, könyvtár
  - futtatható fájl, command line applications
- Terminál app
- Terminál parancsok
  - ls, cd, mkdir, chmod
  - touch, rm, cp, mv
  - su, sudo, pwd, cat (type)
  - apt-get, brew
- Windows CMD
  - dir
  - set PATH=%PATH%;C:/php
- Környezeti változók

## PHP I. - XAMPP, SSR

- XAMPP
  - Telepítés
  - Tools
  - htdocs mappa, xampp control panel
- PHP
  - Szintaxis
  - Változók, kommentek, típusok
  - echo, template (\<?php ?>, {})
  - környezeti változók elérése, . => _
  - Vezérlési szerkezetek
  - Tömbök, listák
  - Szerver oldali alkalmazás készítése
  - Asszociatív tömbök
  - print_r()
  - FullStack: HTML FORM POST
  - $_GET, $_POST
  - $_SESSION, session_start(), session_id()
  - Hagyományos FullStack alkalmazás fejlesztése

## MySQL/SQLite ismététlés

- Adatbázis felépítése (MySQL, SQLite)
- SQL TOOLS: DB Browser/SQLiteStudio
- User Privilegs, root, admin (MySQL)
- Táblák
- Mezőtípusok (MySQL)
- Kulcsok: elsődleges kulcs, külső kulcs
- Szűrés, rendezés
- Kapcsolatok táblák között, JOIN
- Descartes szorzat
- Distinct
- [Normalizálás](https://www.youtube.com/watch?v=GFQaEYEc8_8)
- DQL/DDL/DCL/DML
- Adatbázisok tervezése

## PHP II. - MySQL/MariaDB

- PHP
  - Parse json_encode(): PUT, PATCH, DELETE, HEAD, OPTIONS
  - Osztályok, objektumok
  - mysqli: query, fetch_assoc
  - phpMyAdmin
  - Hosting: ATW
- MySQL/MariaDB
  - SELECT
  - WHERE
  - AND, OR, NOT
  - ORDER BY
  - INSERT INTO
  - UPDATE
  - DELETE
  - LIMIT
  - LIKE
  - JOIN, LEFT JOIN
  - [HackerRank](https://www.hackerrank.com/domains/sql) SQL feladatok megoldása

## [*NodeJS*](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

- JSON
- NodeJS telepítése
- Node konzol, console
- node
- alapok, event-loop
- debugging
- parancssoros alkalmazás készítése
- input, standard input
- FS, fájlok olvasása
- környezeti változók elérése: process.env
- env-file
- modulok
- node_modules, npm, package.json
- node git integráció, .gitignore
- nodemon
- események, EventEmitter
- Reguláris kifejezések
- JSON Server
- NodeJs NeDB
- *NodeJS MongoDB, Mongoose*
- *NodeJs SQLite3*
- NodeJS MySQL
- Unit Test: Jest

## BackEnd alapok

- Cookie-k
- REST API (GET, POST, PUT, PATCH, DELETE)
- Postman alkalmazás telepítése, használata
- JSON Server telepítése, használata
- JSON Server + HTML Only Full-Stack minimal
- Unit teszt, integrációs tesztelés, rendszertesztelés
- Hash-elés, ujjlenyomat-módszer (MD5, SHA256, ...)
- Titkosítás (egykulcsos, két kulcsos, nyivános kulcsú), RSA Algoritmus
- Authentikáció, token, 3rd parties authentikáció, OAUTH2.0

## [*ExpressJS*](https://expressjs.com/en/starter/installing.html)

- hello world
- routing
- request
- params
- Session
- express.json (body)
- response
- Frontend/Backend szétválasztása, CORS
- EJS
- *Hosting: Heroku*

## PHP III.

- PHP CORS
- var_export(), echo json_encode()
- Event-stream, flush, ob_flush, sleep
- Packagist/Composer
- Ajax-os Full Stack alkalmazás fejlesztése (*Frontend alkalmazásfejlesztés*)
  - DTO, JSON Mapping
  - file_get_contents('php://input')
  - json_encode()
- Adatbázis tervezés, kapcsolatok
- Adatfolyam-tervezés, adatfolyam-diagrammok
- *JQuery + PHP*
- *AngulatJS + PHP*

## *[Vite](https://vitejs.dev/guide/), [SvelteKit](https://kit.svelte.dev/docs/introduction)*

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
  - React
  - Vue
  - Svelte
    - [tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)
    - npm create svelte@latest
    - adapter-static, .nojekyll, svelte.config, {basedir}
    - routes
    - onMount
    - komponensek
    - MVC alkalmazások fejlesztése
    - SvelteKit FullStack Framework
      - routing
      - loading data
      - form actions
      - page options
      - state management, store
      - building and deploying
      - hooks

## Full-stack multiplatform alkalmazás fejlesztése (SvelteKit - SQLite)

  {Tárgyak közötti együttműködéssel}

- Felhasználó kezelő modul
  - Bejelentkező űrlap
  - Regisztrációs űrlap
  - Felhasználói profil szerkesztő
- Funkcionális modul
  - Rendszerelemek, komponensek azonosítása
  - Komponensek tervezése
  - Komponenstesztek tervezése
  - Komponensek fejlesztése
  - Komponensek tesztelése
- Elkészült rendszer tesztelése
- Elkészült rendszer közzététele

  {* tervezése és fejlesztése}

## Kapcsolódó technológiák II.

- *MEEN: MySQL - ExpressJS - EJS - NodeJS (Vite)*
- *MSN: MySQL - SvelteKit - NodeJS (Vite)*
- RestAPI, SSE, WebSocket
- Autentikáció, Oatuh 2.0
- *BlockChain Serverless Keretrendszerek*
- *Peer-To-Peer hálózatok, WebRTC*

## Kapcsolódó technológiák III.

- MP: MySQL - PHP
- *MPJ*: MySQL - PHP - *JQuery*

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
- random modul, valószínűségszámítás, statisztika
- objektum, referencia
- halmazok (Set)
- szótár adatszerkezet (Map)
- numpy, matplotlib, pygame
- osztályok, objektum-orientált programozás

## Flask: Python BackEnd

- telepítés, indítás, debug mód
- flask app fejlesztés, tesztelés
- routing
- RestAPI
  - GET, POST, PUT, PATCH, DELETE
- params, escaping
- serve static files
- templating (Jinja2)
  - kifejezések {{ ... }}, kommentek {# ... #}
  - utasítások {% ... %} (for, if, macro)
  - filterek
- Fáklok feltöltése
- Flask-MySQL

## Flask MySQL Backend SSR: Jinja2

- Komplex 3-4 táblás full-stack webalkalmás tervezés, fejlesztése

## Kapcsolódó technológiák I.

- MFB: MySQL - Flask - Brython

## PHP III. - phpsocket.io / Laravel

- Php parancsosros alkalmazás (command line app)
- XAMPP PHP
- Laravel
  - [Laravel telepítés](https://laravel.com/docs/10.x/installation), használata (SSR)
  - [Routing](https://laravel.com/docs/10.x/routing)
  - [Request](https://laravel.com/docs/10.x/routing)
  - [Views](https://laravel.com/docs/10.x/routing)
  - [Blade](https://laravel.com/docs/10.x/blade#loops)

[Központi tematika](pdf/Backend%20programozás%20és%20tesztelés.pdf)
