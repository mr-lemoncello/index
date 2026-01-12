<script lang="ts">
    export let title: string;
    export let link: string;
    export let date: string;
    export let description: string;
    export let more: string;
    export let music: string;
</script>

<p class="text-white font-[PrestigeElite] text-xl pb-0">
    {title}
</p>
<div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
>
    <iframe
        title={title}
        class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
        width="270"
        height="180"
        src={link}
        allow="fullscreen"
        loading="lazy"
    >
    </iframe>

    <div
        class="inline-flex flex-wrap flex-col justify-around
    h-auto w-auto text-aroace-dark-blue font-[PrestigeElite] text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
    >
        <strong class="pb-1">{date}</strong>
        <span class="pb-px"
            >{description}</span
        >
        <span class="pb-px"
            >{more}</span
        >
        <span class="pb-px"
            >{music}</span
        >
    </div>
</div>