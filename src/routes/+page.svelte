<svelte:options customElement="my-element" />

<script lang="ts">
  import file_480 from "$lib/assets/file_480.png";
  import poetry1 from "$lib/assets/poetry1.png";
  import resume from "$lib/assets/resume.png";

  import { onMount } from "svelte";

  let discordUserState: string | null = null;
  onMount(async () => {
    try {
      const response = await fetch(
        `https://api.lanyard.rest/v1/users/1250607214180438016`,
      );
      const data = await response.json();

      discordUserState = data.data.activities[0]?.state;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  });

  let v = 0;
  let u = 0;
  let w = 0;
  let name = "";
  let email = "";
  let on1540 = false;
  let isBuyer = false;

  function change_color(name: string, color: string) {
    const fn_name = document.getElementById(name);
    if (fn_name === null) return;
    if (name == "my-button1" && v == 1) return; //unless element is my-button1 and toggled
    if (name == "my-button2" && u == 1) return;
    if (name == "my-button3" && w == 1) return;
    fn_name.style.backgroundColor = color; //changes HTMLElement background color to desired
  }
  function mybutton_one() {
    //toggles between highlighted, showing the resume and unhilighted, hiding the resume
    const mybutton_one = document.getElementById("my-button1");
    const mybutton_two = document.getElementById("my-button2");
    const mybutton_three = document.getElementById("my-button3");
    const resume = document.getElementById("resume");
    const poetry1 = document.getElementById("poetry1");
    const editing = document.getElementById("editing");
    v = 1 - v;
    if (
      mybutton_one === null ||
      resume === null ||
      poetry1 === null ||
      mybutton_two === null ||
      mybutton_three === null ||
      editing === null
    )
      return;
    mybutton_one.style.backgroundColor = "#9fcce7";
    if (v === 1) {
      resume.style.display = "block";
      if (u === 1) {
        poetry1.style.display = "none";
        mybutton_two.style.backgroundColor = "#5faad7";
        u = 1 - u;
      }
      if (w === 1) {
        editing.style.display = "none";
        mybutton_three.style.backgroundColor = "#5faad7";
        w = 1 - w;
      }
    }
    if (v === 0) {
      resume.style.display = "none";
    }
  }

  function mybutton_two() {
    //same as above, but toggles poetry books instead of resume
    const mybutton_two = document.getElementById("my-button2");
    const mybutton_one = document.getElementById("my-button1");
    const mybutton_three = document.getElementById("my-button3");
    const poetry1 = document.getElementById("poetry1");
    const resume = document.getElementById("resume");
    const editing = document.getElementById("editing");
    u = 1 - u;
    if (
      mybutton_two === null ||
      poetry1 === null ||
      resume === null ||
      mybutton_one === null ||
      mybutton_three === null ||
      editing === null
    )
      return;
    mybutton_two.style.backgroundColor = "#9fcce7";
    if (u === 1) {
      poetry1.style.display = "block";
      if (v === 1) {
        resume.style.display = "none";
        mybutton_one.style.backgroundColor = "#5faad7";
        v = 1 - v;
      }
      if (w === 1) {
        editing.style.display = "none";
        mybutton_three.style.backgroundColor = "#5faad7";
        w = 1 - w;
      }
    }
    if (u === 0) {
      poetry1.style.display = "none";
    }
  }

  function mybutton_three() {
    //same as above, but toggles editing instead of resume
    const mybutton_three = document.getElementById("my-button3");
    const mybutton_one = document.getElementById("my-button1");
    const mybutton_two = document.getElementById("my-button2");
    const editing = document.getElementById("editing");
    const resume = document.getElementById("resume");
    const poetry1 = document.getElementById("poetry1");
    w = 1 - w;
    if (
      mybutton_three === null ||
      editing === null ||
      resume === null ||
      poetry1 === null ||
      mybutton_one === null ||
      mybutton_two === null
    )
      return;
    mybutton_three.style.backgroundColor = "#9fcce7";
    if (w === 1) {
      editing.style.display = "block";
      if (v === 1) {
        resume.style.display = "none";
        mybutton_one.style.backgroundColor = "#5faad7";
        v = 1 - v;
      }
      if (u === 1) {
        poetry1.style.display = "none";
        mybutton_two.style.backgroundColor = "#5faad7";
        u = 1 - u;
      }
    }
    if (w === 0) {
      editing.style.display = "none";
    }
  }
  async function output() {
    //logs form information to console and clears form
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    if (input1 === null || input2 === null || input3 === null) return;
    console.log(name);
    console.log(email);
    console.log(on1540);
    console.log(isBuyer);
    name = "";
    email = "";
    on1540 = false;
    isBuyer = false;
    try {
      const response = await fetch("/api/notify-owner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("The website owner has been notified of your interaction.");
      } else {
        alert("There was an error, the owner could not be notified.");
      }
    } catch (error) {
      alert("A network error occurred. Please try again later.");
    }
  }
  export const prerender = true;
</script>

<h1 class="text-white font-mono font-semibold text-3xl mt-1.5 mb-1.5">
  Vikas Banerjee Murthy
</h1>
<em class="text-gray-400 font-mono text-sm">{discordUserState}</em>
<link rel="image" href={file_480} />
<div
  class="inline-flex flex-row gap-1 justify-between content-stretch w-full h-auto
 border-5 border-aroace-dark-blue rounded-lg
p-1 m-3 bg-aroace-dark-blue"
>
  <div
    class="inline-flex m-2 border-5 border-aroace-yellow rounded-full
    w-35 h-35 transition-[width, height] duration-750 ease-in-out
    shrink-0 overflow-hidden hover:w-65 hover:h-65"
    role="tooltip"
    id="file_480"
  >
    <img class="block object-cover" src={file_480} alt="" />
  </div>
  <div
    class="inline-flex flex-wrap justify-start content-around items-normal
    h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
   border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
  >
    <em>Vikas [also mr_lemoncello and Noa Ellis] - they/them</em>
    <p>
      I like lots of stuff, but I'm too lazy to write it all here. Here's a few
      for your troubles: poetry/writing, filmmaking, music, biking.
    </p>
    <p>English, ein bisschen Deutsch, 一点普通话&nbsp;</p>
    <p>:3</p>
  </div>
</div>
<div
  class="inline-flex flex-row gap-1 justify-between w-auto h-auto
 border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
>
  <my-button
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
     border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button1"
    tabindex="-1"
    onclick={mybutton_one}
    onkeydown={mybutton_one}
    onmouseover={() => change_color("my-button1", "#9FCCE7")}
    onfocus={() => change_color("my-button1", "#9FCCE7")}
    onmouseout={() => change_color("my-button1", "#5faad7")}
    onblur={() => change_color("my-button1", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono ms"
    >
      Resume
    </div>
  </my-button>
  <my-button
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button2"
    tabindex="-1"
    onclick={mybutton_two}
    onkeydown={mybutton_two}
    onmouseover={() => change_color("my-button2", "#9FCCE7")}
    onfocus={() => change_color("my-button2", "#9FCCE7")}
    onmouseout={() => change_color("my-button2", "#5faad7")}
    onblur={() => change_color("my-button2", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono ms"
    >
      Poetry Books
    </div>
  </my-button>
  <my-button
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button3"
    tabindex="-1"
    onclick={mybutton_three}
    onkeydown={mybutton_three}
    onmouseover={() => change_color("my-button3", "#9FCCE7")}
    onfocus={() => change_color("my-button3", "#9FCCE7")}
    onmouseout={() => change_color("my-button3", "#5faad7")}
    onblur={() => change_color("my-button3", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono ms"
    >
      Editing Projects
    </div>
  </my-button>
</div>
<br />

<img
  class="hidden m-2"
  id="resume"
  src={resume}
  width="500"
  height="auto"
  alt=""
/>

<div class="hidden m-2" id="poetry1">
  <p class="text-white font-mono text-xl">Book 1</p>

  <img src={poetry1} width="500" height="auto" alt="" />

  <br />
  <div class="inline text-red-600 font-mono text-base py-3 px-1">
    -50% Insecurity Discount:
  </div>
  <div class="inline text-white font-mono text-base p-1">
    <sup>$</sup>4<sup>99*</sup>
  </div>
  <br />
  <div class="inline text-white font-mono text-sm p-6">
    List Price:
    <span style="color:red;text-decoration:line-through">
      <span style="color:gray">$9.99</span>
    </span>
  </div>
</div>

<div class="hidden m-2" id="editing">
  <h2 class="text-white font-mono mt-3">Editing Projects</h2>
  <p class="text-white font-mono text-xl">
    Ink and Blood: The Lines That Divide Us
  </p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
  >
    <iframe
      title="Ink and Blood, The Lines That Divide Us"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/S4SFCWFjZcs"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
  >
    <iframe
      title="1844 FRC 2025 Season Recap"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/aNfTetDGJ7g"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
  >
    <iframe
      title="Meet 1844, The EGGINEERS!"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/sk3-40_Vvy0"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
  >
    <iframe
      title="1844 BunnyBots Recap"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/e7vN35rVPeI"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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

<h2 class="text-white font-mono mt-3">Contact</h2>

<div
  class="inline-flex flex-row gap-1 justify-between content-center w-full h-auto
 border-5 border-aroace-dark-blue rounded-lg
p-1 m-3 bg-aroace-dark-blue"
>
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input1"
  >
    Name:
  </span>
  <input type="text" bind:value={name} /><br />
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input2"
  >
    Email:
  </span>
  <input type="text" bind:value={email} /><br />
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input3"
  >
    On 1540?
  </span>
  <input type="checkbox" id="1540" bind:checked={on1540} /><label for="On 1540?"
  ></label>
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input3"
  >
    Interested in buying?
  </span>
  <input type="checkbox" bind:checked={isBuyer} /><label
    for="Interested in buying?"
  ></label>
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

<br /> <br /> <br /> <br />
<p class="text-white font-mono text-xs">*cash only</p>
<br /> <br /> <br />

<div
  id="footer"
  class="flex flex-column gap-4 fixed bottom-0 w-auto h-auto
   border-5 border-aroace-dark-blue rounded-lg
  p-4 m-4 bg-aroace-dark-blue transition-[width, height] duration-500 ease-in-out
  hover:scale-110"
  role="tooltip"
  onmouseover={() => change_color("footer", "#396488")}
  onfocus={() => change_color("footer", "#396488")}
  onmouseout={() => change_color("footer", "#1f3554")}
  onblur={() => change_color("footer", "#1f3554")}
>
  <div
    class="inline-flex justify-evenly content-normal text-white font-mono text-sm"
  >
    &copy; 2025 Vikas Banerjee Murthy. All rights reserved. Contact me at:&nbsp;
    <a
      class="text-aroace-light-blue hover:underline"
      href="mailto:vikasarino@gmail.com">vikasarino@gmail.com</a
    >
  </div>
</div>

<style>
  :global(body) {
    background-color: #1c1c1e;
    margin: 40px;
  }
</style>
