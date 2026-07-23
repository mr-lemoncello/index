<script lang="ts">
  import image480 from "$lib/assets/file_480.webp";

  import Particles from "$lib/components/Particles.svelte";
  import AudioPlayer from "$lib/components/AudioPlayer.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import FadeInSection from "$lib/components/FadeInSection.svelte";
  import DayNight from "$lib/components/DayNight.svelte";
  import Clouds from "$lib/components/Clouds.svelte";

  import { animate } from "animejs";
  import Navbar from "$lib/components/Navbar.svelte";

  let song = $state("none");
  let { data } = $props();

  let bg: string = $state("");

  type Link = {
    name: string;
    href: string;
    icon: string;
    hover: string;
    glow: string;
  };

  const links: Link[] = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC5qwrUuAOktVPydz6VLHW1w",
      icon: "fa-youtube",
      hover: "bg-[#FF0000]",
      glow: "shadow-[0_0_18px_#ff0000aa]",
    },
    {
      name: "GitHub",
      href: "https://github.com/mr-lemoncello",
      icon: "fa-github",
      hover: "bg-[#24292e]",
      glow: "shadow-[0_0_18px_#ffffff66]",
    },
  ];

  function enter(label: HTMLSpanElement, icon: HTMLElement) {
    animate(label, {
      width: label.scrollWidth,
      opacity: 1,
      marginInline: "0.75rem",
      duration: 400,
      easing: "ease-out-cubic",
    });

    animate(icon, {
      scale: [1, 1.25, 1.1],
      rotate: [0, 10, -8, 0],
      duration: 500,
      easing: "ease-out-back",
    });
  }

  function leave(label: HTMLSpanElement, icon: HTMLElement) {
    animate(label, {
      width: 0,
      opacity: 0,
      marginInline: 0,
      duration: 250,
      easing: "ease-in-cubic",
    });

    animate(icon, {
      scale: 1,
      rotate: 0,
      duration: 200,
    });
  }
</script>

<DayNight />

<Particles />

<Clouds />

<meta
  name="description"
  content="Vikas Banerjee Murthy [Noa Ellis]'s personal website, 
  displaying creative projects and the stuff I get up to."
/>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
</svelte:head>

<Typewriter />

<Navbar active="home" />

<FadeInSection>
  <p class="text-gray-400 font-[VerilySerif] mt-3 text-sm">
    {data.discordUserState}
  </p>
</FadeInSection>

<FadeInSection>
  <div
    class="flex-row gap-1 justify-between content-stretch w-full
  p-1 mx-3 mb-3 flex-background"
  >
    <div class="flex flex-col">
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
      <div class="flex flex-wrap justify-center gap-4">
        {#each links as link}
          <div
            class="social-pill bg-white/10 backdrop-blur-xl rounded-full border border-white/10 shadow-lg"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener"
              class="flex no-underline items-center text-white focus:outline-none focus-visible:ring-2
              ring-white/70 rounded-full"
              onmouseenter={(e) =>
                enter(
                  e.currentTarget.querySelector("span")!,
                  e.currentTarget.querySelector(".icon")!,
                )}
              onmouseleave={(e) =>
                leave(
                  e.currentTarget.querySelector("span")!,
                  e.currentTarget.querySelector(".icon")!,
                )}
            >
              <div
                class={`icon no-underline h-12 w-12 flex items-center justify-center rounded-full text-2xl transition-all 
                duration-300 ${link.hover} ${link.glow}`}
              >
                <i class={`fa-brands ${link.icon}`}></i>
              </div>

              <span
                class="text-sm no-underline font-semibold tracking-wide overflow-hidden whitespace-nowrap"
                style="width:0; opacity:0"
              >
                {link.name}
              </span>
            </a>
          </div>
        {/each}
      </div>
    </div>
    <div
      class="inline-flex flex-wrap flex-col justify-around
    h-auto w-auto text-aroace-dark-blue font-[VerilySerif] text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue
  e"
    >
      <p>
        <strong
          >Vikas Banerjee Murthy [also mr_lemoncello and Noa Ellis] -- they/them</strong
        >
      </p>
      <p>English, 一点普通话, ein bisschen Deutsch. Born Aug 2011.</p>
      <p>
        Award-winning
        <a class="text-hyperlink!" href="/filmmaking">filmmaker</a>,
        <a class="text-hyperlink!" href="/writing">published poet</a>,
        <a class="text-hyperlink!" href="/programming">programmer</a>,
        and <a class="text-hyperlink!" href="/music">composer</a> 
        from Portland, OR. I also enjoy biking, speech & debate, and playing
        <em>Celeste</em>.
      </p>
    </div>
  </div>
</FadeInSection>

<br /><br /><br />

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
