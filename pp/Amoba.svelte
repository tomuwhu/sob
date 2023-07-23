<script>
  //@ts-nocheck
  var next  = "O"
  var table = Array(20)
              .fill(0)
              .map(() => Array(20).fill(""))
</script>

<div>
  <table>
    {#each table as row, y}
      <tr>
        {#each row as c, x}
          <td on:click={(e) => {
              if (table[y][x] == "")
                table[y][x] = next == "O" ? 
                next = "X" : next = "O"
              }} class={c}>{c}</td
          >
        {/each}
      </tr>
    {/each}
  </table>
</div>

<style>
  table {
    border: solid 1px gray;
    border-radius: 6px;
    padding: 10px;
    background-color:rgb(233, 217, 175);
    border-spacing: 4px;
  }
  td {
    width: 20px; height: 20px;
    user-select: none; cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 3px inset rgb(137, 137, 125);
    background-color: blanchedalmond;
    color: rgb(203, 207, 168);
  }
  .O, .X {
    box-shadow: 1px 1px 3px rgb(111, 93, 93);
    cursor: default;
  }
  .O { background-color: rgb(32, 92, 72);  }
  .X { background-color: rgb(125, 68, 49); }
  table { margin: auto; }
</style>

