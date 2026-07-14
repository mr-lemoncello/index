<script lang="ts">
    import resume from "$lib/assets/resume.webp";
    import id_1 from "$lib/assets/id_1.webp";
    import id_2 from "$lib/assets/id_2.webp";

    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import FadeInSection from "$lib/components/FadeInSection.svelte";
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
    <br />
</section>

<FadeInSection>
  <h2 class="heading">Certifications</h2>

  <div
    class="flex-row flex-wrap gap-1 justify-between content-center w-auto
  p-1 m-3
  flex-background"
  >
    <img src={id_1} alt="" width="200" />
    <img src={id_2} alt="" width="200" />
  </div>

  <br /> <br /> <br /> <br />
</FadeInSection>

<Footer/>