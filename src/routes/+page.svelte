<svelte:options customElement="my-element" />

<script lang="ts">
  import { change_color } from "$lib/index";
  import { toggle } from "$lib/index";
  import { mybutton_a1 } from "$lib/index";
  import { mybutton_a2 } from "$lib/index";
  import { mybutton_a3 } from "$lib/index";
  import { mybutton_b1 } from "$lib/index";
  import { mybutton_b2 } from "$lib/index";
  import { mybutton_b3 } from "$lib/index";
  import { output } from "$lib/index";
  import { State } from "$lib/index";
  let name: string = $State.name;
  let email: string = $State.email;
  let on1540: boolean = $State.on1540;
  let isBuyer: boolean = $State.isBuyer;
  let song: string = $State.song;

  $: song = $State.song;

  let dayFactor = 0;

  import file_480 from "$lib/assets/file_480.webp";
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
  import resume from "$lib/assets/resume.webp";
  import id_1 from "$lib/assets/id_1.webp";
  import id_2 from "$lib/assets/id_2.webp";

  import { onMount } from "svelte";
  import { initPage } from "$lib/index";

if (typeof window !== "undefined" && typeof document !== "undefined") {
  function cacheImages(array: Array<string>) {
    if (!cacheImages.list) {
      cacheImages.list = [];
    }

    var list = cacheImages.list;

    for (var i = 0; i < array.length; i++) {
      var img = new Image();

      img.onload = () => {
        var index = list.indexOf(img);
        if (index !== -1) {
          list.splice(index, 1);
        }
      };

      list.push(img);
      img.src = array[i];
    }
  }

  cacheImages.list = [] as HTMLImageElement[];

  cacheImages([file_480, poetry1, poetry1back, poetry2, poetry2back, poetry3, poetry3back, poetry4, poetry4back, poetry5, poetry5back, poetry6, poetry6back, resume, id_1, id_2]);
}

  export let data;

  onMount(() => {
    initPage();
  });

  let Destination: any = null;
  let State_of_the_Creek: any = null;
  let Emotional_Abuse: any = null;
  let Lord_of_the_Lies: any = null;
  let Animal_Farm: any = null;
  let Kolkatas_Pollution_Crisis: any = null;

  async function loadContent() {
    if (!Destination) {
      if (Destination) return;
      const module = await import("./Destination.svelte");
      Destination = module.default;
    }
    if (!State_of_the_Creek) {
      if (State_of_the_Creek) return;
      const module = await import("./State of the Creek.svelte");
      State_of_the_Creek = module.default;
    }
    if (!Emotional_Abuse) {
      if (Emotional_Abuse) return;
      const module = await import("./Emotional Abuse.svelte");
      Emotional_Abuse = module.default;
    }
    if (!Lord_of_the_Lies) {
      if (Lord_of_the_Lies) return;
      const module = await import("./Lord of the Lies.svelte");
      Lord_of_the_Lies = module.default;
    }
    if (!Animal_Farm) {
      if (Animal_Farm) return;
      const module = await import("./Animal Farm.svelte");
      Animal_Farm = module.default;
    }
    if (!Kolkatas_Pollution_Crisis) {
      if (Kolkatas_Pollution_Crisis) return;
      const module = await import("./Kolkatas Pollution Crisis.svelte");
      Kolkatas_Pollution_Crisis = module.default;
    }
  }

  let time = 0;

  // returns 0 → night, 1 → noon
  function getDayFactor(time: number) {
    const result = ((1 - Math.cos((time * 2 * Math.PI) / 500)) / 2);
    return result;
  }

  setInterval(() => {
    time = time + 1;
    dayFactor = getDayFactor(time);
  }, 1000);

</script>

<div
  class="fixed inset-0 pointer-events-none transition-opacity duration-5000 -z-2"
  style="
    background: linear-gradient(
      to bottom,
      rgba(54, 147, 235, 0.75),
      rgba(20, 79, 128, 0.65)
    );
    opacity: {0.25 + Math.pow((dayFactor), 1.4) * 0.425};
  "
></div>

<div
  class="fixed inset-0 pointer-events-none transition-opacity duration-5000 -z-2"
  style="
    background:
      linear-gradient(
        to bottom,
        rgba(20, 30, 70, 0.7),
        rgba(0, 0, 0, 0.9)
      ),
      radial-gradient(
        circle at 70% 20%,
        rgba(180, 210, 255, 0.35),
        transparent 60%
      );
    opacity: {3 * Math.pow((1 - (dayFactor)), 2)};
  "
