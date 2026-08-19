<script lang="ts">
    import resume from "$lib/assets/resume.webp";

    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="resume"/>

<section class="m-2" id="resume">
    <h2 class="heading">Resume</h2>
    <div class="w-250 h-auto">
        <img src={resume} alt="" />
    </div>
    <br /> <br /> <br /> <br />
</section>

<Footer/>