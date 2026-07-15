<script lang="ts">
    type Props = {
        title: string;
        link: string;
        roles: string;
        date: string;
        description: string;
        more: string;
        runtime: string;
        camera?: string;
        music: string;
        drive?: string;
    };

    let {
        title,
        link,
        roles,
        date,
        description,
        more,
        runtime,
        camera = "",
        music,
        drive = "",
    }: Props = $props();
</script>

<article class="film">
    <p class="text-white font-[PrestigeElite] text-xl mb-0 mt-1 pb-0">
        {title}
    </p>

    <div
        class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 mx-3 mb-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
    >
        <div class="inline-flex flex-col m-0 p-0">
            <iframe
                {title}
                class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
                width="270"
                height="180"
                src={link}
                allow="fullscreen"
                loading="lazy"
            >
            </iframe>

            {#if drive !== ""}
                <div
                    class="m-2.5 p-1.25 border-5 border-aroace-yellow bg-aroace-light-blue rounded-lg"
                >
                    <a
                        href={drive}
                        class="m-1 font-[PrestigeElite] text-aroace-dark-blue!"
                    >
                        Production Files
                    </a>
                </div>
            {/if}
        </div>

        <div
            class="inline-flex flex-wrap flex-col justify-around
    h-auto w-auto text-aroace-dark-blue font-[PrestigeElite] text-sm m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
        >
            <strong class="pb-1">{date}</strong>
            <span class="pb-px"><em>{roles}</em></span>
            <span class="pb-px">{description}</span>
            <span class="pb-px">{more}</span>
            <ul class="pb-px mb-0">
                <li>{runtime}</li>
                {#if camera !== ""}
                    <li>{camera}</li>
                {/if}
                <li>Adobe Premiere Pro</li>
                <li>{music}</li>
            </ul>
        </div>
    </div>
</article>