></div>



<div
  class="fixed inset-0 pointer-events-none transition-opacity duration-3500 -z-2"
  style="
    background: linear-gradient(
      to top,
      rgba(255, 140, 90, 0.9),
      rgba(255, 200, 160, 0.4),
      transparent 60%
    );
    opacity: {0.25 * Math.pow((dayFactor), 1.4)};
  "
></div>

<div
  class="fixed inset-0 pointer-events-none transition-opacity duration-3000 -z-2"
  style="
    background: rgba(255, 255, 255, 0.25);
    opacity: {Math.pow((dayFactor), 1.6) * 0.45};
  "
></div>

<canvas id="particleCanvas" class="absolute top-0 left-0 w-100% -z-1"></canvas>

<meta
  name="description"
  content="Vikas Banerjee Murthy [Noa Ellis]'s personal website, displaying creative projects and the stuff I get up to."
/>

<div class="relative">
  <p
    id="typewriter-ghost"
    data-typewriter
    class="invisible typewriter container px-[10vw] pt-[6vh] pb-[2vh] font-mono text-white"
  >
    <span class="block text-base md:text-lg leading-relaxed opacity-70 italic">
      The crow’s caws always deepen,
    </span>

    <span class="block mt-2 ml-8 text-base md:text-lg leading-relaxed">
      <span class="font-semibold tracking-wide">Time runs on,</span>
      but still I smile at every line,
    </span>

    <span class="block mt-2 ml-16 text-base md:text-lg leading-relaxed">
      They mark the joy I didn’t waste,
    </span>

    <span
      class="block mt-2 pb-[8vh] text-base md:text-lg leading-relaxed opacity-70 italic"
    >
      The friend who kept my soul in time.
    </span>

    <span class="block text-base md:text-lg leading-relaxed">
      I’ve never asked for angels much,
    </span>

    <span
      class="block mt-2 ml-8 pb-[4vh] text-base md:text-lg leading-relaxed opacity-70 italic"
    >
      They rarely land, they always fly.
    </span>

    <span class="block text-base md:text-lg leading-relaxed">
      So goodbye friend, and may you roam free.
    </span>

    <span
      class="block mt-2 ml-16 pb-[12vh] text-base md:text-lg leading-relaxed font-semibold tracking-wide"
    >
      I no longer need your illuminating sight.
    </span>

    <span class="block text-base md:text-lg leading-relaxed opacity-70 italic">
      You couldn’t teach me to fly,
    </span>

    <span
      class="block mt-2 ml-8 pb-[12vh] text-xl md:text-2xl font-semibold leading-relaxed"
    >
      So I learned to fall.
    </span>

    <span class="block text-2xl md:text-3xl font-semibold leading-relaxed">
      I love you,
    </span>

    <span
      class="block mt-2 mb-1 ml-8 pb-[6vh] text-base md:text-lg leading-relaxed opacity-70 italic"
    >
      See you in the next life.
    </span>

    <span class="block text-sm tracking-widest opacity-60">
      — excerpt from <span class="italic">Feathered Angels in the Dark</span> — Noa
      Ellis
    </span>
  </p>

  <p
    id="typewriter"
    data-typewriter
    class="absolute inset-0 container px-[10vw] pt-[6vh] pb-[2vh] font-mono text-white"
  >
    <span class="block text-base md:text-lg leading-relaxed opacity-70 italic">
      The crow’s caws always deepen,
    </span>

    <span class="block mt-2 ml-8 text-base md:text-lg leading-relaxed">
      <span class="font-semibold tracking-wide">Time runs on,</span>
      but still I smile at every line,
    </span>

    <span class="block mt-2 ml-16 text-base md:text-lg leading-relaxed">
      They mark the joy I didn’t waste,
    </span>

    <span
      class="block mt-2 pb-[8vh] text-base md:text-lg leading-relaxed opacity-70 italic"
    >
      The friend who kept my soul in time.
    </span>

    <span class="block text-base md:text-lg leading-relaxed">
      I’ve never asked for angels much,
    </span>

    <span
      class="block mt-2 ml-8 pb-[4vh] text-base md:text-lg leading-relaxed opacity-70 italic"
    >
      They rarely land, they always fly.
    </span>

    <span class="block text-base md:text-lg leading-relaxed">
      So goodbye friend, and may you roam free.
    </span>

    <span
      class="block mt-2 ml-16 pb-[12vh] text-base md:text-lg leading-relaxed font-semibold tracking-wide"
    >
      I no longer need your illuminating sight.
    </span>

    <span class="block text-base md:text-lg leading-relaxed opacity-70 italic">
      You couldn’t teach me to fly,
    </span>

    <span
      class="block mt-2 ml-8 pb-[12vh] text-xl md:text-2xl font-semibold leading-relaxed"
    >
      So I learned to fall.
    </span>

    <span class="block text-2xl md:text-3xl font-semibold leading-relaxed">
      I love you,
    </span>

    <span
      class="block mt-2 mb-1 ml-8 pb-[6vh] text-base md:text-lg leading-relaxed opacity-70 italic"
    >
      See you in the next life.
    </span>

    <span class="block text-sm tracking-widest opacity-60">
      — excerpt from <span class="italic">Feathered Angels in the Dark</span> — Noa
      Ellis
    </span>
  </p>
