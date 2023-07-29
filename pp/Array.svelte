<script lang="ts">
  var t: Array<number> = 
    Array(10)
      .fill(0)
      .map((v, i) => i ** 2)
  var i: number
</script>

{#each t as o, i}
<div><span>{i+1}</span>: <span>{o}</span></div>
{/each}

<style>
  div {
    text-align: right;
  }
  span {
    width: 30px;
    display: inline-block;
    background-color: aquamarine;
    padding: 6px;
    margin: 6px;
    box-shadow: 1px 1px 3px black;
  }
</style>