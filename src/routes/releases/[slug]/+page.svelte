<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

</script>

  <section>
      
    <div class="section-group">
      <div class="intro">
        <p><a href="/">Home</a> > Releases</p>
        <h2>{data.content.title}</h2>
        {#if data.content.profile}
          <p>{data.content.profile}</p>
        {/if}
        
        <h3>Overview</h3>
        <p>{data.content.title} --- {data.content.released} </p>
        <p>{data.content.notes ? data.content.notes : ''} </p>
      </div>
      
      <div class="section-1">
        
        <h3>Artist Bio</h3>
        <p><a href="/artists/{data.content.artists[0].id}">Artist Details</a> </p>

  
  
        {#if data.content.videos} 
        <h3>Videos</h3>
        {#each data.content.videos as video}
          <p>{video.title} </p>
          <p><a target="_blank" href={video.uri}>{video.uri}</a></p>
        {/each}
      {/if}
        
  
      </div>
  
  
      <div class="section-2">
        {#if data.content.tracklist} 
        <h3>Tracklist</h3>
        {#each data.content.tracklist as track}
        <p>{track.title} </p>
        {/each}
     
       {/if}

       

        <h3>Labels</h3>

        {#each data.content.labels as label}
        <p><a href="/labels/{label.id}">{label.name}</a> </p>
        {/each}
  
     
  
      </div>

  
    </div>

    <p><a rel="noreferrer" class="youtube_btn" target="_blank" href="https://www.youtube.com/results?search_query={data.content.artists[0].name} - {data.content.title}">See video on youtube</a> </p>
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
  column-gap: 3rem;
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
