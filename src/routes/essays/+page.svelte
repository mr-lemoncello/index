<script lang="ts">
    import EmotionalAbuse from "$lib/components/Emotional Abuse.svelte";
    import AnimalFarm from "$lib/components/Animal Farm.svelte";
    import LordoftheLies from "$lib/components/Lord of the Lies.svelte";
    import KolkatasPollutionCrisis from "$lib/components/Kolkatas Pollution Crisis.svelte";

    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="essays"/>

<section class="m-2" id="essays">
    <h2 class="heading">Essays</h2>
    <EmotionalAbuse />
    <LordoftheLies />
    <AnimalFarm />
    <KolkatasPollutionCrisis />
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
