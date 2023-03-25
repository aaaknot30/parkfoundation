<script lang="ts">
  import type { PageData } from "./$types";
  import { cover_image } from '../../stores';

  function loadImage(image) {
    cover_image.set(image);

  }

  export let data: PageData;
</script>

<section>
  <p><a class="navCrumb" href="/">Home</a> > Search</p>
  <div class="section-group">
   
      {#each data.content.results as { thumb, title, id, resource_url, cover_image, year }, i}
      <a on:click={() => loadImage({cover_image})} href="/master/{id}">
      <div class="card">
      {#if resource_url.includes("masters")}
      <h3>
        <a on:click={() => loadImage({cover_image})} href="/master/{id}"> {title} {year ? ' - ' + year : ''}</a></h3>
        <a on:click={() => loadImage({cover_image})} href="/master/{id}"><img class="rounded-2xl" src={thumb} alt="Cover art." /></a>
      
        {:else if resource_url.includes("releases")}
        <h3><a href="/releases/{id}"> {title} {year ? ' - ' + year : ''}</a></h3>
        <a href="/releases/{id}"><img src={thumb} alt="Cover art." /></a>
    
        {:else if resource_url.includes("artists")}
        <h3><a href="/artists/{id}"> {title} {year ? ' - ' + year : ''}</a></h3>
        <a href="/artists/{id}"><img src={thumb} alt="Cover art." /></a>
      
        {:else if resource_url.includes("labels")}
        <h3><a href="/labels/{id}"> {title} {year ? ' - ' + year : ''}</a></h3>
        <a href="/labels/{id}"><img src={thumb} alt="Cover art." /></a>
      
        {:else}
        <p><a class="mt-8" href="/"> {title}</a></p>
      {/if}
    </div>
    </a>
{/each}
    

  </div>
</section>

<style>

.card {
  background-color: white;
  padding: .5rem 1rem 1rem 1rem;
  border-radius: 1rem;
  border: 3px solid black;
  width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: black;
}

.card h3 a {
  color: black;
}

.card h3 {
  margin-bottom: .5rem;
}

.navCrumb {
  color: #333;
}

  a {
    color: white;
  }

  a:hover,
  a:focus {
    color: #222; 
  }

  img:hover {
    box-shadow: 2px 2px 8px #bbb;
  }

  .section-group {
    display: grid;
    grid-template-columns:  auto auto auto auto;
    gap: 2rem;
    padding-top: 2rem;
  }

  @media (max-width: 1100px) {

    .section-group {
      grid-template-columns:  auto;
    }

  }


</style>