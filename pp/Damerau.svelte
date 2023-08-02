<script lang="ts">
  var i1: string = "";
  var i2: string = "";
  import levenshtein from "damerau-levenshtein";
  $: sim = levenshtein(i1, i2).similarity.toFixed(2);
</script>

<h1>Két szöveg hasonlósága</h1>
<input type="text" bind:value={i1} />
<br />
<input type="text" bind:value={i2} />
<br />
Hasonlóság: {sim}
