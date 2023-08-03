<script>
  // @ts-nocheck
  let objects = Array(7).fill(null).map((v,i) => ({ el: null, id: i }))
  
  let dropped = [];
  
  function handleDragDrop(e) {
    e.preventDefault();
    var element_id = e
        .dataTransfer
        .getData("id");
    dropped = dropped.concat(element_id);
    dropped_in = true;
  }
  
  function handleDragStart(e) {
    e.dataTransfer
      .setData("id", e.target.getAttribute('id'));
  }
  
  function handleDragEnd(e) {
    dropped_in = false;
  }
</script>

<h1>Drop Zone</h1>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
  on:drop={handleDragDrop} 
  id="drop_zone" 
  ondragover="return false">
  {#each objects.filter(v => dropped.includes(`${v.id}`)) as {id}, i}
    <div class="objects" id={id} style="cursor: auto">
      {id}. objektum
    </div>
  {/each}
</div>
<br><br><br>
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#each objects.filter(v => !dropped.includes(`${v.id}`)) as { id }, i}
  <div 
    id="{id}"
    class="objects" 
    draggable=true 
    bind:this={objects[i].el}
    on:dragstart={handleDragStart}
    on:dragend={handleDragEnd}>
  {id}. objektum
  </div>
{/each}

<style>
  
  :global(html), :global(body) {
    margin: 0; 
    height: 100%; 
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
  }

  #drop_zone {
    background-color: #e1e7ac;
    border: #999 1px solid ;
    box-shadow: 1px 1px 4px inset black;
    width: 280px;
    height: 230px;
    padding: 10px;
    font-size: 19px;
    border-radius: 50px;
  }
  
  .objects {
    display: inline-block;
    background-color: #FFF3CC;
    border: #DFBC6A 1px solid;
    width: 90px;
    height: 20px;
    margin: 7px;
    padding: 7px;
    font-size: 16px;
    text-align: center;
    box-shadow: 2px 2px 2px #999;
    cursor: move;
    border-radius: 15px;
  }
  div#drop_zone {
    margin: auto;
  }
</style>