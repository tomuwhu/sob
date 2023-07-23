<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  var n = "O"
  var t = Array(20)
            .fill(0)
            .map(() => 
              Array(20).fill("")
            )
</script>

<div>
  <table>
    {#each t as row, y}
      <tr>
        {#each row as c, x}
          <td 
            on:click = {() => {
              n = n != "O" ? "O" : "X"
              if (!t[y][x]) t[y][x] = n
            }}
            class = { c }
          >{ c }</td>
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
    margin: auto;
  }
  td {
    width: 20px; height: 20px;
    cursor: pointer;
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
</style>