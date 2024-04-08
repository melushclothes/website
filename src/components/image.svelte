<!--src/components/Image.svelte-->
<script>
  export let src = '';
  export let alt = '';
</script>

<!--
    original with type attribute
    https://github.com/Uvacoder/astro-stargazers-api/blob/59b421078113cd006ca5488df3efea3734179deb/src/pages/index.astro
-->

<figure>
    <img class="media" src={src} alt={alt} />
  <figcaption>
    <!--slot extra information like a "learn more" link or image description-->
    <slot name="figcaption" />
  </figcaption>
</figure>

<style>
  figure {
    background: var(--grey-1);
    border: 2px solid var(--grey-2);
    box-shadow: var(--box-shadow-glow);
    border-radius: 0.5rem;
    margin: 0;
    padding-bottom: 1rem;
  }

  figcaption {
    padding-inline: 1rem;
  }

  .media {
    width: 100%;
    height: auto;
    aspect-ratio: 10 / 10;
    object-fit:  cover;
    border-radius: inherit;
    border: none;
  }
</style>