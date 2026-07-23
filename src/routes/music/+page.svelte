<script lang="ts">
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";

    import { playlist } from "./tracks";

    let current = $state(0);

    const panel =
        "inline-flex gap-1 justify-between w-full h-auto border-5 border-aroace-dark-blue rounded-lg p-1 mb-3 bg-[hsl(215.09_46.09%_22.55%)] flex-background";
</script>

<DayNight />
<Particles />
<Clouds />

<Navbar active="music" />

<section class="m-2" id="music">
    <h2 class="heading">Music</h2>

    <AudioPlayer {playlist} bind:index={current} />

    <br /><br /><br />

    {#each playlist as track, i}
        <article class="track">
            <div class={panel}>
                <button
                    class="font-[PrestigeElite]! text-sm mt-1 mb-1 pb-0 px-1 text-white hover:text-aroace-yellow! transition-colors cursor-pointer"
                    onclick={() => (current = i)}
                >
                    {track.title}
                </button>
            </div>
        </article>
    {/each}
</section>

<Footer />

<style>
    :global(body)::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -2;
        padding: 0px;
        height: 100vh;
        background-color: #1c1c1e;
        object-fit: cover;
        position: center;
    }
    :global(body) {
        margin: 40px;
    }
</style>
