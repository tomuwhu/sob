const fs = require('fs')
class MorezeMap extends Map {
  Morze2Szöveg = s => s
    .split("       ").map(v => v.split("   ")
    .map(v => this.get(v)).join("")).join(" ")
  Szöveg2Morze = s => s.split("\n")
    .map(v => v.split(" ")
      .map(v => v.split("")
        .map(v => this.get(v)).join(" ")
      ).join("   ")
    ).join("       ")
} 
decode = new MorezeMap()
encode = new MorezeMap()
fs.readFileSync('morzeabc.txt', 'utf8')
  .split("\n").slice(1).map(v => v.split("\t"))
  .map(v => (decode.set(v[1], v[0]), v))
  .forEach(v => encode.set(v[0], v[1]))
console.log(
  fs.readFileSync('morze.txt', 'utf8').split("\n")
    .map(v => v.split(";").map(v => decode.Morze2Szöveg(v)))
)
console.log(encode.Szöveg2Morze("GÉZA KÉK AZ ÉG"))