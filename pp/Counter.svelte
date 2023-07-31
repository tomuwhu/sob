<script lang="ts">
  var a: number = 0;
  $: title = `A számláló jelenlegi értéke: ${a}`;
</script>

<button on:click={() => a++} {title}>{a}</button>

<style>
  button {
    font-size: 20px;
    cursor: pointer;
  }
</style>
