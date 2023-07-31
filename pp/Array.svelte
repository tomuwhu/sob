<script lang="ts">
  var t: Array<number> = 
    Array(10)
      .fill(0)
      .map((v, i) => 2 ** i)
  var i: number
</script>
<div>
    <span class="h">i</span>: <span class="h">2<sup>i</sup></span>
</div>
{#each t as o, i}
<div>
  <span>{i+1}</span>: <span>{o}</span>
</div>
{/each}

<style>
  span {
    text-align: right;
    width: 50px;
    display: inline-block;
    background-color: rgb(211, 232, 237);
    border-radius: 6px;
    padding: 6px;
    margin: 6px;
    box-shadow: 1px 1px 3px black;
    color: rgb(33, 68, 37);
    font-size: 30px;
  }
  .h {
    background-color: rgb(191, 152, 152);
  }
</style>