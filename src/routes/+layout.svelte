<script>

  import "../css/styles.css";

  let showLoading

</script>
<main>
  <div class="container">
    <header>
      <h1>Park Foundation Music App</h1>
      <div class="searchGroup">


        <form method="POST" action="/search">
          {#if showLoading}
          <span class="box">Loading</span>
         {/if}
            <input
              name="searchWord"
              type="text"
              placeholder="search"
            />
            <button on:click={() => (showLoading = true)} type="submit">Go</button>
           
        </form>

        <a href="/">HOME</a>
      </div>
    </header>

<slot />


</div>
<footer>
  <p>By Kyle Larson</p>
</footer>
</main>

<style>
  .box {
    margin-right: .3rem;
  }

  .searchGroup a {
    font-size: 1rem;
  }



  
</style>
