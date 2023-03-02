<script lang="ts">
  import type { PageData } from './$types';
  let showLoading


  export let data: PageData;

</script>

<section>
      
  <div class="section-group">
    <div class="intro">
      <p><a href="/">Home</a> > Artists</p>
      <h2>{data.content.name}</h2>
      <p>{@html data.content.profile}</p>
    </div>
    <div class="section-1">
      
      {#if data.content.name} 
        <h3>All Releases</h3>
        <p>
          <a on:click={()=> showLoading = true} href="/artists/{data.content.id}/releases">{data.content.name}</a> 
        {#if showLoading}
        <span class="box">Loading</span>
        {/if}
        </p>
      {/if}



      {#if data.content.members}
      <h3>Members</h3>
        {#if data.content.members}
          {#each data.content.members as member}
          <p><a href="/artists/{member.id}">{member.name}</a> </p>
          {/each}
        {/if}
       {/if}

       {#if data.content.tracklist} 
        <h3>Tracklist</h3>
        {#each data.content.tracklist as track}
        <p>{track.title} </p>
        {/each}
     
       {/if}


      {#if data.content.videos} 
      <h3>Videos</h3>
      {#each data.content.videos as video}
        <p>{video.title} </p>
        <p><a target="_blank" href={video.uri}>{video.uri}</a></p>
      {/each}
    {/if}
      

    </div>


    <div class="section-2">

      {#if data.content.urls}
      {#if data.content.urls}
        <h3>Links</h3>
        {#each data.content.urls as url}
        <p><a target="_blank" href={url} rel="noreferrer" >{url}</a></p>
        {/each}
      {/if}
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
column-gap: 2rem;
padding-top: 2rem;
padding-right: 3rem;
}

.intro {
grid-column: 1 / 4;
margin-bottom: -15px;
}

.section-1 {
grid-column: 1 / 2;
margin-left: 2rem;
width: 15vw;
}

.section-2 {
margin-top: -1rem;
width: 100%;
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
  
