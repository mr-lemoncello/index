<script lang="ts">
  import image480 from "$lib/assets/file_480.webp";
  import resume from "$lib/assets/resume.webp";
  import id_1 from "$lib/assets/id_1.webp";
  import id_2 from "$lib/assets/id_2.webp";
  import poetry1 from "$lib/assets/poetry1.webp";
  import poetry1back from "$lib/assets/poetry1back.webp";
  import poetry2 from "$lib/assets/poetry2.webp";
  import poetry2back from "$lib/assets/poetry2back.webp";
  import poetry3 from "$lib/assets/poetry3.webp";
  import poetry3back from "$lib/assets/poetry3back.webp";
  import poetry4 from "$lib/assets/poetry4.webp";
  import poetry4back from "$lib/assets/poetry4back.webp";
  import poetry5 from "$lib/assets/poetry5.webp";
  import poetry5back from "$lib/assets/poetry5back.webp";
  import poetry6 from "$lib/assets/poetry6.webp";
  import poetry6back from "$lib/assets/poetry6back.webp";

  import Particles from "$lib/components/Particles.svelte";
  import AudioPlayer from "$lib/components/AudioPlayer.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import FadeInSection from "$lib/components/FadeInSection.svelte";
  import MyButton from "$lib/components/MyButton.svelte";
  import BookCard from "$lib/components/BookCard.svelte";
  import Editing from "$lib/components/Editing.svelte";
  import DayNight from "$lib/components/DayNight.svelte";
  import Clouds from "$lib/components/Clouds.svelte";
  
  import Destination from "./Destination.svelte";
  import StateoftheCreek from "./State of the Creek.svelte";
  import EmotionalAbuse from "./Emotional Abuse.svelte";
  import AnimalFarm from "./Animal Farm.svelte";
  import LordoftheLies from "./Lord of the Lies.svelte";
  import KolkatasPollutionCrisis from "./Kolkatas Pollution Crisis.svelte";

  let song = $state("none");
  let { data } = $props();

  let activeA: GroupA | null = $state(null);
  let activeB: GroupB | null = $state(null);
  let bg: string = $state("");
  let bg2: string = "";
  let name: string = $state("");
  let email: string = $state("");
  let isBuyer: boolean = $state(false);

  type Book = {
    title: string;
    front: string;
    back: string;
    pages: string;
    description: string;
  };

  type Edit = {
    title: string;
    link: string;
    date: string;
    description: string;
    more: string;
    music: string;
  };

  type GroupA = "resume" | "poetry" | "published";
  type GroupB = "editing" | "essays" | "worldbuilding";

  const books: Book[] = [
    {
      title: "Book 1: Of the Other Shore",
      front: poetry1,
      back: poetry1back,
      pages: "11 pages",
      description: "On grief, loss, and hope things will get better",
    },
    {
      title: "Book 2: Through the Fingers",
      front: poetry2,
      back: poetry2back,
      pages: "23 pages",
      description: "On moments of shock and hopelessness",
    },
    {
      title: "Book 3: Burnt into Being",
      front: poetry3,
      back: poetry3back,
      pages: "17 pages",
      description: "On rage, revolution, and the fire that inspires us",
    },
    {
      title: "Book 4: Seeds in Ash",
      front: poetry4,
      back: poetry4back,
      pages: "19 pages",
      description: "On isolation , redeption, and resilience",
    },
    {
      title: "Book 5: Love Letters",
      front: poetry5,
      back: poetry5back,
      pages: "35 pages",
      description: "On love, existentialism, and cathartic release",
    },
    {
      title: "Book 6: Bridges in Low Light",
      front: poetry6,
      back: poetry6back,
      pages: "15 pages",
      description: "On the highs and lows of urban living",
    },
  ];

  const edits: Edit[] = [
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

  const groupA: { label: string; value: GroupA }[] = [
    { label: "Resume", value: "resume" },
    { label: "Poetry Books", value: "poetry" },
    { label: "Published Work", value: "published" },
  ];
  const groupB: { label: string; value: GroupB }[] = [
    { label: "Editing Projects", value: "editing" },
    { label: "Essay Samples", value: "essays" },
    { label: "Worldbuilding", value: "worldbuilding" },
  ];

  function toggleA(value: GroupA) {
    activeA = activeA === value ? null : value;
  }
  function toggleB(value: GroupB) {
    activeB = activeB === value ? null : value;
  }
</script>

<DayNight />

<Particles />

<Clouds/>

<meta
  name="description"
  content="Vikas Banerjee Murthy [Noa Ellis]'s personal website, 
  displaying creative projects and the stuff I get up to."
/>

<Typewriter />

<FadeInSection>
  <span
    class="text-white font-[PrestigeElite] font-semibold text-[clamp(1.6rem,40vw,2rem)] mt-12 mb-1.5"
  >
    Vikas Banerjee Murthy :3
  </span><br />

  <p class="text-gray-400 font-[VerilySerif] text-sm">
    {data.discordUserState}
  </p>
</FadeInSection>

<FadeInSection>
  <div
    class="flex-row gap-1 justify-between content-stretch w-full
  p-1 m-3 flex-background"
  >
    <div
      class="m-2.5 border-5 border-aroace-yellow rounded-full
    w-55 h-55 transition-[width, height] duration-1000 ease-in-out
    shrink-0 overflow-hidden hover:w-90 hover:h-90"
      role="tooltip"
      id="file_480"
      aria-label="Photo of Vikas Banerjee Murthy"
    >
      <img class="block object-cover" src={image480} alt="" />
    </div>
    <div
      class="inline-flex flex-wrap flex-col justify-around
    h-auto w-auto text-aroace-dark-blue font-[VerilySerif] text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
    >
      <p>
        <strong>Vikas [also mr_lemoncello and Noa Ellis] -- they/them</strong>
      </p>
      <p>
        English, ein bisschen Deutsch, 一点普通话.<br />
        I like lots of stuff, but I'm too lazy to write it all here. Here's a few
        for your troubles: poetry/writing, filmmaking, music, biking. Born Aug 2011.
      </p>
      <span class="mb-1">some music :3&nbsp;</span><AudioPlayer
        onSongChange={(title) => (song = title)}
      />
    </div>
  </div>
</FadeInSection>

<FadeInSection>
  <div
    class="flex-row flex-wrap gap-1 justify-between content-stretch w-auto
  p-1 m-3 flex-background"
  >
    {#each groupA as btn}
      <MyButton
        label={btn.label}
        isActive={activeA === btn.value}
        toggle={() => toggleA(btn.value)}
      />
    {/each}
  </div>
</FadeInSection>

{#if activeA === "resume"}
  <section class="m-2" id="resume">
    <h2 class="heading">Resume</h2>
    <div class="w-250 h-auto">
      <img src={resume} alt="" />
    </div>
    <br/>
  </section>
{/if}

{#if activeA === "poetry"}
  <section class="m-2" id="poetry">
    <h2 class="heading">Poetry Books</h2>
    <div class="inline text-red-600 font-[VerilySerif] text-2xl py-3 px-1">
      Bundle Deal:
    </div>
    <div class="inline text-white font-[VerilySerif] text-2xl p-1">
      <sup>$</sup>24<sup>99*</sup>
    </div>
    <br />
    <div class="inline text-white font-[VerilySerif] text-xl p-6">
      List Price:
      <span style="color:red;text-decoration:line-through">
        <span style="color:gray">$29.99</span>
      </span>
    </div>
    <br /><br />

    {#each books as book}
      <BookCard
        title={book.title}
        frontSrc={book.front}
        backSrc={book.back}
        pages={book.pages}
        description={book.description}
      />
    {/each}
  </section>
{/if}

{#if activeA === "published"}
  <section class="m-2" id="published">
    <h2 class="heading">Published Work</h2>
    <Destination />
    <StateoftheCreek />
  </section>
{/if}

<FadeInSection>
  <h2 class="heading">Creative Endeavors</h2>

  <div
    class="flex-wrap flex-row gap-1 justify-between content-stretch w-auto
  p-1 m-3 flex-background"
  >
    {#each groupB as btn}
      <MyButton
        label={btn.label}
        isActive={activeB === btn.value}
        toggle={() => toggleB(btn.value)}
      />
    {/each}
  </div>
  <br />
</FadeInSection>

{#if activeB === "editing"}
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
{/if}

{#if activeB === "essays"}
  <section class="m-2" id="essays">
    <h2 class="heading">Essays</h2>
    <EmotionalAbuse />
    <LordoftheLies />
    <AnimalFarm />
    <KolkatasPollutionCrisis />
  </section>
{/if}

<FadeInSection>
  <h2 class="heading">Contact</h2>

  <div
    class="flex-row flex-wrap gap-1 justify-between content-center w-full
  p-1 m-3 flex-background"
  >
    <span
      class="flex-row content-center text-white font-[VerilySerif] text-xs"
      id="input1"
    >
      Name:
    </span>
    <input type="text" bind:value={name} aria-label="Name" /><br />
    <span
      class="flex-row content-center text-white font-[VerilySerif] text-xs"
      id="input2"
    >
      Email:
    </span>
    <input type="text" bind:value={email} aria-label="Email" /><br />
    <label for="On 1540?"></label>
    <span
      class="flex-row content-center text-white font-[VerilySerif] text-xs"
      id="input3"
    >
      Interested in buying?
    </span>
    <input
      type="checkbox"
      bind:checked={isBuyer}
      aria-label="Interested in buying?"
    /><label for="Interested in buying?"></label>
    <my-button
      class="flex-row content-center with-margin-text
    transition-[width, height] duration-750 ease-in-out
    hover:scale-110"
      role="button"
      tabindex="-1"
      id="my-button6"
      onmouseover={() => {
        bg2 = "#396488";
      }}
      onfocus={() => {
        bg2 = "#396488";
      }}
      onmouseout={() => {
        bg2 = "#1f3554";
      }}
      onblur={() => {
        bg2 = "#1f3554";
      }}>Submit</my-button
    >
  </div>
</FadeInSection>

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
  <p class="text-white font-[VerilySerif] text-xs">*cash only</p>
  <br /> <br /> <br />
</FadeInSection>

<div
  id="footer"
  class="flex-col fixed bottom-0 w-auto
  p-2 m-4 flex-background
  transition-[width, height] duration-500 ease-in-out
  hover:scale-105"
  role="tooltip"
  aria-label="Footer"
  style:background={bg}
  onmouseover={() => {
    bg = "#396488";
  }}
  onfocus={() => {
    bg = "#396488";
  }}
  onmouseout={() => {
    bg = "#1f3554";
  }}
  onblur={() => {
    bg = "#1f3554";
  }}
>
  <p class="content-normal with-margin-text mb-0">
    &copy; 2025 Vikas Banerjee Murthy. All rights reserved. Having trouble with
    the form? Contact me at:&nbsp;
    <a class="text-aroace-light-blue" href="mailto:vikasarino@gmail.com">
      vikasarino@gmail.com</a
    >
  </p>
  <p>
    <em class="content-normal text-gray-400 font-[VerilySerif] text-sm mb-0"
      >now playing: {song}</em
    >
  </p>
</div>

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