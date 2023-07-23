<script>
  import axios from "axios"
  var adat = "?"
</script>
<h1>Frontend példa</h1>
A válasz mindenre:
<div>{adat}</div>
<button on:click={() => axios
    .get("data.txt")
    .then(resp => adat = resp.data.Answer)
  } 
  class:hide={typeof adat == "number"}
  >Lekérdez</button> 
<style>
  .hide {
    display: none !important;
  }
  button {
    cursor: pointer;
    border: none;
    color: blue;
    margin: 0px;
    padding: 0px;
    text-shadow: 1px 1px 3px gray;
  }
  button:hover {
    color: rgb(138, 70, 47);
  }
  div {
    display: inline-block;
    color: rgb(124, 15, 15);
    text-shadow: 1px 1px 3px gray;
  }
</style>