</div>

<hr class="bg-white h-px mt-8 border-0.5 border-white opacity-70" />

<section class="fade-in-scroll">
  <span
    class="text-white font-mono font-semibold text-[clamp(1.6rem,40vw,2rem)] mt-12 mb-1.5"
  >
    Vikas Banerjee Murthy
  </span><br />

  <p class="text-gray-400 font-mono text-sm">{data.discordUserState}</p>
</section>

<section class="fade-in-scroll">
  <link rel="image" href={file_480} />
  <div
    class="inline-flex flex-row gap-1 justify-between content-stretch w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3 flex-background"
  >
    <div
      class="m-2.5 border-5 border-aroace-yellow rounded-full
    w-55 h-55 transition-[width, height] duration-1000 ease-in-out
    shrink-0 overflow-hidden hover:w-90 hover:h-90"
      role="tooltip"
      id="file_480"
      aria-label="Photo of Vikas Banerjee Murthy"
    >
      <img class="block object-cover" src={file_480} alt="" />
    </div>
    <div
      class="inline-flex flex-wrap flex-col justify-around
    h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
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
      <span class="mb-1">some music :3&nbsp;</span><audio
        controls
        id="myAudioPlayer"
        autoplay
        class="pt-0 mt-0 h-auto w-full shadow-[0px_0px_25px_3px_rgba(255,0,128,0.8)]"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</section>

<section class="fade-in-scroll">
  <div
    class="inline-flex flex-row flex-wrap gap-1 justify-between content-stretch w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3 flex-background"
  >
    <my-button
      class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
     border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
      role="button"
      id="my-button-a1"
      tabindex="-1"
      onclick={mybutton_a1}
      onkeydown={mybutton_a1}
      onmouseover={() => change_color("my-button-a1", "#9FCCE7")}
      onfocus={() => change_color("my-button-a1", "#9FCCE7")}
      onmouseout={() => change_color("my-button-a1", "#5faad7")}
      onblur={() => change_color("my-button-a1", "#5faad7")}
    >
      <div
        class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
      >
        Resume
      </div>
    </my-button>
    <my-button
      class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
      role="button"
      id="my-button-a2"
      tabindex="-1"
      onclick={mybutton_a2}
      onkeydown={mybutton_a2}
      onmouseover={() => change_color("my-button-a2", "#9FCCE7")}
      onfocus={() => change_color("my-button-a2", "#9FCCE7")}
      onmouseout={() => change_color("my-button-a2", "#5faad7")}
      onblur={() => change_color("my-button-a2", "#5faad7")}
    >
      <div
        class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
      >
        Poetry Books
      </div>
    </my-button>
    <my-button
      class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
     border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
      role="button"
      id="my-button-a3"
      tabindex="-1"
      onclick={mybutton_a3}
      onkeydown={mybutton_a3}
      onmouseover={() => change_color("my-button-a3", "#9FCCE7")}
      onfocus={() => change_color("my-button-a3", "#9FCCE7")}
      onmouseout={() => change_color("my-button-a3", "#5faad7")}
      onblur={() => change_color("my-button-a3", "#5faad7")}
    >
      <div
        class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
      >
        Published Work
      </div>
    </my-button>
  </div>
</section>

<div class="hidden m-2" id="resume">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">
    Resume
  </h2>
  <div class="w-250 h-auto">
    <img src={resume} alt="" />
  </div>
  <br />
</div>

