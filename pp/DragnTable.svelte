<script>
  var c = {x: 0, id:""}
</script>
<h1>Táblázat + Drag & Drop</h1>
<table>
{#each Array(10) as _, y}<tr>{#each Array(10) as _,x}
  <td draggable="true"
    on:dragstart= {e => c = {x: Number(e.target.innerHTML), id: e.target.id }}
    on:dragover = {e => e.preventDefault()} on:drop = {e => {
      e.target.innerHTML=Number(e.target.innerHTML) + c.x
      document.getElementById(c.id).classList.add("h")
    }} id = "x{1 + 10 * y + x}" >{1 + 10 * y + x}</td>
{/each}</tr>{/each}
</table><p class="h" />
<style>
  h1 { text-align: center; color:rgb(40, 79, 66); }
  td {
    width: 36px; height: 26px; text-align: center;
    border: solid 1px black; border-radius: 6px;
    background-color: rgb(182, 224, 228);
  }
  .h { visibility: hidden; }
  table { margin: auto; }
</style>