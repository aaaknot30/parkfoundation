<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

</script>


  <section>
      
    <div class="section-group">

      <div class="intro">
        <p><a href="/">Home</a> > Artists > Releases</p>
        <h2>{data.content.releases[0].artist}</h2>
      </div>

      <div class="section-1">
        <h3>Artist Bio</h3>
        <p><a href="/artists/{data.id}">Artist Details</a> </p>
  
        <h3>All Releases</h3>
        {#each data.content.releases as release}
          {#if release.resource_url.includes('master')}
          <p><a href="/master/{release.id}">{release.title} - {release.year}</a> </p>
          {:else}
          <p><a href="/releases/{release.id}">{release.title} - {release.year}</a> </p>
          {/if}
        {/each}

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
  grid-column: 1 / 4;
  margin-left: 2rem;
  width: 100%;
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