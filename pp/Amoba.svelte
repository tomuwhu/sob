<script>
  //@ts-nocheck
    var next = "O"
    var table = Array(20).fill(0).map(() => Array(20).fill(""))
    function f(event) {
      var x, y
      [,x,y] = event.target.id.split("o")
      table[y][x] = next == "O" ? next = "X" : next = "O"
    }
</script>
  
<div>
  <table>
    {#each table as row, y}
    <tr>
      {#each row as cell, x}
      <td on:click={f} id=o{x}o{y}o class={cell}>{cell}</td>
      {/each}
    </tr>
    {/each}
  </table>
</div>

<style>
  td {
    width: 20px;
    height: 20px;
    border: solid 1px black;
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 3px inset gray;
    background-color: blanchedalmond;
  }
  .O {
    background-color: aquamarine;
  }
  .X {
    background-color: rgb(235, 103, 59);
  }
  table {
    margin: auto;
  }
</style>