<div class="hidden m-2" id="poetry">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">
    Poetry Books
  </h2>
  <div class="inline text-red-600 font-mono text-2xl py-3 px-1">
    Bundle Deal:
  </div>
  <div class="inline text-white font-mono text-2xl p-1">
    <sup>$</sup>24<sup>99*</sup>
  </div>
  <br />
  <div class="inline text-white font-mono text-xl p-6">
    List Price:
    <span style="color:red;text-decoration:line-through">
      <span style="color:gray">$29.99</span>
    </span>
  </div>
  <br /><br />

  <p class="text-white font-mono text-xl mb-0">Book 1</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 flex-background"
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry1}
        onmouseover={() => toggle("poetry1", "poetry1back", true)}
        onfocus={() => toggle("poetry1", "poetry1back", true)}
        id="poetry1"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry1back}
        onmouseover={() => toggle("poetry1back", "poetry1", false)}
        onfocus={() => toggle("poetry1back", "poetry1", false)}
        id="poetry1back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry1}
      id="poetry1d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry1back}
      id="poetry1backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 2</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 flex-background"
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry2}
        onmouseover={() => toggle("poetry2", "poetry2back", true)}
        onfocus={() => toggle("poetry2", "poetry2back", true)}
        id="poetry2"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry2back}
        onmouseover={() => toggle("poetry2back", "poetry2", false)}
        onfocus={() => toggle("poetry2back", "poetry2", false)}
        id="poetry2back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry2}
      id="poetry2d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry2back}
      id="poetry2backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 3</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 flex-background"
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry3}
        onmouseover={() => toggle("poetry3", "poetry3back", true)}
        onfocus={() => toggle("poetry3", "poetry3back", true)}
        id="poetry3"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry3back}
        onmouseover={() => toggle("poetry3back", "poetry3", false)}
        onfocus={() => toggle("poetry3back", "poetry3", false)}
        id="poetry3back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry3}
      id="poetry3d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry3back}
      id="poetry3backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 4</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry4}
        onmouseover={() => toggle("poetry4", "poetry4back", true)}
        onfocus={() => toggle("poetry4", "poetry4back", true)}
        id="poetry4"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry4back}
        onmouseover={() => toggle("poetry4back", "poetry4", false)}
        onfocus={() => toggle("poetry4back", "poetry4", false)}
        id="poetry4back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry4}
      id="poetry4d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry4back}
      id="poetry4backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 5</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg m-2.5 p-1 bg-aroace-dark-blue"
    >
      <img
        src={poetry5}
        onmouseover={() => toggle("poetry5", "poetry5back", true)}
        onfocus={() => toggle("poetry5", "poetry5back", true)}
        id="poetry5"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry5back}
        onmouseover={() => toggle("poetry5back", "poetry5", false)}
        onfocus={() => toggle("poetry5back", "poetry5", false)}
        id="poetry5back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry5}
      id="poetry5d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry5back}
      id="poetry5backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 6</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry6}
        onmouseover={() => toggle("poetry6", "poetry6back", true)}
        onfocus={() => toggle("poetry6", "poetry6back", true)}
        id="poetry6"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry6back}
        onmouseover={() => toggle("poetry6back", "poetry6", false)}
        onfocus={() => toggle("poetry6back", "poetry6", false)}
        id="poetry6back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry6}
      id="poetry6d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry6back}
      id="poetry6backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
</div>

