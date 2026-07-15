<script lang="ts">
    type Props = {
        title: string;
        id: string;
        roles: string;
        date: string;
        description: string;
        more: string;
        runtime: string;
        music: string;
        camera?: string;
        drive?: string;
    };

    const {
        title,
        id,
        roles,
        date,
        description,
        more,
        runtime,
        music,
        camera,
        drive,
    }: Props = $props();

    const panel =
        "inline-flex flex-row gap-1 justify-between w-full h-auto border-5 border-aroace-dark-blue rounded-lg p-1 mx-3 mb-3 bg-[hsl(215.09_46.09%_22.55%)] flex-background";

    const info =
        "inline-flex flex-wrap flex-col justify-around h-auto w-auto text-aroace-dark-blue font-[PrestigeElite] text-sm m-2.5 p-2.5 border-5 border-aroace-orange rounded-lg bg-aroace-light-blue";
</script>

<article class="film">
    <p class="mt-1 mb-0 pb-0 font-[PrestigeElite] text-xl text-white">
        {title}
    </p>

    <div class={panel}>
        <div class="inline-flex flex-col">
            <div
                class="m-2.5 rounded-lg border-5 border-aroace-yellow overflow-hidden"
            >
                <lite-youtube videoid={id} class="block w-67.5 h-45"
                ></lite-youtube>
            </div>

            {#if drive}
                <div
                    class="m-2.5 rounded-lg border-5 border-aroace-yellow bg-aroace-light-blue p-1.25"
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

        <div class={info}>
            <strong class="pb-1">{date}</strong>
            <span class="pb-px">
                <em>{roles}</em>
            </span>
            <span class="pb-px">{description}</span>
            <span class="pb-px">{more}</span>

            <ul class="mb-0 pb-px">
                <li>{runtime}</li>

                {#if camera}
                    <li>{camera}</li>
                {/if}

                <li>Adobe Premiere Pro</li>
                <li>{music}</li>
            </ul>
        </div>
    </div>
</article>
