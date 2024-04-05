# Asztali- és Mobil alkalmazásfejlesztés tematika

## Ismétlés: [C\#](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference)

- VSCode: C\# for Visual Studio Code Plugin
- C\# programozási nyelv
  - [Az első C\#-kód megírása](https://learn.microsoft.com/hu-hu/training/modules/csharp-write-first/)
  - Konzol alkalmazás
  - Változók, típusok
  - Input/Output
  - Fájl beolvásás
  - TXT és CSV parsing
  - Típuskonvezió
  - Osztályok, objektumok, property-k, methódusok
  - Adatfeldolgozás, kiválasztás, kiválogatás, szűrés, rendezés, összegzés
  - [Debugolás, hibakeresés](https://learn.microsoft.com/hu-hu/training/modules/dotnet-debug/3-analyze-your-program-state)
  - [C\# referencia](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)
    - Types
    - KeyWords
      - Modifiers
      - Operators
      - Statements
        - if, switch
        - do, for, foreach, while
        - break, continue, goto, return
        - exception handling
        - fixed, lock, yield
      - namespace, base, this
      - from, where, select, group, join, ascending...

## Haladó szintű objektumorientált programozási technikák ismerete

- Öröklődés és polimorfizmus (extends, polimorfizmus, interface)
- Metódus- és konstruktor-túlterhelés
  (több konstruktor együttes használata, a method overloading hasznossága,
  felhasználási korlátok)
- Egységbezárás, objektumok közötti kommunikáció
  (objektumok együttműködése és kommunikációja, az egységbezárás hasznosságának
  szemléltetése, getter és setter függvények)
- IDE fejlesztői eszközeinek használata
  - Refaktorálási lehetőségek egységbezárás támogatására

## Haladó szintű objektumorientált programozási technikák gyakorlati alkalmazása

- Létező osztályból új osztály leszármaztatása
- A származtatott osztályban új tulajdonságok és metódusok definiálása
- A származtatott osztályban az ősosztály tulajdonságainak és metódusainak felüldefiniálása
- Öröklődést alkalmazó osztályhierarchia tervezése és megvalósítása

## Nevezetes algoritmusok és megvalósításuk OOP-technológiával

- A véletlen és tulajdonságai: valószínűségi változó mint véletlen, véletlenek összege
- Eloszlásfüggvény fogalma, egyenletes eloszlás, normális eloszlás
- Futásiidő-komplexitás, az 𝒪-jelölés, memóriaigény
- Nevezetes adatstruktúrák memóriaigénye és műveletek időkomplexitása:
  - Tömb (C#/JavaScript/TypeScript/PHP)
  - Láncolt lista (JavaScript/C#)
  - Verem (JavaScript/C#)
  - Többszörösen láncolt lista
  - Fa, bináris fa, kupac, keresőfák
- Hash map (használata C#)
- Nevezetes algoritmusok és implementálásuk:
  - Bináris keresés
  - Buborékrendezés
  - Beszúrásos rendezés
  - Quick Sort (C#), felosztóelem-választási stratégiák
  - Mintaillesztés automatával
  - Reguláris Kifejezések (JavaScript)
- Rekurzió és alkalmazása
  - Hanoi tornyai
  - Az aknakereső rekurzív hívása 0 aknánál
  - Tükörszó probléma
  - Dinamikus programozás, Mohó stratégia
    - Hátizsák és töredékes hátizsák, pénzváltás probléma
    - Kincskereső
  - Gráf adatszerkezet és alapvető gráf-algoritmusok
    - Mélységi bejárás, mélységi keresés, erősen összefüggő komponensek
    - Szélességi bejárás, szélességi keresés, legrövidebb út keresése
    - Súlyozott gráfok, Floyd-Warshall algoritmus, Dijsktra algoritmus
    - A* algoritmus,
    - Utazóugynök probléma, Problémák osztályozása, NP teljesség
    - Turing gép, Church-Turing tézis
    - Approximációs algoritmusok
  - Egyszerű problémák megoldása (CSES Problem SET)
  - Egyszerű problémák megoldása (HackerrRank Problem Solving)
  - Véletlenített algoritmusok
  - Online algoritmusok és elemzésük

## A [tiszta kód](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) elméleti alapjai és gyakorlata

- Elnevezések (Python/JavaScript/TypeScript/C++/C#/PHP)
- Függvények (Python/JavaScript/TypeScript/C++/C#/PHP)
- Kommentek (HTML/MarkDown/CSS/Python/JavaScript/TypeScript/C++/C#/PHP)
- Kódformázás (Prettier)
- Objektumok és adatstruktúrák (JavScript/TypeScript)
- Hibakezelés (NodeJS/C#: Try-Catch)
- Határok és külső kód használata
- Unit tesztek (NodeJS: Jest)
- Osztályok (NodeJS/C#)

## Unit tesztelés

- A szoftvertesztelés szintjei, szerepük
  - Unit teszt
  - Modul vagy komponens teszt
  - Integrációs teszt
  - Rendszerteszt
  - Átvételi teszt
- Unit test case-ek létrehozása és futtatása NodeJS/C# környezetben
  - NodeJS: Jest
  - C#: Nunit, Test, TestFixture
- Assertiönök (C#)
  - AreEqual, AreNotEqual, AreSame, AreNotSame
  - IsNull, IsNotNull, IsTrue, IsFalse
- AAA minta
- „felépítő” és „lebontó” funkcionalitás unit test framework-ben (C#)
  - SetUp, TearDown
- osztály, függvény vagy metódus teljes működésének lefedése unit tesztekkel:
  - összes lehetséges bemenet-kimenet páros
  - a tesztek futtatásakor a tesztelendő kód minden eleme lefusson

## Mobil alkalmazások fejlesztése

- Android mobilalkalmazás-fejlesztői környezetet kialakítása
  - React Native: Editor, NodeJS, npm, react-native, expo
  - Progressive Web App: Editor, NodeJS, npm, manifest, serviceWorker
- “Hello, World!” alkalmazás fejlesztése és eszközre történő telepítése
- Képes interaktív felhasználói interfészek (UI) lefejlesztésére
  - UI-elemek létrehozása és elrendezése a képernyőn
  - UI-elemek tartalmának dinamikus változtatása kódból (data binding)
  - UI-elemek interakciójának kezelése kódból
- Képernyők közti navigáció
- HTTP kérés küldés, a válasz kezelése, szükség esetén
  - a küldendő vagy érkező JSON-adatok szerializálása, deszerializálása
- HTTP kérés eredményének tárolása, megjelenítése

## Projektmunka

### Konzolalkalmazás fejlesztése NodeJS/C\# nyelven

- [CSES Problem SET](https://cses.fi/problemset/) megoldása NodeJS nyelven
  - [Weird algorithm](https://www.youtube.com/watch?v=094y1Z2wpJg)
  - Missing Number
  - Repetitions
  - Increasing Array
  - Permutations
  - Number Spiral
  - Tower of Hanoi
  - [Two Sets](https://tomuwhu.github.io/sv03/2sets)
  - Distinct Numbers
  - Dice Combinations
  - Counting Rooms
- Parancssori paraméterek beolvasása
- [HackerRank](https://www.hackerrank.com/domains/algorithms) feladatok megoldása NodeJS/C\# nyelven

### Asztali- és mobilalkalmazások fejlesztése (C\#/Electron)

- [Visual Studio](https://visualstudio.microsoft.com/downloads/) telepítése
- WPF alkalmazások fejlesztése
  - [Tutorial: Create a new WPF app with .NET](https://learn.microsoft.com/hu-hu/dotnet/desktop/wpf/get-started/create-app-visual-studio?view=netdesktop-7.0)
- [Electron](https://electron-vite.org/guide/)/TypeScript+Svelte telepítése
- Electron app fejlesztése
