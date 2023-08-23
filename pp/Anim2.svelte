<script>
  var x = 0, vx = 0
  setInterval(() => (x += x >= -20 ? vx : 1), 10)
</script>

<h1>Animáció példa</h1>
<button style="left: {x}px;" on:click={() => (vx = vx == 0 ? 0.3 : 0)} />
<input type="range" bind:value={vx} min={-5} max={5} step={0.1} />

<style>
  button {
    position: fixed; top: 56px; width: 20px; height: 20px;
    background-color: red; cursor: pointer;
  }
</style>