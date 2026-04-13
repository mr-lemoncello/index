<script lang="ts">
    let { title, image, github, link, description } = $props();
</script>

<p class="text-white font-[PrestigeElite] text-xl mb-0 mt-1 pb-0">
    {title}
</p>

<div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 mx-3 mb-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <a class="h-auto w-auto" href={link}>
        <img src={image} alt="demonstration of {title}" />
    </a>

    <div
        class="inline-flex flex-wrap flex-col justify-around
    h-auto w-full text-aroace-dark-blue font-[PrestigeElite] text-sm m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
    >
        <span class="pb-px">{description}</span>

        <span class="pb-px">Github: {github}</span>
    </div>
</div>
