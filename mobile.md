# Asztali- és Mobil alkalmazásfejlesztés tematika

## Ismétlés: [C\#](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference)

- VSCode: C\# for Visual Studi  - Code Plugin
- C\# programozási nyelv
  - [Az első C\#-kód megírása](https://learn.microsoft.com/hu-hu/training/modules/csharp-write-first/)
  - [Debugolás, hibakeresés](https://learn.microsoft.com/hu-hu/training/modules/dotnet-debug/3-analyze-your-program-state)
  - [C\# referencia](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)

## Haladó szintű objektumorientált programozási technikák ismerete:

- Öröklődés és polimorfizmus (extends, polimorfizmus, interface)
- Metódus- és konstruktor-túlterhelés (több konstruktor együttes használata, a method overloading hasznossága, felhasználási korlátok)
- Egységbezárás, objektumok közötti kommunikáció (objektumok együttműködése és kommunikációja, az egységbezárás hasznosságának szemléltetése, getter és set-ter függvények)
- IDE fejlesztői eszközeinek használata, refaktorálási lehetőségek egységbezárás tá-mogatására
Haladó szintű objektumorientált programozási technikák gyakorlati alkalmazása:
- Létező osztályból új osztályt származtat le
- A származtatott osztályban új tulajdonságokat és metódusokat definiál
- A származtatott osztályban az ősosztály tulajdonságait és metódusait felüldefiniálja
- Adott probléma megoldására öröklődést alkalmazó osztályhierarchiát tervez és va-lósít meg (instrukció alapján részben önállóan)

## Nevezetes algoritmusok és megvalósításuk OOP-technológiával

- Futásiidő-komplexitás, az   - - jelölés, memóriaigény
- Nevezetes adatstruktúrák memóriaigénye és műveletek időkomplexitása:
  - Tömb (használata Java-ban / C#-ban)
  - Láncolt lista (használata Java-ban / C#-ban)
  - Verem (használata Java-ban / C#-ban)
  - Többszörösen láncolt lista
  - Fa, bináris fa
- Hash map (használata Java-ban / C#-ban)
- Nevezetes algoritmusok és implementálásuk:
  - Bináris keresés
  - Buborékrendezés
  - Beszúrásos rendezés
  - Quick Sort - Reguláris Kifejezések (használata Java-ban / C#-ban)
- Rekurzió és alkalmazása
  - Hanoi tornyai
  - Hátizsák és töredékes hátizsák, pénzváltás probléma
  - Tükörszó probléma
  - Dinamikus programozás, Mohó stratégia
  - Gráf adatszerkezet és alapvető gráf-algoritmusok
  - Egyszerű problémák megoldása (CSES Problem SET)
  - Egyszerű problémák megoldása (HackerrRank Problem Solving)

## A tiszta kód elméleti alapjai és gyakorlata

- Clean Code
- Elnevezések
- Függvények
- Kommentek
- Kódformázás
- Objektumok és adatstruktúrák
- Hibakezelés
- Határok és külső kód használata
- Unit tesztek
- Osztályok

## Unit tesztelés

- A szoftvertesztelés szintjei, szerepük
  - Unit teszt
  - Modul vagy komponens teszt
  - Integrációs teszt
  - Rendszerteszt
  - Átvételi teszt
- Unit test case-ek létrehozása és futtatása C# vagy Java környezetben
  - Java: Junit, @Test, @Suite
  - C#: Nunit, [Test], [TestFixture]
- Assertiönök
  - Java: assertEquals, assertTrue, assertFalse, assertNull, assertNotNull, as-sertSame, assertNotSame, assertArrayEquals
  - C#: AreEqual, AreNotEqual, AreSame, AreNotSame, IsNull, IsNotNull, IsTrue, IsFalse
- AAA minta
- „felépítő” és „lebontó” funkcionalitás unit test framework-ben
  - Java: @Before, @After
  - C#: [SetUp], [TearDown]
- osztály, függvény vagy metódus teljes működésének lefedése unit tesztekkel:
  - összes lehetséges bemenet-kimenet páros
  - a tesztek futtatásakor a tesztelendő kód minden eleme lefusson

## Mobil alkalmazások fejlesztése

- Android mobilalkalmazás-fejlesztői környezetet kialakítása
  - Java: Android Studio, Android Emulator
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

## Konzolalkalmazás fejlesztése TypeScript/C\#/Java nyelven

- [CSES Problem SET](https://cses.fi/problemset/) megoldása NodeJS nyelven
  - [Weird algorithm](https://www.youtube.com/watch?v=094y1Z2wpJg)
  - Missing Number
  - Repetitions
  - Increasing Array
  - Permutations
  - Number Spiral
  - Tower of Hanoi
  - [Tw  - Sets](https://tomuwhu.github.io/sv03/2sets)
  - Distinct Numbers
  - Dice Combinations
  - Counting Rooms
- Parancssori paraméterek beolvasása
- [HackerRank](https://www.hackerrank.com/domains/algorithms) feladatok megoldása TypeScript/C\# nyelven

## Projektmunka: Asztali- és mobilalkalmazások fejlesztése (C\#/Electron)

- [Visual Studio](https://visualstudio.microsoft.com/downloads/) telepítése
- WPF alkalmazások fejlesztése
  - [Tutorial: Create a new WPF app with .NET](https://learn.microsoft.com/hu-hu/dotnet/desktop/wpf/get-started/create-app-visual-studio?view=netdesktop-7.0)
- [Electron](https://electron-vite.org/guide/)/TypeScript+Svelte telepítése
- Electron app fejlesztése
