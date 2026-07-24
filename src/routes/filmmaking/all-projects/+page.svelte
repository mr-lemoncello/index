<script lang="ts">
    import Filmmaking from "$lib/components/Filmmaking.svelte";
    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { projects } from "../filmmaking";
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="filmmaking" />

<section class="m-2" id="filmmaking">
    <h2 class="heading">All Projects</h2>
    <a
        class="mt-1 mb-1 pb-0 font-[PrestigeElite] text-xl text-white"
        href="/filmmaking">Back</a
    >
    {#each projects.filter((item) => !item.featured) as project}
        <Filmmaking {...project} />
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
