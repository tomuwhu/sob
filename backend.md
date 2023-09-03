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

## XAMPP: PHP + MySQL/MariaDB

- XAMPP
  - Telepítés
  - Tools
  - htdocs mappa, xampp control panel
- PHP
  - Szintaxis
  - Változók, kommentek, típusok
  - echo, template (\<?php ?>, {})
  - Vezérlési szerkezetek
  - Tömbök, listák
  - Szerver oldali alkalmazás készítése
  - Asszociatív tömbök
  - print_r(), var_export(), echo json_encode()
  - FullStack: HTML FORM POST
  - $_GET, $_POST
  - $_SESSION, session_start(), session_id()
  - Hagyományos FullStack alkalmazás fejlesztése
  - Parse json_encode(): PUT, PATCH, DELETE, HEAD, OPTIONS
  - Osztályok, objektumok
  - mysqli: query, fetch_assoc
  - CORS
  - Event-stream, flush, ob_flush, sleep
  - Packagist/Composer
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
  - phpMyAdmin
- Postman alkalmazás telepítése, használata
- Ajax-os Full Stack alkalmazás fejlesztése (*Frontend alkalmazásfejlesztés*)
  - DTO, JSON Mapping
  - file_get_contents('php://input')
  - json_encode()
- Adatbázis tervezés, kapcsolatok
- Adatfolyam-tervezés, adatfolyam-diagrammok
- Unit teszt,  integrációs tesztelés, rendszertesztelés
- Hosting: ATW
- PHP telepítés, php command line app
- Laravel
  - [Laravel telepítés](https://laravel.com/docs/10.x/installation), használata (SSR)
  - [Routing](https://laravel.com/docs/10.x/routing)
  - [Request](https://laravel.com/docs/10.x/routing)
  - [Views](https://laravel.com/docs/10.x/routing)
  - [Blade](https://laravel.com/docs/10.x/blade#loops)

## NodeJS + NeDB/MongoDB/SQLite/MySQL

- JSON
- NodeJS telepítése
- Node konzol, console
- alapok, event-loop
- parancssoros alkalmazás készítése
- input, standard input
- FS, fájlok olvasása
- modulok
- npm, package.json
- node_modules, npm i, package.json
- nodemon
- események, EventEmitter
- Reguláris kifejezések
- NodeJs NeDB
- NodeJS MongoDB, Mongoose
- NodeJs SQLite3
- NodeJS MySQL

## ExpressJS

- hello world
- routing
- request
- params
- Session
- express.json (body)
- response
- CORS
- EJS
- Hosting: Heroku

## _Svelte Kit_ AJAX

- fetch
- axios
- md5

## Full-stack multiplatform alkalmazás fejlesztése

  {Tárgyak közötti együttműködéssel}

- Felhasználó kezelő modul
  - Bejelentkező űrlap *
  - Regisztrációs űrlap *
  - Felhasználói profil szerkesztő *
- Funkcionális modul *
  - Rendszerelemek, komponensek azonosítása
  - Komponensek tervezése
  - Komponenstesztek tervezése
  - Komponensek fejlesztése
  - Komponensek tesztelése
- Elkészült rendszer tesztelése
- Elkészült rendszer közzététele

  {* tervezése és fejlesztése}

## Kapcsolódó technológiák

- MPJ: MySQL-PHP-JQuery
- MESN: MySQL-ExpressJS-SvelteKit-NodeJS
- RestAPI, SSE, WebSocket
- Autentikáció, Oatuh
- BlockChain Serverless Keretrendszerek
- Peer-To-Peer hálózatok, WebRTC

***

[Központi tematika](pdf/Backend%20programozás%20és%20tesztelés.pdf)
  