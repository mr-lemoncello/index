<script lang="ts">
  import Filmmaking from "$lib/components/Filmmaking.svelte";
  import Particles from "$lib/components/Particles.svelte";
  import DayNight from "$lib/components/DayNight.svelte";
  import Clouds from "$lib/components/Clouds.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  type FilmProject = {
    title: string;
    link: string;
    date: string;
    roles: string;
    description: string;
    more: string;
    runtime: string;
    camera?: string;
    music: string;
    drive?: string;
  };

  const featured: FilmProject[] = [
    {
      title: "Coherence Illusion: The Institutional Regulation of Trans Life",
      link: "https://www.youtube.com/embed/4la1tlvn9to",
      roles: "Writer • Director • Editor",
      date: "Apr 24, 2026",
      description: "Original video essay by Noa Ellis",
      more: `Inspired by the prompt: How has institutional language been used to construct, police, and erase gender deviance within 20th century Western medicine, law, and sport?`,
      runtime: "41 min",
      music: "Music by Lena Raine - Celeste OST",
      drive:
        "https://drive.google.com/drive/u/0/folders/1h4UlsxUM6y73vB_uKaJxuICwKf8zIhVj",
    },
  ];

  const projects: FilmProject[] = [
    {
      title: "Team 1540 2026 Robot Reveal: Hephaestus",
      link: "https://www.youtube.com/embed/wBAUA4oNouY",
      roles: "Director of Photography",
      date: "Mar 23, 2026",
      description:
        "Original robot reveal by Hanya You and Vikas Banerjee Murthy",
      more: `Showcase of this year's competition robot by FRC team #1540. For more information about our team, visit our website: team1540.org.`,
      runtime: "2 min",
      camera: "Canon EOS R100",
      music: "Music by µ-Ziq - Dance 2",
    },
    {
      title: "Requiem of a Suicide",
      link: "https://www.youtube.com/embed/wAoBbREm4mY",
      roles: "Writer • Director • Director of Photography • Editor",
      date: "Feb 25, 2026",
      description: "Original short film by Noa Ellis",
      more: `Inspired by the prompt: How does systemic racism and discrimination contribute to the mental health crises within communities of color?`,
      runtime: "7 min",
      camera: "iPhone 11",
      music: "Music by Noa Ellis - Film Soundtrack",
    },
    {
      title: "Ink and Blood: The Lines That Divide Us",
      link: "https://www.youtube.com/embed/S4SFCWFjZcs",
      roles: "Writer • Director • Editor",
      date: "Nov 11, 2025",
      description:
        "Original creative writing piece by Noa Ellis, presented in kinetic typography format",
      more: `"Inspired by the prompt: How do the borders drawn by colonial powers without 
      the necessary considerations for the long-term impacts, or in some cases, 
      intentional sabotage, lead to decades-long instabilities in regions that 
      had not previously been unstable?`,
      runtime: "5 min",
      music: "Music by Whitesand (Martynas Lau) - My Spirit Is Free (2018)",
    },
    {
      title: "1844 FRC 2025 Season Recap",
      link: "https://www.youtube.com/embed/aNfTetDGJ7g",
      date: "Apr 23, 2025",
      roles: "Director • Director of Photography • Editor",
      description:
        "Recap of rookie team FRC1844's 2025 season and their main season-robot Private",
      more: `Following the design, creation, and competitive run of FIRST Robotics Competition 
      team 1844: the Eggineers, rookie team of FRC1540: the Flaming Chickens`,
      runtime: "2 min",
      camera: "Canon G3X",
      music: "Music by Creo - Unveil (2019)",
    },
    {
      title: "Meet 1844, The EGGINEERS!",
      link: "https://www.youtube.com/embed/sk3-40_Vvy0",
      date: "Feb 6, 2025",
      roles: "Director • Director of Photography • Editor",
      description:
        "Introduction to rookie team FRC1844, following their win at FRC1540's 2025 BunnyBots",
      more: `An introduction to the FIRST Robotics Competition team 1844: the Eggineers, 
      rookie team of FRC1540: the Flaming Chickens; includes interviews 
      with prominent FRC1540 members`,
      runtime: "3 min",
      camera: "Canon G3X",
      music: "Music by TheFatRat - Unity (2016)",
    },
    {
      title: "1844 BunnyBots Recap",
      link: "https://www.youtube.com/embed/e7vN35rVPeI",
      date: "Feb 6, 2025",
      roles: "Director • Director of Photography • Editor",
      description:
        "Recap of FRC1844's off-season and competition win at FRC1540's BunnyBots 2025",
      more: `Following the off-season design, creation, and competition run of 
      FIRST Robotics Competition team 1844: the Eggineers, rookie team of FRC1540 
      and their tournament win at BunnyBots 2025, hosted by FRC1540`,
      runtime: "5 min",
      camera: "Canon G3X",
      music: "Music by Thomas Bergersen, Two Steps From Hell - Victory (2017)",
    },
  ];
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="filmmaking" />

<section class="m-2" id="filmmaking">
  <h2 class="heading">Featured</h2>
  {#each featured as feature}
    <Filmmaking {...feature} />
  {/each}
  <h2 class="heading">All Projects</h2>
  {#each projects as project}
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
