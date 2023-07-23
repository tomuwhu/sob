<script>
  import Amoba from './Amoba.svelte'
  import Valasz from './Valasz.svelte'
  var ap = 1, h1 = ["Amőba", "Válasz mindenre", "Mindkettő"]
  $: hap = h1[ap]
</script>

<svelte:head>
  <title>{hap}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="menu">
    {#each h1 as elem, i}
      {#if ap == i}
        <button class="a">{hap}</button>
      {:else}
        <button 
          on:click={() => ap = i }
          class="p"
        >{h1[i]}</button>
      {/if}
    {/each}
  </div>
  <div class:hide={ap == 0}><Valasz /><br><br></div>
  <hr  class:hide={ap != 2}>
  <div class:hide={ap == 1}>
    <Amoba ad={ap == 0 ? "Amőba egyedül" : "Amőba"} />
  </div>
</section>

<style>
  * {
    user-select: none;
    margin: 0px;
  }
  button {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 300;
    font-size: 15px;
    padding: 6px;
    color: gray;
  }
  button.a {
    color: rgb(121, 29, 29);
    background-color: rgb(125, 155, 125);
  }
  button.p:hover {
    cursor: pointer;
    color: rgb(166, 95, 95);
  }
  .hide {
    display: none;
  }
  .menu {
    padding: 0px;
    background-color: rgb(181, 223, 209);
    border-bottom: solid 1px black;
  }
</style>