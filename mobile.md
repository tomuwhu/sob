# Asztali- és Mobil alkalmazásfejlesztés tematika

***

[Központi tematika](pdf/Asztali%20és%20mobil%20alkalmazások%20fejlesztése%20és%20tesztelése.pdf)

***

## [C\#](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference)

- VSCode: C# for Visual Studio Code Plugin
- C# programozási nyelv
  - [Az első C#-kód megírása](https://learn.microsoft.com/hu-hu/training/modules/csharp-write-first/)
  - [Debugolás, hibakeresés](https://learn.microsoft.com/hu-hu/training/modules/dotnet-debug/3-analyze-your-program-state)
  - [C# referencia](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)
    - Típusok
    - Kulcsszavak
    - Utasítások, @, $
    - Attribútumok
- Console alkalmazások fejlesztése
  - Input feldolgozása
  - Parancssori paraméterek feldolgozása
  - Szövegfájl feldolgozása
  - [HackerRank](https://www.hackerrank.com/domains/algorithms) feladatok megoldása C# nyelven
- Visual Studio telepítése
- WPF alkalmazások fejlesztése
  - [Tutorial: Create a new WPF app with .NET](https://learn.microsoft.com/hu-hu/dotnet/desktop/wpf/get-started/create-app-visual-studio?view=netdesktop-7.0)

## Procedurális és objektumorientált szoftverfejlesztés

- A procedurális és az objektumorientált szemlélet összevetése
- Az osztály és az objektum fogalma, a köztük lévő különbségek
- Példányosítás
- Property-k
- Java/C# szintaxisban kifejezve az objektumorientáltság

## Változók

- Elméleti bevezetés
- Primitívek: boolean, int, double és String
- Elnevezési konvenciók
- Numerikus típusok
- Integer típusú primitívek és köztük lévő különbségek: byte, short, int, long
- Lebegőpontos típusok: float, double
- Aritmetikai, és matematikai műveletek
- Zárójelezés
- Szöveges típusok
- Char típus
- Stringkezelési alapok
- String konkatenáció
- Whitespace és escape karakterek
- Konzolra írás
- Típuskonverzió
- Automatic promotion
- Type casting
- Számérték-konverzió
- Stringek parse-olása
- Inputról olvasás
- User input beolvasása konzolról
- User input beolvasása grafikus felületről
- Fájlbeolvasási alapok

## Metódusok

- Függvénydefiníciók
- Kód strukturálása osztályszinten
- Függvények haszna és célja
- Osztályváltozók elérése
- Scope
- Argumentumok, visszatérési érték

## Beépített segédosztályok

- String osztály
- Nyelvi beépített osztályok használatának alapja, dokumentációértelmezés
- String osztály legfontosabb függvényei és használatuk: indexOf, charAt, substring()
- A Stringkonkatenálás és az immutable fogalma
- Stringek összehasonlítása
- A Random osztály
- Véletlenszám-generálás felhasználása a programozásban
- Véletlenszám generálása a Random osztály segítségével, next...() függvények
- A Math osztály
- Math osztály felhasználásának lehetőségei
- Statikus metódusok szerepe
- Legfontosabb függvények: max(), min(), sqrt()

## Vezérlési szerkezetek, ciklusok

- Logikai (boolean) kifejezések
  - Boolean változók értelmezése, inicializálása, deklarálása
  - Aritmetikai alapfogalmak, boolean változók összehasonlítása, operátorok
  - Két- és többirányú (if-then-else) elágazás
  - Döntési változók, vezérlési struktúrák elméleti bevezető
  - Feltételeken alapuló futtatás
  - If-then-else elágazások

- Összetett kifejezések, magas szintű operátorok:
  - Hármas operátor (? : )
  - Érték szerinti (Switch) elágazás
  - Switchelmélet
  - Szintaxis
  - Összehasonlítás If-fel

- Ciklusok:
  - “for” ciklus
  - Ciklusok jelentősége elméleti bevezető
  - A for ciklust ismertető elmélet
  - For ciklus szintaxis
  - Ciklus scope  
  - Ciklusok debugolása
  - Végtelen ciklus
  - “do-while” ciklusok
  - Elöltesztelő ciklus
  - Hátultesztelő ciklus
  - Ciklustípusok összehasonlítása, mikor melyiket érdemes használni

- Ciklusvezérlés:
  - Ciklus futtatásának leállítása, Break
  - Ciklusátugrás, Continue

## Tömbök és listák

- Egydimenziós tömb
- Tömbök bevezetése
- Tömb definiálása, inicalizálása
- Tömb elemének módosítása
- Tömb bejárása ciklusok segítségével
- Hibakezelés, túlcímzés
- Többdimenziós tömb
- Mátrixok kezelése
- Listák bevezetése
- ArrayList / List definiálása, inicializálása
- ArrayList / List elemének módosítása
- ArrayList / List bejárása iterátor- és ciklusok segítségével
- Autoboxing

## Kivételkezelés, hibakeresés

- Kivételkezelés:  
  - Kivételkezelés elméleti bevezető
  - Try-catch szintaxis
  - Beépített kivételtípusok
- Hibakeresés (opcionális):
  - Programkód tesztelése és hibakeresés
  - A hibák 3 osztályának azonosítása (fordítási idejű, logikai, futási idejű)
  - Hibakezelési technikák: print, IDE, kifejezésszerkesztő, előnyök-hátrányok
  - Leggyakoribb hibák

## Objektumorientált fejlesztés

- Osztályok
  - OOP-projekt létrehozása, osztályok létrehozása IDE segítségével
  - Osztályszintű scope
  - Osztályváltozók és -mezők publikussága
  - Érték szerinti átadás függvényhívások esetén
  - Visszatérési érték
  - Main függvény

- Példányosítás
  - Esettanulmány bevezetése
  - Esettanulmány osztály létrehozása, osztályok példányosításának szintaxisa
  - New kulcsszó
  - Objektumok, objektumok összehasonlítása
  - Objektumreferenciák
  - Memóriakezelési alapok

- Konstruktorok
  - Konstruktorok működése, szintaxis
  - Default érték, nullérték
  - Osztályváltozók inicializálásának fontossága
  - Osztályváltozók közvetlen módosítása
  - Osztályváltozók módosítása konstruktor segítségével, konstruktorszabályok
  - Default konstruktor
  - This kulcssszó

## Grafikus programozás

- Bevezetés:
  - GUI programozási alapok
  - JavaFX / WPF program szerkezete, létrehozása
  - JavaFX / WPF komponensek
- Színek és formák:
  - JavaFX / WPF színkezelés
  - JavaFX / WPF shape-ek, property-k, és működési minták
  - JavaFX / WPF egyszerűbb sokszögek kirajzolása
  - JavaFX / WPF Image és ImageView
- Eseményvezérelt szoftverfejlesztés:
  - Eseményvezérelt programozás, elmélet
  - JavaFX / WPF gomb, beviteli mező
  - JavaFX / WPF eseményfigyelés, aszinkron kód, szintaxis

## Java

- JavaFX, Eclipse telepítése
- Szintaxis
- Console alkalmazások fejlesztése
  - Input feldolgozása
  - Parancssori paraméterek feldolgozása
  - Szövegfájl feldolgozása
- [CSES Problem SET](https://cses.fi/problemset/) megoldása Java nyelven
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
- JavaFX alkalmazások fejlesztése
