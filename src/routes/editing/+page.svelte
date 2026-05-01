<script lang="ts">
  import Editing from "$lib/components/Editing.svelte";
  import Particles from "$lib/components/Particles.svelte";
  import DayNight from "$lib/components/DayNight.svelte";
  import Clouds from "$lib/components/Clouds.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  type Edit = {
    title: string;
    link: string;
    date: string;
    description: string;
    more: string;
    music: string;
  };

  const edits: Edit[] = [
    {
      title: "Coherence Illusion: The Institutional Regulation of Trans Life",
      link: "https://www.youtube.com/embed/4la1tlvn9to",
      date: "Apr 24, 2026",
      description: "Original video essay by Noa Ellis",
      more: `Inspired by the prompt: How has institutional language been used to construct, police, and erase gender deviance within 20th century Western medicine, law, and sport?`,
      music: "Music by Lena Raine - Celeste OST",
    },
    {
      title: "Requiem of a Suicide",
      link: "https://www.youtube.com/embed/wAoBbREm4mY",
      date: "Feb 25, 2026",
      description: "Original short film by Noa Ellis",
      more: `Inspired by the prompt: How does systemic racism and discrimination contribute to the mental health crises within communities of color?`,
      music: "Music by Noa Ellis - Film Soundtrack",
    },
    {
      title: "Ink and Blood: The Lines That Divide Us",
      link: "https://www.youtube.com/embed/S4SFCWFjZcs",
      date: "Nov 11, 2025",
      description:
        "Original creative writing piece by Noa Ellis, presented in kinetic typography format",
      more: `"Inspired by the prompt: How do the borders drawn by colonial powers without 
      the necessary considerations for the long-term impacts, or in some cases, 
      intentional sabotage, lead to decades-long instabilities in regions that 
      had not previously been unstable?`,
      music: "Music by Whitesand (Martynas Lau) - My Spirit Is Free (2018)",
    },
    {
      title: "1844 FRC 2025 Season Recap",
      link: "https://www.youtube.com/embed/aNfTetDGJ7g",
      date: "Apr 23, 2025",
      description:
        "Recap of rookie team FRC1844's 2025 season and their main season-robot Private",
      more: `Following the design, creation, and competitive run of FIRST Robotics Competition 
      team 1844: the Eggineers, rookie team of FRC1540: the Flaming Chickens`,
      music: "Music by Creo - Unveil (2019)",
    },
    {
      title: "Meet 1844, The EGGINEERS!",
      link: "https://www.youtube.com/embed/sk3-40_Vvy0",
      date: "Feb 6, 2025",
      description:
        "Introduction to rookie team FRC1844, following their win at FRC1540's 2025 BunnyBots",
      more: `An introduction to the FIRST Robotics Competition team 1844: the Eggineers, 
      rookie team of FRC1540: the Flaming Chickens; includes interviews 
      with prominent FRC1540 members`,
      music: "Music by TheFatRat - Unity (2016)",
    },
    {
      title: "1844 BunnyBots Recap",
      link: "https://www.youtube.com/embed/e7vN35rVPeI",
      date: "Feb 6, 2025",
      description:
        "Recap of FRC1844's off-season and competition win at FRC1540's BunnyBots 2025",
      more: `Following the off-season design, creation, and competition run of 
      FIRST Robotics Competition team 1844: the Eggineers, rookie team of FRC1540 
      and their tournament win at BunnyBots 2025, hosted by FRC1540`,
      music: "Music by Thomas Bergersen, Two Steps From Hell - Victory (2017)",
    },
  ];
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="editing" />

<section class="m-2" id="editing">
  <h2 class="heading">Editing Projects</h2>
  {#each edits as edit}
    <Editing
      title={edit.title}
      link={edit.link}
      date={edit.date}
      description={edit.description}
      more={edit.more}
      music={edit.music}
    />
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
