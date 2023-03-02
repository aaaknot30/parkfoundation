<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

</script>
  
<section>
      
  <div class="section-group">
    <div class="intro">
        <p><a href="/">Home</a> > Labels</p>
        <h2>{data.content.name}</h2>
        {#if data.content.profile}
        <h3>Profile</h3>
        <p>{data.content.profile} </p>
        {/if}
    </div>
    
      
      <div class="section-1">
        
        {#if data.content.contact_info}
        <h3>Contact</h3>
        <p>{data.content.contact_info}  </p>
        {/if}

        {#if data.content.urls}
        <h3>Links</h3>
          {#each data.content.urls as url}
          <p><a target="_blank" href={url}>{url}</a></p>
          {/each}
        {/if}

      
    </div>


    <div class="section-2">

 

      {#if data.content.parent_label}
      <h3>Parent Label</h3>
      <p><a href="/labels/{data.content.parent_label.id}">{data.content.parent_label.name}</a> </p>
    {/if}


    {#if data.content.sublabels}
    <h3>Sublabels</h3>
      {#each data.content.sublabels as sublabel}
      <p ><a href="/labels/{sublabel.id}">{sublabel.name}</a> </p>
      {/each}
    {/if}

    </div>


  </div>
</section>



<style>

/* * {
border: 1px solid blue;
} */
section {
margin: -1rem 0 0 2rem;
}

.section-group {
display: grid;
grid-template-columns:  auto auto auto;
justify-content: start;
column-gap: 4rem;
padding-top: 2rem;
padding-right: 3rem;
}

.intro {
grid-column: 1 / 4;
margin-bottom: -15px;
}

.section-1 {
margin-left: 2rem;
width: 100%;
}

.section-2 {
margin-top: -1rem;
grid-column: 2 / 3;
}


img {
width: 300px;
}

h2 {
margin: 0 0 0 0;
}

h3 {
margin-top: 1rem;
}


</style>
