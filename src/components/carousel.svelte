<script>
  import { fly } from 'svelte/transition';
  import Image from './image.svelte';


  export let images = [];

  let currentIdx = 0;
  function next() {
    currentIdx = (currentIdx + 1) % images.length;
  }

  function previous() {
    if (currentIdx === 0) {
      currentIdx = images.length - 1;
    } else {
      currentIdx -= 1;
    }
  }
</script>
<div class="grid w-full">
  {#each images as image, idx}
  {#if idx === currentIdx}
  <div class="image-container relative" transition:fly={{ y: 30 }}>
    <Image 
    class="absolute top-0 left-0 w-full h-full object-cover"
    title={image.title} src={
      "https://raw.githubusercontent.com/melushclothes/website/main/src/assets/clothes/" + image + ".webp"
    } alt={image.explanation}>
    <div slot="figcaption" class="absolute bottom-0 top-0 left-0 flex justify-between w-full">
      {#if images.length > 1}
      <button  on:click={previous} aria-label="Previous">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Previous</title><path fill="currentColor" d="m12.3 15.3l-2.6-2.6q-.15-.15-.225-.325Q9.4 12.2 9.4 12t.075-.375q.075-.175.225-.325l2.6-2.6q.475-.475 1.087-.212q.613.262.613.937v5.15q0 .675-.613.937q-.612.263-1.087-.212Z"></path></svg>
      </button>
      <button on:click={next} aria-label="Next">
        <!--right arrow icon-->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Next</title><path fill="currentColor" d="M11.7 15.3q-.475.475-1.087.212Q10 15.25 10 14.575v-5.15q0-.675.613-.937q.612-.263 1.087.212l2.6 2.6q.15.15.225.325q.075.175.075.375t-.075.375q-.075.175-.225.325Z"></path></svg>
      </button>
      {/if}
    </div>
    </Image>
  </div>
  {/if}
    {/each}
</div>

<style>
  .buttons {
    display: grid;
    grid-template-columns: 3rem 1fr 3rem;
  }

  /* Display every image on top of each other */
  /* This will help us cross-fade between images! */
  .image-container {
    grid-area: 1 / -1;
  }

  button {
    background: none;
    border: none;
    color: var(--color-text-secondary);
    border-radius: 0.3rem;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button:hover, button:focus-visible {
    background-color: var(--grey-2);
  }

  button svg {
    width: 100%;
    height: auto;
  }
</style>