<script>
  var x = 0, vx = 0
  setInterval(() => (x += x >= -20 ? vx : 1), 10)
</script>

<h1>Egyenes vonalú egyenletes mozgás - fizikai szimuláció</h1>
<button style="left: {x}px;" on:click={() => (vx = vx == 0 ? 0.3 : 0)} />
<input type="range" bind:value={vx} min={-5} max={5} step={0.1} />
<br />Sebesség: {Math.trunc(vx * 100)} pixel/s

<style>
  button {
    position: fixed;
    top: 126px;
    width: 20px;
    height: 20px;
    background-color: red;
    cursor: pointer;
  }
  h1 {
    font-size: 18px;
  }
</style>
