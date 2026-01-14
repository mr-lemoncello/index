<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import Particles from "$lib/components/Particles.svelte";
  import AudioPlayer from "$lib/components/AudioPlayer.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import FadeInSection from "$lib/components/FadeInSection.svelte";
  import MyButton from "$lib/components/MyButton.svelte";
  import BookCard from "$lib/components/BookCard.svelte";
  import Editing from "$lib/components/Editing.svelte";
  import DayNight from "$lib/components/DayNight.svelte";
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

  let content: Partial<Record<ContentKey, AnySvelteComponent>> = {};

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
      front: "src/lib/assets/poetry1.webp",
      back: "src/lib/assets/poetry1back.webp",
      pages: "11 pages",
      description: "On grief, loss, and hope things will get better",
    },
    {
      title: "Book 2: Through the Fingers",
      front: "src/lib/assets/poetry2.webp",
      back: "src/lib/assets/poetry2back.webp",
      pages: "23 pages",
      description: "On moments of shock and hopelessness",
    },
    {
      title: "Book 3: Burnt into Being",
      front: "src/lib/assets/poetry3.webp",
      back: "src/lib/assets/poetry3back.webp",
      pages: "17 pages",
      description: "On rage, revolution, and the fire that inspires us",
    },
    {
      title: "Book 4: Seeds in Ash",
      front: "src/lib/assets/poetry4.webp",
      back: "src/lib/assets/poetry4back.webp",
      pages: "19 pages",
      description: "On isolation , redeption, and resilience",
    },
    {
      title: "Book 5: Love Letters",
      front: "src/lib/assets/poetry5.webp",
      back: "src/lib/assets/poetry5back.webp",
      pages: "35 pages",
      description: "On love, existentialism, and cathartic release",
    },
    {
      title: "Book 6: Bridges in Low Light",
      front: "src/lib/assets/poetry6.webp",
      back: "src/lib/assets/poetry6back.webp",
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

  type AnySvelteComponent = new (...args: any[]) => SvelteComponent;

  const imports = {
    Destination: () => import("./Destination.svelte"),
    State_of_the_Creek: () => import("./State of the Creek.svelte"),
    Emotional_Abuse: () => import("./Emotional Abuse.svelte"),
    Lord_of_the_Lies: () => import("./Lord of the Lies.svelte"),
    Animal_Farm: () => import("./Animal Farm.svelte"),
    Kolkatas_Pollution_Crisis: () =>
      import("./Kolkatas Pollution Crisis.svelte"),
  } as const;

  type ContentKey = keyof typeof imports;

  async function loadContent() {
    for (const key of Object.keys(imports) as ContentKey[]) {
      if (!content[key]) {
        const module = await imports[key]();
        content[key] = module.default;
      }
    }
  }
</script>

<DayNight />

<Particles />

<meta
  name="description"
  content="Vikas Banerjee Murthy [Noa Ellis]'s personal website, 
  displaying creative projects and the stuff I get up to."
/>

<Typewriter />

<hr class="bg-white h-px mt-8 border-0.5 border-white opacity-70" />

<FadeInSection>
  <span
    class="text-white font-[PrestigeElite] font-semibold text-[clamp(1.6rem,40vw,2rem)] mt-12 mb-1.5"
  >
    Vikas Banerjee Murthy
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
      <img class="block object-cover" src={"src/lib/assets/file_480.webp"} alt="" />
    </div>
    <div
      class="inline-flex flex-wrap flex-col justify-around
    h-auto w-auto text-aroace-dark-blue font-[VerilySerif] text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
    >
      <p>
        <em>Vikas [also mr_lemoncello and Noa Ellis] - they/them</em>
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
    <h2
      class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-3"
    >
      Resume
    </h2>
    <div class="w-250 h-auto">
      <img src={"src/lib/assets/resume.webp"} alt="" />
    </div>
    <br />
  </section>
{/if}

{#if activeA === "poetry"}
  <section class="m-2" id="poetry">
    <h2
      class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-3"
    >
      Poetry Books
    </h2>
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
    <h2
      class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-3"
    >
      Published Work
    </h2>
    <details
      ontoggle={(e: Event) => {
        const details = e.target as HTMLDetailsElement;
        if (details.open) loadContent();
      }}
    >
      <summary class="text-white font-[PrestigeElite] text-xl mb-0">
        &nbsp;<em>Destination</em> - Published Dec 2025
      </summary>
      <Destination />
    </details>
    <details
      ontoggle={(e: Event) => {
        const details = e.target as HTMLDetailsElement;
        if (details.open) loadContent();
      }}
    >
      <summary class="text-white font-[PrestigeElite] text-xl mb-0">
        &nbsp;State of the Creek Report: Hyla Woods 2023 - Published Dec 2023
      </summary>
      <StateoftheCreek />
    </details>
  </section>
{/if}

<FadeInSection>
  <h2
    class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-3"
  >
    Creative Endeavors
  </h2>

  <div
    class="flex-wrap flex-row gap-1 justify-between content-stretch w-auto
  p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
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
    <h2
      class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-3"
    >
      Editing Projects
    </h2>
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
    <h2
      class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-3"
    >
      Essays
    </h2>
    <details
      ontoggle={(e: Event) => {
        const details = e.target as HTMLDetailsElement;
        if (details.open) loadContent();
      }}
    >
      <summary class="text-white font-[PrestigeElite] text-xl mb-0">
        &nbsp;Emotionally Abusive Parenting and the Societal Structures That
        Sanction It - 11 Nov 2025
      </summary>
      <EmotionalAbuse />
    </details>
    <details
      ontoggle={(e: Event) => {
        const details = e.target as HTMLDetailsElement;
        if (details.open) loadContent();
      }}
    >
      <summary class="text-white font-[PrestigeElite] text-xl mb-0">
        &nbsp;William Golding: Lord of the Lies - 14 Apr 2025
      </summary>
      <LordoftheLies />
    </details>
    <details
      ontoggle={(e: Event) => {
        const details = e.target as HTMLDetailsElement;
        if (details.open) loadContent();
      }}
    >
      <summary class="text-white font-[PrestigeElite] text-xl mb-0">
        &nbsp;Animal Farm and Nineteen Eighty-Four on Authoritarianism - 2 Apr
        2025
      </summary>
      <AnimalFarm />
    </details>
    <details
      ontoggle={(e: Event) => {
        const details = e.target as HTMLDetailsElement;
        if (details.open) loadContent();
      }}
    >
      <summary class="text-white font-[PrestigeElite] text-xl mb-0">
        &nbsp;A Chemical Analysis of Kolkata's Pollution Crisis - 4 Feb 2025
      </summary>
      <KolkatasPollutionCrisis />
    </details>
  </section>
{/if}

<FadeInSection>
  <h2
    class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-3"
  >
    Contact
  </h2>

  <div
    class="flex-row flex-wrap gap-1 justify-between content-center w-full
  p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
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
  <h2
    class="text-white font-[PrestigeElite] text-[clamp(1rem,20vw,1.5rem)] mt-4"
  >
    Certifications
  </h2>

  <div
    class="flex-row flex-wrap gap-1 justify-between content-center w-auto
  p-1 m-3
  flex-background"
  >
    <img src={"src/lib/assets/id_1.webp"} alt="" width="200" />
    <img src={"src/lib/assets/id_2.webp"} alt="" width="200" />
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
    background-image: url("http://localhost:5173/mr-lemoncello.github.io/src/lib/assets/background.webp");
    background-color: #1c1c1e;
    filter: brightness(30%) contrast(80%) blur(0.8px);
    object-fit: cover;
    position: center;
  }
  :global(body) {
    margin: 40px;
  }
</style>
