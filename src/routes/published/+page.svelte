<script lang="ts">
    import Destination from "$lib/components/Destination.svelte";
    import StateoftheCreek from "$lib/components/State of the Creek.svelte";
    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import TheShadowsWalkAgain from "$lib/components/The Shadows Walk Again.svelte";
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="published"/>

<section class="m-2" id="published">
    <h2 class="heading">Published Work</h2>
    <TheShadowsWalkAgain/>
    <Destination />
    <StateoftheCreek />
</section>

<Footer/>

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
