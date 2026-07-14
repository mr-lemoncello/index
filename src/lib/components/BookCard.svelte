<script lang="ts">
  let { title, frontSrc, backSrc, pages, description } = $props();
  let activeSide: 'front' | 'back' = $state('front');
</script>

<p class="text-white font-[PrestigeElite] text-xl mb-0">{title}</p>

<div
  class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 flex-background"
>
  <div
    class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
      border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
  >
    <img
      src={frontSrc}
      width="40"
      alt=""
      class="cursor-pointer"
      style="filter: brightness({activeSide === 'front' ? 1.2 : 1});"
      onmouseover={() => (activeSide = 'front')}
      onfocus={() => (activeSide = 'front')}
    />

    <img
      src={backSrc}
      width="40"
      alt=""
      class="cursor-pointer"
      style="filter: brightness({activeSide === 'back' ? 1.2 : 1});"
      onmouseover={() => (activeSide = 'back')}
      onfocus={() => (activeSide = 'back')}
    />
  </div>

  <img
    src={frontSrc}
    width="200"
    alt=""
    class={activeSide === 'front' ? 'block' : 'hidden'}
  />

  <img
    src={backSrc}
    width="200"
    alt=""
    class={activeSide === 'back' ? 'block' : 'hidden'}
  />

  <div class="content-center">
    <em class="text-white font-[VerilySerif] text-lg p-6">{pages}</em>
    <p class='text-white font-[VerilySerif] text-lg p-6'>{description}</p>

    <br /><br />
  </div>
</div>

<br /><br />