<script lang="ts">
  import type { PageData } from "./$types";

  const artistsArr = [
    "Stevie Wonder",
    "The Rolling Stones",
    "James Brown",
    "Led Zeppelin",
    "Bob Dylan",
    "Jimi Hendrix",
    "Prince",
    "Bob Marley",
    "Elvis Presley",
    "David Bowie",
    "Marvin Gaye",
    "Madonna",
    "Pink Floyd",
    "Queen",
    "Tupac Shakur",
    "The Who",
    "The Clash",
    "U2",
    "The Doors",
  ];

  const albumArr = [
    "White Album",
    "Revolver",
    "Sgt. Pepper's Lonely Hearts",
    "Abbey Road",
    "Pet Sounds",
    "Rumours",
    "Exile on Main St",
    "Dark Side of the Moon",
    "Thriller",
    "The Joshua Tree",
    "London Calling",
    "Purple Rain",
    "Appetite for Destruction",
    "Nevermind",
    "Achtung Baby",
    "OK Computer",
    "Jagged Little Pill",
    "Back in Black",
  ];

  const labelArr = [
    "Sony Music Entertainment",
    "Columbia",
    "Arista",
    "Warner Music Group",
    "Elektra Records",
    "Atlantic Records",
    "Universal Music Group",
    "Def Jam Recordings",
    "Interscope Geffen AM",
    "Island Records",
    "Virgin Records",
    "RCA Records",
  ];

  const artists = artistsArr.map((item) => {
    const tUrl = item.split(" ").join("+");
    return { artistName: item, artistUrl: tUrl };
  });

  const albums = albumArr.map((item) => {
    const tUrl = item.split(" ").join("+");
    return { albumName: item, albumtUrl: tUrl };
  });

  const labels = labelArr.map((item) => {
    const tUrl = item.split(" ").join("+");
    return { labelName: item, labelUrl: tUrl };
  });

  let showLoading;

  export let data: PageData;
</script>

    <section>
      
      <div class="section-group">
        
        <div class="intro">
          <h2>Find it.  Match it.</h2>
          <p>
            This app allows you to search Artists, Releases, and Label information
            from the Discogs API.
          </p>
          <ul>
            <li>
              Search for Artists and match their Album releases.  
            </li>
            <li>
              Search for Artists and match their Details.  
            </li>
            <li>
              Search for Artists and match their Labels.  
            </li>
        </ul>
        </div>
        <div class="section-1">
          <h3>Artist searches</h3>
          <ul>
            {#each artists as artist}
              <li><a
                on:click={() => (showLoading = artist.artistName)}
                href="/search?searchWord={artist.artistUrl}">{artist.artistName}</a>
                {#if showLoading === artist.artistName}
                <span class="box">Loading</span>
               {/if}</li>
            {/each}
          </ul>
        </div>
        <div class="section-2">

          <h3>Album searches</h3>
          <ul>
            {#each albums as album}
              <li><a
                on:click={() => (showLoading = album.albumName)}
                href="/search?searchWord={album.albumtUrl}">{album.albumName}</a>
                {#if showLoading === album.albumName}
                <span class="box">Loading</span>
               {/if}</li>
            {/each}
          </ul>

        </div>

        <div class="section-3">

          <h3>Label searches</h3>
          <ul>
            {#each labels as label}
              <li><a
                on:click={() => (showLoading = label.labelName)}
                href="/search?searchWord={label.labelUrl}">{label.labelName}</a>
                {#if showLoading === label.labelName}
                <span class="box">Loading</span>
               {/if}</li>
            {/each}
          </ul>

        </div>

      </div>
    </section>

    <style>

      section {
        background-image: url('../img/stones_background.jpg');
        background-position: 580px;
        background-repeat: no-repeat;
        background-position-y: -4rem;
        padding-bottom: 2rem;
        margin-top: 0;
      }

      .intro h2 {
        margin-top: 0;
      }

      .intro ul { 
        font-family: "Roboto", sans-serif;
        list-style: circle;
      }
    </style>
    

