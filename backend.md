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

## MySQL/SQLite ismététlés

- Adatbázis felépítése (MySQL, SQLite, MariaDB, XAMPP)
- SQL TOOLS: DB Browser/MySQL Workbench/PHPMyAdmin/Navicat
- User Privilegs, root, admin
- Táblák
- Mezőtípusok
- Kulcsok: elsődleges kulcs, külső kulcs
- Szűrés, rendezés
- Kapcsolatok táblák között, JOIN
- Descartes szorzat
- Distinct
- [Normalizálás](https://www.youtube.com/watch?v=GFQaEYEc8_8)
- DQL/DDL/DCL/DML

## PHP I. - XAMPP, MySQL/MariaDB

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
  - print_r(), var_export(), echo json_encode()
  - FullStack: HTML FORM POST
  - $HTTP_POST_VARS, $HTTP_GET_VARS, és/vagy $HTTP_POST_FILES
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
- SSR Full STack alkalmazás fejlesztése
- Ajax-os Full Stack alkalmazás fejlesztése (*Frontend alkalmazásfejlesztés*)
  - DTO, JSON Mapping
  - file_get_contents('php://input')
  - json_encode()
- Adatbázis tervezés, kapcsolatok
- Adatfolyam-tervezés, adatfolyam-diagrammok
- Unit teszt,  integrációs tesztelés, rendszertesztelés
- Hosting: ATW
- *JQuery + PHP*
- *AngulatJS + PHP*

## *Python BackEnd*

- *Flask*
- *FastAPI*

## *NodeJS + NeDB/MongoDB/SQLite/MySQL*

- *JSON*
- *NodeJS telepítése*
- *Node konzol, console*
- *alapok, event-loop*
- *debugging*
- *parancssoros alkalmazás készítése*
- *input, standard input*
- *FS, fájlok olvasása*
- *környezeti változók elérése: process.env.*
- *env-file*
- *modulok*
- *npm, package.json*
- *node_modules, npm i, package.json*
- *node git integráció*
- *nodemon*
- *események, EventEmitter*
- *Reguláris kifejezések*
- *NodeJs NeDB*
- *NodeJS MongoDB, Mongoose*
- *NodeJs SQLite3*
- *NodeJS MySQL*

## *ExpressJS*

- *hello world*
- *routing*
- *request*
- *params*
- *Session*
- *express.json (body)*
- *response*
- CORS
- *EJS*
- *Hosting: Heroku*

## *_Svelte Kit_*

- SvelteKit FullStack Framework
  - routing
  - loading data
  - form actions
  - page options
  - state management, store
  - building and deploying
  - hooks

## Full-stack multiplatform alkalmazás fejlesztése

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

## Kapcsolódó technológiák

- MP: MySQL - PHP
- *MPJ*: MySQL - PHP - *JQuery*
- *MEEN: MySQL - ExpressJS - EJS - NodeJS (Vite)*
- *MSN: MySQL - SvelteKit - NodeJS (Vite)*
- RestAPI, *SSE, WebSocket*
- Autentikáció, *Oatuh*
- *BlockChain Serverless Keretrendszerek*
- *Peer-To-Peer hálózatok, WebRTC*

***

## *PHP II. Laravel*

- Php parancsosros alkalmazás (command line app)
- XAMPP PHP
- Laravel
  - [Laravel telepítés](https://laravel.com/docs/10.x/installation), használata (SSR)
  - [Routing](https://laravel.com/docs/10.x/routing)
  - [Request](https://laravel.com/docs/10.x/routing)
  - [Views](https://laravel.com/docs/10.x/routing)
  - [Blade](https://laravel.com/docs/10.x/blade#loops)
  - Livewire connect

[Központi tematika](pdf/Backend%20programozás%20és%20tesztelés.pdf)
  