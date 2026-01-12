<script lang="ts">
  import { onMount } from 'svelte';
  
  let el: HTMLDivElement;
  let isVisible = false;

  const checkVisibility = () => {
    if (el) {
      const rect = el.getBoundingClientRect();
      isVisible = rect.top + 100 < window.innerHeight && rect.bottom > 100;
    }
  };

  onMount(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  });
</script>

<div
  bind:this={el}
  class:in-view={isVisible}
  class:not-in-view={!isVisible}
>
  <slot />
</div>