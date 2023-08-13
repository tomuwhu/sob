<script>
  var x = 40, y = 100
</script>

<body>
  <div>X:</div><div><input 
    type="range" 
    bind:value={x}
  ></div><div>{x}</div>
  <br>
  <div>Y:</div><div><input 
    type="range" 
    bind:value={y}
  ></div><div>{y}</div><hr>
  <div    
    id="x2" 
    style={`top: ${5*y+100}px; left: ${10*x+20}px;`}
  ></div>
</body>

<style>
  div {
    display: inline-block;
    width: 190px;
    text-align: center;
  }
  #x2 {
    background-color: aqua;
    height: 40px;
    width: 40px;
    position: fixed;
    border-radius: 20px;
    box-shadow: 1px 1px 3px black;
  }
</style>