<script>
var r = 3.1
var d = [
  { x: 10,  y: 10,  b: "white", nl: [1, 9] }, 
  { x: 60,  y: 10,  b: "white", nl: [0, 2, 4] },
  { x: 110, y: 10,  b: "white", nl: [1, 14] },
  { x: 25,  y: 25,  b: "white", nl: [4, 10] },
  { x: 60,  y: 25,  b: "white", nl: [1, 3, 5, 7] },
  { x: 95,  y: 25,  b: "white", nl: [4, 13] },
  { x: 40,  y: 40,  b: "white", nl: [7, 11] },
  { x: 60,  y: 40,  b: "white", nl: [4,6,8] },
  { x: 80,  y: 40,  b: "white", nl: [7, 12] },
  { x: 10,  y: 60,  b: "white", nl: [0, 10, 21] },
  { x: 25,  y: 60,  b: "white", nl: [3, 9, 11, 18] },
  { x: 40,  y: 60,  b: "white", nl: [6, 10, 15] },
  { x: 80,  y: 60,  b: "white", nl: [8, 13, 17] },
  { x: 95,  y: 60,  b: "white", nl: [5, 12, 14, 20] },
  { x: 110, y: 60,  b: "white", nl: [2, 13, 23] },
  { x: 40,  y: 80,  b: "white", nl: [11, 16] },
  { x: 60,  y: 80,  b: "white", nl: [15, 17, 19] },
  { x: 80,  y: 80,  b: "white", nl: [12, 16] },
  { x: 25,  y: 95,  b: "white", nl: [10, 19] },
  { x: 60,  y: 95,  b: "white", nl: [16, 18, 20, 22] },
  { x: 95,  y: 95,  b: "white", nl: [13, 19] },
  { x: 10,  y: 110, b: "white", nl: [9, 22] },
  { x: 60,  y: 110, b: "white", nl: [19, 21, 23] },
  { x: 110, y: 110, b: "white", nl: [14, 22] }
]
let objects = Array(18).fill(null).map((_, i) => ({ el: null, color: i < 9 ? "red" : "blue" }))
let circles = Array(24).fill(null).map(() => null)
function handleDragDrop(e) {
  e.preventDefault();
  var cid = e.target.id.slice(1)
  var bid = e
    .dataTransfer
    .getData("id")
  d[cid].b = objects[bid].color
  objects[bid].el.style.display = "none"
  circles[cid].setAttribute("ondragover", "return true")
  //console.log(`${bid} => ${cid}`)
}

function handleDragStart(e) {
  var id = e.target.getAttribute('id').slice(1)
  e .dataTransfer
    .setData("id", id)
  e.target.style.backgroundColor = objects[id].color == "red" ? "#f88": "#88f"
}

function handleDragEnd(e) {
  e.target.style.backgroundColor = objects[e.target.id.slice(1)].color
}
</script>

<h1>Malom</h1>
<svg id="mt" viewBox="0 0 120 120">
  {#each d as p}
    {#each p.nl as l}
      <line x1={d[l].x} y1={d[l].y}
            x2={p.x} y2={p.y}
            stroke="#123432" stroke-width="0.7"/>
    {/each}
  {/each}
  {#each d as p, i}
    <circle
      bind:this={circles[i]}
      on:drop={handleDragDrop} 
      ondragover="return false"
      id="c{i}" cx={p.x} cy={p.y} r={r} fill={p.b}
      class={p.b}
      stroke="#123432" stroke-width="0.7" />
  {/each}
</svg>
<br>
{#each objects as { color }, i}
  <div
    id="b{i}"
    class="objects {color}" 
    draggable=true
    bind:this={objects[i].el}
    on:dragstart={handleDragStart}
    on:dragend={handleDragEnd}></div>
{/each}

<style>
#mt {
    margin: auto;
    width: 600px;
    border: solid 1px black;
    border-radius: 6px;
    box-shadow: 1px 1px 4px inset black;
    background-color: LightCyan;
}
.objects {
  cursor: move;
  display: inline-block;
  text-align: center;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: blue;
  color: white;
  margin: 2px;
}
.red {
  background-color: red;
}
circle.red {
  cursor: not-allowed;
}
</style>