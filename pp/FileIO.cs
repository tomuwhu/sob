// Szövegfájl beolvasása
var l = File.ReadAllLines("file.txt").Select(int.Parse).ToArray();

// Elemek száma, összege, szorzata
var n = l.Length;
var sum = l.Sum();
var prod = l.Aggregate(1, (prod, val) => prod * val);
Console.WriteLine($"Darabszám: {n} | Összeg: {sum} | Szorzat: {prod}");

// Feltételes végrehajtás
var prod2 = l.Aggregate(1, (p, v) => v % 2 == 0 ? p * v : p);
// Szűrés
var csp = l.Where(v => v % 2 == 0);
Console.WriteLine($"A páros számok ({String.Join(", ", csp)}) szorzata: {prod2}");

Console.WriteLine($"A számok növekvő sorrendben: {String.Join("; ", l.Order())}");

// Számtani közép, elem elérése (átlag)
Console.WriteLine($"Átlag: {l.Average().ToString("N2")}; Első elem: {l[0]}; Utolsó elem: {l[n - 1]}");

// Minimum, maximum, toString()
Console.WriteLine($"Min: {l.Min()} | Max: {l.Max()} | Összes elem: {String.Join(", ", l)}");

foreach (var num in new ArraySegment<int>(l, 0, 2))
    Console.Write($"{num}: {Math.Pow(num, 2)} | ");

Console.WriteLine();

var lx = "45 34 54 23 23 54 32 43".Split(" ").Select(int.Parse).ToArray();
Console.WriteLine($"{lx[0]}, {lx.Sum()}");