<script>
  import Amoba from './Amoba.svelte'
  import Valasz from './Valasz.svelte'
  var ap = 0, h1 = ["Amőba", "Válasz"]
</script>

<svelte:head>
  <title>SV01</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  {#if ap > 0}
    <button on:click={() => ap--}>{h1[ap - 1]}</button>
  {/if}
  <h1>{h1[ap]}</h1>
  {#if ap < h1.length - 1}
    <button on:click={() => ap++ }>{h1[ap + 1]}</button>
  {/if}
  <hr>
  <div class:hide={ap != 0}><Amoba /></div>
  <div class:hide={ap != 1}><Valasz /></div>
</section>

<style>
  * {
    user-select: none;
  }
  h1, button {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }
  h1 {
    display: inline-block;
  }
  button {
    cursor: pointer;
    color: gray;
    border: none;
  }
  button:hover {
    color: red;
  }
  .hide {
    display: none;
  }
</style>