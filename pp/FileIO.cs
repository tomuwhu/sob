// Szövegfájl beolvasása
var l = File.ReadAllLines("file.txt").Select(int.Parse);

// Elemek száma, összege, szorzata
var n = l.Count();
var sum = l.Sum();
var prod = l.Aggregate(1, (prod, val) => prod * val);
Console.WriteLine($"Darabszám: {n} | Összeg: {sum} | Szorzat: {prod}");

// Feltételes végrehajtás
var prod2 = l.Aggregate(1, (p, v) => v % 2 == 0 ? p * v : p);
// Szűrés
var csp = l.Where(v => v % 2 == 0);
Console.WriteLine($"A páros számok ({String.Join(", ", csp)}) szorzata: {prod2}");


Console.WriteLine($"A számok növekvő sorrendben: {String.Join("; ", l.Order())}");

// Számtani közép (átlag)
var átlag = l.Average();
var első = l.ElementAt(0);
var utcsó = l.ElementAt(n - 1);
Console.WriteLine($"Átlag: {l.Average().ToString("N2")}; Első elem: {első}; Utolsó elem: {utcsó}");

var s = String.Join(", ", l);
Console.WriteLine($"Min: {l.Min()} | Max: {l.Max()} | Összes elem: {s}");

var al = l.ToArray();
Console.WriteLine($"A tömb első eleme: {al[0]}");

var l2 = Enumerable.Range(1, 10);
foreach (var num in l2)
{
    Console.Write($"{num}: {Math.Pow(num, 2)} | ");
}
Console.WriteLine();