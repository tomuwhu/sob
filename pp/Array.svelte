<script lang="ts">
  var t: Array<number> = 
    Array(10)
      .fill(0)
      .map((v, i) => 2 ** i)
  var i: number
</script>
<table>
<tr>
    <th class="h">i: </th>
    <th class="h">2<sup>i</sup></th>
</tr>
{#each t as o, i}
  <tr>
    <td>{i+1}: </td> 
    <td>{o}</td>
  </tr>
{/each}
</table>
<style>
  table {
    border-spacing: 6px;
  }
  td, th {
    border: solid 1px black;
    text-align: right;
    padding: 6px;
    border-radius: 6px;
    width: 60px;
  }
</style>