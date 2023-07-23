<script>
  //@ts-nocheck
  var next = "O"
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
            }}
            class={c}>{c}</td
          >
        {/each}
      </tr>
    {/each}
  </table>
</div>

<style>
  td {
    width: 20px;
    height: 20px;
    border: solid 1px rgb(147, 121, 50);
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 3px inset gray;
    background-color: blanchedalmond;
  }
  .O { background-color: aquamarine; }
  .X { background-color: rgb(235, 103, 59); }
  table { margin: auto; }
</style>

