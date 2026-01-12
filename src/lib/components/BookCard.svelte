<script lang="ts">
  export let title: string;
  export let frontSrc: string;
  export let backSrc: string;
  export let pages: string;
  export let description: string;
  let activeSide: 'front' | 'back' = 'front';
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
    <div class="inline text-red-600 font-[VerilySerif] text-xl py-3 px-1">
      -50% Insecurity Discount:
    </div>

    <div class="inline text-white font-[VerilySerif] text-xl p-1">
      <sup>$</sup>4<sup>99*</sup>
    </div>

    <br />

    <div class="inline text-white font-[VerilySerif] text-lg p-6">
      List Price:
      <span class="text-red-600 line-through">
        <span class="text-gray-400">$9.99</span>
      </span>
    </div>

    <em class="text-white font-[VerilySerif] text-lg p-6">{pages}</em>
    <p class='text-white font-[VerilySerif] text-lg p-6'>{description}</p>

    <br /><br />
  </div>
</div>

<br /><br />