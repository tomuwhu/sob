<script>
  export let ad = "Malom"
  var r = 3.1
  var d = [
  [10,10,[1, 9]],[60,10,[0,2,4]],[110,10,[1,14]],[25,25,[4,10]],
  [60,25,[1,3,5,7]],[95,25,[4,13]],[40,40,[7,11]],[60,40,[4,6,8]],
  [80,40,[7,12]],[10,60,[0,10,21]],[25,60,[3,9,11,18]],[40,60,[6,10,15]],
  [80,60,[8,13,17]],[95,60,[5,12,14,20]],[110,60,[2,13,23]],[40,80,[11,16]],
  [60,80,[15,17,19]],[80,80,[12,16]],[25,95,[10,19]],[60,95,[16,18,20,22]],
  [95,95,[13,19]],[10,110,[9,22]],[60,110,[19,21,23]],[110,110,[14,22]]
].map(v => ({x: v[0], y:v[1], b: "white", nl: v[2]}))
  Array(9).fill(0).forEach((v, i) => {
    d.push({x: i*8+28, y: 120, b: "white", nl: []})
    d.push({x: i*8+28, y: 130, b: "white", nl: []})
  })
  let objects = Array(18).fill(null).map((_, i) => (
    { el: null, color: i < 9 ? "red" : "blue", cont: null, contid: null }))
  let circles = Array(24).fill(null).map(() => null), svg
  let movefrom = {id: null, obj: null}
  function SVGToScreen(svgX, svgY) {
    var p = svg.createSVGPoint()
    p.x = svgX, p.y = svgY
    return p.matrixTransform(svg.getScreenCTM());
  }
  function handleDragDrop(e) {
    e.preventDefault();
    var cid = e.target.id.slice(1)
    var bid = e
      .dataTransfer
      .getData("id")
    objects[bid].el.style.position = "absolute"
    var tl = SVGToScreen(d[cid].x, d[cid].y)
    objects[bid].el.style.top = `${tl.y-15}px`
    objects[bid].el.style.left = `${tl.x-15}px`
    objects[bid].cont=circles[cid]
    objects[bid].contid=cid
    circles[cid].setAttribute("ondragover", "return true")
    if (movefrom.id) movefrom
                      .obj
                      .setAttribute("ondragover", "return false")
  }
  function handleDragStart(e) {
    var id = e.target.getAttribute('id').slice(1)
    if (movefrom.obj = objects[id].cont) movefrom.id = id
    else movefrom.id = null
    e .dataTransfer
      .setData("id", id)
    e.target.style.backgroundColor = objects[id]
                                      .color == "red" ? "#f88": "#88f"
  }
  function handleDragEnd(e) {
    e.target.style.backgroundColor = objects[e.target.id.slice(1)].color
  }
</script>

<h1>{ad}</h1>
<svg id="mt" viewBox="0 0 120 140" bind:this={svg}>
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
.red { background-color: red; }
circle.red { cursor: not-allowed; }
</style>