<div class="hidden m-2" id="published">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">
    Published Work
  </h2>
  <details
    ontoggle={(e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) loadContent();
    }}
  >
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;<em>Destination</em> - Published Dec 2025
    </summary>
    {#if Destination}
      <svelte:component this={Destination} />
    {:else}
      <p class="text-white font-mono text-sm mt-0.5">Loading...</p>
    {/if}
  </details>
  <details
    ontoggle={(e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) loadContent();
    }}
  >
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;State of the Creek Report: Hyla Woods 2023 - Published Dec 2023
    </summary>
    {#if State_of_the_Creek}
      <svelte:component this={State_of_the_Creek} />
    {:else}
      <p class="text-white font-mono text-sm mt-0.5">Loading...</p>
    {/if}
  </details>
</div>

<section class="fade-in-scroll">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">
    Creative Endeavors
  </h2>

  <div
    class="inline-flex flex-wrap flex-row gap-1 justify-between content-stretch w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <my-button
      class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
      role="button"
      id="my-button-b1"
      tabindex="-1"
      onclick={mybutton_b1}
      onkeydown={mybutton_b1}
      onmouseover={() => change_color("my-button-b1", "#9FCCE7")}
      onfocus={() => change_color("my-button-b1", "#9FCCE7")}
      onmouseout={() => change_color("my-button-b1", "#5faad7")}
      onblur={() => change_color("my-button-b1", "#5faad7")}
    >
      <div
        class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
      >
        Editing Projects
      </div>
    </my-button>
    <my-button
      class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
      role="button"
      id="my-button-b2"
      tabindex="-1"
      onclick={mybutton_b2}
      onkeydown={mybutton_b2}
      onmouseover={() => change_color("my-button-b2", "#9FCCE7")}
      onfocus={() => change_color("my-button-b2", "#9FCCE7")}
      onmouseout={() => change_color("my-button-b2", "#5faad7")}
      onblur={() => change_color("my-button-b2", "#5faad7")}
    >
      <div
        class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
      >
        Essay Samples
      </div>
    </my-button>
    <my-button
      class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
      role="button"
      id="my-button-b3"
      tabindex="-1"
      onclick={mybutton_b3}
      onkeydown={mybutton_b3}
      onmouseover={() => change_color("my-button-b3", "#9FCCE7")}
      onfocus={() => change_color("my-button-b3", "#9FCCE7")}
      onmouseout={() => change_color("my-button-b3", "#5faad7")}
      onblur={() => change_color("my-button-b3", "#5faad7")}
    >
      <div
        class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
      >
        Worldbuilding
      </div>
    </my-button>
  </div>
  <br />
</section>

<div class="hidden m-2" id="editing">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">
    Editing Projects
  </h2>
  <p class="text-white font-mono text-xl">
    Ink and Blood: The Lines That Divide Us
  </p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <iframe
      title="Ink and Blood, The Lines That Divide Us"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/S4SFCWFjZcs"
      allow="fullscreen"
      loading="lazy"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Nov 11, 2025</strong>
      <span class="pb-px"
        >Original creative writing piece by Noa Ellis, presented in kinetic
        typography format</span
      >
      <span class="pb-px"
        >Inspired by the prompt: How do the borders drawn by colonial powers
        without the necessary considerations for the long-term impacts, or in
        some cases, intentional sabotage, lead to decades-long instabilities in
        regions that had not previously been unstable?</span
      >
      <span class="pb-px"
        >Music by Whitesand (Martynas Lau) - My Spirit Is Free (2018)</span
      >
    </div>
  </div>

  <p class="text-white font-mono text-xl">1844 FRC 2025 Season Recap</p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <iframe
      title="1844 FRC 2025 Season Recap"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/aNfTetDGJ7g"
      allow="fullscreen"
      loading="lazy"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Apr 23, 2025</strong>
      <span class="pb-px"
        >Recap of rookie team FRC1844's 2025 season and their main season-robot
        Private</span
      >
      <span class="pb-px"
        >Following the design, creation, and competitive run of FIRST Robotics
        Competition team 1844: the Eggineers, rookie team of FRC1540: the
        Flaming Chickens</span
      >
      <span class="pb-px">Music by Creo - Unveil (2019)</span>
    </div>
  </div>

  <p class="text-white font-mono text-xl">Meet 1844, The EGGINEERS!</p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <iframe
      title="Meet 1844, The EGGINEERS!"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/sk3-40_Vvy0"
      allow="fullscreen"
      loading="lazy"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Feb 6, 2025</strong>
      <span class="pb-px"
        >Introduction to rookie team FRC1844, following their win at FRC1540's
        2025 BunnyBots</span
      >
      <span class="pb-px"
        >An introduction to the FIRST Robotics Competition team 1844: the
        Eggineers, rookie team of FRC1540: the Flaming Chickens; includes
        interviews with prominent FRC1540 members</span
      >
      <span class="pb-px">Music by TheFatRat - Unity (2016)</span>
    </div>
  </div>

  <p class="text-white font-mono text-xl">1844 BunnyBots Recap</p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
    bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <iframe
      title="1844 BunnyBots Recap"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/e7vN35rVPeI"
      allow="fullscreen"
      loading="lazy"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Feb 6, 2025</strong>
      <span class="pb-px"
        >Recap of FRC1844's off-season and competition win at FRC1540's
        BunnyBots 2025</span
      >
      <span class="pb-px"
        >Following the off-season design, creation, and competition run of FIRST
        Robotics Competition team 1844: the Eggineers, rookie team of FRC1540
        and their tournament win at BunnyBots 2025, hosted by FRC1540</span
      >
      <span class="pb-px"
        >Music by Thomas Bergersen, Two Steps From Hell - Victory (2017)</span
      >
    </div>
  </div>
</div>

<div class="hidden m-2" id="essays">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">
    Essays
  </h2>
  <details
    ontoggle={(e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) loadContent();
    }}
  >
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;Emotionally Abusive Parenting and the Societal Structures That
      Sanction It - 11 Nov 2025
    </summary>
    {#if Emotional_Abuse}
      <svelte:component this={Emotional_Abuse} />
    {:else}
      <p class="text-white font-mono text-sm mt-0.5">Loading...</p>
    {/if}
  </details>
  <details
    ontoggle={(e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) loadContent();
    }}
  >
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;William Golding: Lord of the Lies - 14 Apr 2025
    </summary>
    {#if Lord_of_the_Lies}
      <svelte:component this={Lord_of_the_Lies} />
    {:else}
      <p class="text-white font-mono text-sm mt-0.5">Loading...</p>
    {/if}
  </details>
  <details
    ontoggle={(e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) loadContent();
    }}
  >
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;Animal Farm and Nineteen Eighty-Four on Authoritarianism - 2 Apr
      2025
    </summary>
    {#if Animal_Farm}
      <svelte:component this={Animal_Farm} />
    {:else}
      <p class="text-white font-mono text-sm mt-0.5">Loading...</p>
    {/if}
  </details>
  <details
    ontoggle={(e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) loadContent();
    }}
  >
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;A Chemical Analysis of Kolkata's Pollution Crisis - 4 Feb 2025
    </summary>
    {#if Kolkatas_Pollution_Crisis}
      <svelte:component this={Kolkatas_Pollution_Crisis} />
    {:else}
      <p class="text-white font-mono text-sm mt-0.5">Loading...</p>
    {/if}
  </details>
</div>

<section class="fade-in-scroll">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">
    Contact
  </h2>

  <div
    class="inline-flex flex-row flex-wrap gap-1 justify-between content-center w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)] flex-background"
  >
    <span
      class="flex-row content-center text-white font-mono text-xs"
      id="input1"
    >
      Name:
    </span>
    <input type="text" bind:value={name} aria-label="Name" /><br />
    <span
      class="flex-row content-center text-white font-mono text-xs"
      id="input2"
    >
      Email:
    </span>
    <input type="text" bind:value={email} aria-label="Email" /><br />
    <span
      class="flex-row content-center text-white font-mono text-xs"
      id="input3"
    >
      On 1540?
    </span>
    <input
      type="checkbox"
      id="1540"
      bind:checked={on1540}
      aria-label="On 1540?"
    /><label for="On 1540?"></label>
    <span
      class="flex-row content-center text-white font-mono text-xs"
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
      class="flex-row content-center text-white font-mono text-sm
    transition-[width, height] duration-750 ease-in-out
    hover:scale-110"
      role="button"
      tabindex="-1"
      id="my-button6"
      onmouseover={() => change_color("my-button6", "#396488")}
      onfocus={() => change_color("my-button6", "#396488")}
      onmouseout={() => change_color("my-button6", "#1f3554")}
      onblur={() => change_color("my-button6", "#1f3554")}
      onclick={output}
      onkeydown={output}>Submit</my-button
    >
  </div>
</section>

<section class="fade-in-scroll">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-4">
    Certifications
  </h2>

  <div
    class="inline-flex flex-row flex-wrap gap-1 justify-between content-center w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  flex-background"
  >
    <img src={id_1} alt="" width="200" />
    <img src={id_2} alt="" width="200" />
  </div>

  <br /> <br /> <br /> <br />
  <p class="text-white font-mono text-xs">*cash only</p>
  <br /> <br /> <br />
</section>

<div
  id="footer"
  class="inline-flex flex-col fixed bottom-0 w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-2 m-4 flex-background
  transition-[width, height] duration-500 ease-in-out
  hover:scale-105"
  role="tooltip"
  aria-label="Footer"
  onmouseover={() => change_color("footer", "#396488")}
  onfocus={() => change_color("footer", "#396488")}
  onmouseout={() => change_color("footer", "#1f3554")}
  onblur={() => change_color("footer", "#1f3554")}
>
  <p class="content-normal text-white font-mono text-sm mb-0">
    &copy; 2025 Vikas Banerjee Murthy. All rights reserved. Having trouble with
    the form? Contact me at:&nbsp;
    <a class="text-aroace-light-blue" href="mailto:vikasarino@gmail.com">
      vikasarino@gmail.com</a
    >
  </p>
  <p>
    <em class="content-normal text-gray-400 font-mono text-sm mb-0"
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
