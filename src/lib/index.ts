let a1 = 0;
let a2 = 0;
let a3 = 0;
let b1 = 0;
let b2 = 0;
let b3 = 0;
let i = 0;
let j = 0;
let name = "";
let email = "";
let on1540 = false;
let isBuyer = false;
let time = 0;

// returns 0 → night, 1 → noon
export function getDayFactor(time: number) {
  const result = (Math.cos((time / 10) * Math.PI) + 1) / 2;
  console.log(result);
  return result;
}

export const interval = setInterval(() => {
  time = time + 1;

  const dayFactor = getDayFactor(time);

  State.update(state => ({
    ...state,
    dayFactor
  }));
}, 1000);

export function change_color(name: string, color: string) {
    const fn_name = document.getElementById(name);
    if (fn_name === null) return;
    if (name == "my-button-a1" && a1 == 1) return; //unless element is my-button-a1 and toggled
    if (name == "my-button-a2" && a2 == 1) return;
    if (name == "my-button-a3" && a3 == 1) return;
    if (name == "my-button-b1" && b1 == 1) return;
    if (name == "my-button-b2" && b2 == 1) return;
    if (name == "my-button-b3" && b3 == 1) return;
    fn_name.style.backgroundColor = color; //changes HTMLElement background color to desired
}

export function toggle(id: string, counterid: string, front: boolean) {
    const fn_id = document.getElementById(id);
    const fn_counterid = document.getElementById(counterid);
    if (fn_id === null || fn_counterid === null) return;
    const dfn_id = document.getElementById(fn_id.id + "d");
    const dfn_counterid = document.getElementById(fn_counterid.id + "d");
    if (dfn_id === null || dfn_counterid === null) return;
    fn_id.style.filter = "brightness(120%)";
    dfn_id.style.display = "block";
    dfn_counterid.style.display = "none";
    if (front === true) {
        i = 1;
        if (j === 1) {
            fn_counterid.style.filter = "brightness(100%)";
            j = 0;
        }
    } else {
        j = 1;
        if (i === 1) {
            fn_counterid.style.filter = "brightness(100%)";
            i = 0;
        }
    }
}

export function mybutton_a1() {
    //toggles between highlighted, showing the resume and unhilighted, hiding the resume
    const mybutton_a1 = document.getElementById("my-button-a1");
    const mybutton_a2 = document.getElementById("my-button-a2");
    const mybutton_a3 = document.getElementById("my-button-a3");
    const resume = document.getElementById("resume");
    const poetry = document.getElementById("poetry");
    const published = document.getElementById("published");
    a1 = 1 - a1;
    if (
        mybutton_a1 === null ||
        resume === null ||
        poetry === null ||
        mybutton_a2 === null ||
        mybutton_a3 === null ||
        published === null
    )
        return;
    mybutton_a1.style.backgroundColor = "#9fcce7";
    if (a1 === 1) {
        resume.style.display = "block";
        if (a2 === 1) {
            poetry.style.display = "none";
            mybutton_a2.style.backgroundColor = "#5faad7";
            a2 = 1 - a2;
        }
        if (a3 === 1) {
            published.style.display = "none";
            mybutton_a3.style.backgroundColor = "#5faad7";
            a3 = 1 - a3;
        }
    }
    if (a1 === 0) {
        resume.style.display = "none";
    }
}

export function mybutton_a2() {
    //same as above, but toggles poetry books instead of resume
    const mybutton_a2 = document.getElementById("my-button-a2");
    const mybutton_a1 = document.getElementById("my-button-a1");
    const mybutton_a3 = document.getElementById("my-button-a3");
    const poetry = document.getElementById("poetry");
    const resume = document.getElementById("resume");
    const published = document.getElementById("published");
    a2 = 1 - a2;
    if (
        mybutton_a2 === null ||
        poetry === null ||
        resume === null ||
        mybutton_a1 === null ||
        mybutton_a3 === null ||
        published === null
    )
        return;
    mybutton_a2.style.backgroundColor = "#9fcce7";
    if (a2 === 1) {
        poetry.style.display = "block";
        if (a1 === 1) {
            resume.style.display = "none";
            mybutton_a1.style.backgroundColor = "#5faad7";
            a1 = 1 - a1;
        }
        if (a3 === 1) {
            published.style.display = "none";
            mybutton_a3.style.backgroundColor = "#5faad7";
            a3 = 1 - a3;
        }
    }
    if (a2 === 0) {
        poetry.style.display = "none";
    }
}

export function mybutton_a3() {
    //same as above, but toggles published work instead of resume
    const mybutton_a3 = document.getElementById("my-button-a3");
    const mybutton_a1 = document.getElementById("my-button-a1");
    const mybutton_a2 = document.getElementById("my-button-a2");
    const poetry = document.getElementById("poetry");
    const resume = document.getElementById("resume");
    const published = document.getElementById("published");
    a3 = 1 - a3;
    if (
        mybutton_a3 === null ||
        poetry === null ||
        resume === null ||
        mybutton_a1 === null ||
        mybutton_a2 === null ||
        published === null
    )
        return;
    mybutton_a3.style.backgroundColor = "#9fcce7";
    if (a3 === 1) {
        published.style.display = "block";
        if (a1 === 1) {
            resume.style.display = "none";
            mybutton_a1.style.backgroundColor = "#5faad7";
            a1 = 1 - a1;
        }
        if (a2 === 1) {
            poetry.style.display = "none";
            mybutton_a2.style.backgroundColor = "#5faad7";
            a2 = 1 - a2;
        }
    }
    if (a3 === 0) {
        published.style.display = "none";
    }
}

export function mybutton_b1() {
    //same as above, but toggles editing instead of resume
    const mybutton_b1 = document.getElementById("my-button-b1");
    const mybutton_b2 = document.getElementById("my-button-b2");
    const mybutton_b3 = document.getElementById("my-button-b3");
    const editing = document.getElementById("editing");
    const essays = document.getElementById("essays");
    b1 = 1 - b1;
    if (
        mybutton_b1 === null ||
        editing === null ||
        mybutton_b2 === null ||
        mybutton_b3 === null ||
        essays === null
    )
        return;
    mybutton_b1.style.backgroundColor = "#9fcce7";
    if (b1 === 1) {
        editing.style.display = "block";
        if (b3 === 1) {
            mybutton_b3.style.backgroundColor = "#5faad7";
            b3 = 1 - b3;
        }
        if (b2 === 1) {
            essays.style.display = "none";
            mybutton_b2.style.backgroundColor = "#5faad7";
            b2 = 1 - b2;
        }
    }
    if (b1 === 0) {
        editing.style.display = "none";
    }
}

export function mybutton_b2() {
    //same as above, but toggles essays instead of resume
    const mybutton_b2 = document.getElementById("my-button-b2");
    const mybutton_b1 = document.getElementById("my-button-b1");
    const mybutton_b3 = document.getElementById("my-button-b3");
    const editing = document.getElementById("editing");
    const essays = document.getElementById("essays");
    b2 = 1 - b2;
    if (
        mybutton_b2 === null ||
        editing === null ||
        mybutton_b3 === null ||
        mybutton_b1 === null ||
        essays === null
    )
        return;
    mybutton_b2.style.backgroundColor = "#9fcce7";
    if (b2 === 1) {
        essays.style.display = "block";
        if (b3 === 1) {
            mybutton_b3.style.backgroundColor = "#5faad7";
            b3 = 1 - b3;
        }
        if (b1 === 1) {
            editing.style.display = "none";
            mybutton_b1.style.backgroundColor = "#5faad7";
            b1 = 1 - b1;
        }
    }
    if (b2 === 0) {
        essays.style.display = "none";
    }
}

export function mybutton_b3() {
    //same as above, but toggles essays instead of resume
    const mybutton_b3 = document.getElementById("my-button-b3");
    const mybutton_b1 = document.getElementById("my-button-b1");
    const mybutton_b2 = document.getElementById("my-button-b2");
    const editing = document.getElementById("editing");
    const essays = document.getElementById("essays");
    b3 = 1 - b3;
    if (
        mybutton_b3 === null ||
        editing === null ||
        mybutton_b2 === null ||
        mybutton_b1 === null ||
        essays === null
    )
        return;
    mybutton_b3.style.backgroundColor = "#9fcce7";
    if (b3 === 1) {
        if (b2 === 1) {
            essays.style.display = "none";
            mybutton_b2.style.backgroundColor = "#5faad7";
            b2 = 1 - b2;
        }
        if (b1 === 1) {
            editing.style.display = "none";
            mybutton_b1.style.backgroundColor = "#5faad7";
            b1 = 1 - b1;
        }
    }
    if (b3 === 0) {
    }
}

export async function output() {
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
        const response = await fetch("api/notify-owner", {
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

import blindsided_surveillance from "$lib/assets/blindedsided_surveillance.mp3";
import crows_at_duskfall from "$lib/assets/Crows at Duskfall.mp3";
import film_soundtrack from "$lib/assets/Flim Soundtrack.mp3";
import for_my_own_sake from "$lib/assets/For My Own Sake.mp3";
import garageband_blues from "$lib/assets/GarageBand Blues.mp3";
import garageille_o_neal from "$lib/assets/Garageille O_Neal.mp3";
import garlic_bread_on_venus from "$lib/assets/Garlic Bread on Venus.mp3";
import i_wash_the_sheets from "$lib/assets/I Wash The Sheets.mp3";
import lord_of_the_flies_chapter_one from "$lib/assets/lotf chapter 1.mp3";
import monotony from "$lib/assets/Monotony.mp3";
import no_vows_no_veins from "$lib/assets/No Vows, No Veins.mp3";
import pain_shame_memories from "$lib/assets/Pain, Shame, Memories.mp3";
import roll_credits from "$lib/assets/credits theme.mp3";
import serenade_of_confession from "$lib/assets/Serenade of Confession.mp3";
import spirals_and_stars from "$lib/assets/Spirals and Stars.mp3";
import the_threads from "$lib/assets/The Threads.mp3";
import tungsten_rain from "$lib/assets/Tungsten Rain.mp3";

class Particle {
  x!: number;
  y!: number;
  s!: number;
  spd!: number;
  off!: number;

  constructor() {
    const canvas = document.getElementById(
      "particleCanvas",
    ) as HTMLCanvasElement | null;
    if (canvas === null) return;

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.s = Math.floor(Math.random() * 5); // Size (0 or 1)
    this.spd = 0.25 + Math.random() * 5; // Speed (between 0.25 and 5.25)
    this.off = Math.random(); // Offset (for sine movement)
  }

  update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    if (ctx === null || canvas === null) return;

    // Update positions
    this.x += this.spd;
    this.y += Math.sin(this.off);
    this.off += 0.05 < this.spd / 32 ? 0.05 : this.spd / 32;

    // Draw the particle
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.s, this.s);

    // Reset if the particle goes off-screen
    if (this.x > canvas.width + 4) {
      this.x = -4;
      this.y = Math.random() * canvas.height;
    }
  }
}

function setSong(newSong: string) {
    State.update(s => ({ ...s, song: newSong }));
}

let discordUserState = "null";

export async function initPage() {
  try {
    const response = await fetch(
      `https://api.lanyard.rest/v1/users/1250607214180438016`,
    );
    const data = await response.json();
    discordUserState = data.data.activities[0]?.state;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }

  // Canvas setup
  const canvas = document.getElementById(
    "particleCanvas",
  ) as HTMLCanvasElement | null;

  if (canvas !== null) {
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      if (canvas !== null) {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
      }
    }

    resizeCanvas();

    let previousScrollHeight = document.body.scrollHeight;

    setInterval(() => {
      if (document.body.scrollHeight !== previousScrollHeight) {
        console.log("scroll height change");
        resizeCanvas();
        previousScrollHeight = document.body.scrollHeight;
      }
    }, 200);

    const particles: Particle[] = [];

    particles.length = 0;
    for (
      let i = 0;
      i < Math.floor((canvas.width * canvas.height) / 28400);
      i++
    ) {
      particles.push(new Particle());
    }

    if (ctx !== null) {
      function animate(): void {
        if (canvas === null || ctx === null) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let p of particles) {
          p.update(ctx, canvas);
        }
        requestAnimationFrame(animate);
      }

      animate();
    }
  }
  const playlist = [
    blindsided_surveillance,
    crows_at_duskfall,
    film_soundtrack,
    for_my_own_sake,
    garageband_blues,
    garageille_o_neal,
    garlic_bread_on_venus,
    i_wash_the_sheets,
    lord_of_the_flies_chapter_one,
    monotony,
    no_vows_no_veins,
    pain_shame_memories,
    roll_credits,
    serenade_of_confession,
    spirals_and_stars,
    the_threads,
    tungsten_rain,
  ];
  let currentTrackIndex = 0;
  const audioPlayer = document.getElementById(
    "myAudioPlayer",
  ) as HTMLAudioElement | null;

  function playCurrentTrack() {
    if (audioPlayer === null) return;
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.addEventListener("play", function () {
      if (currentTrackIndex == 0) {
        setSong("Blindsided Surveillance - Vikas Banerjee Murthy");
      }
    });
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise;
    }
  }

    function playNext() {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
      currentTrackIndex = 0;
    }
    if (currentTrackIndex == 0)
      setSong("Blindsided Surveillance - Vikas Banerjee Murthy");
    if (currentTrackIndex == 1)
      setSong("Crows at Duskfall - Vikas Banerjee Murthy");
    if (currentTrackIndex == 2)
      setSong("Film Soundtrack - Vikas Banerjee Murthy");
    if (currentTrackIndex == 3)
      setSong("For My Own Sake - Vikas Banerjee Murthy");
    if (currentTrackIndex == 4)
      setSong("GarageBand Blues - Vikas Banerjee Murthy");
    if (currentTrackIndex == 5)
      setSong("Garageille O'Neal - Vikas Banerjee Murthy");
    if (currentTrackIndex == 6)
      setSong("Garlic Bread on Venus - Vikas Banerjee Murthy");
    if (currentTrackIndex == 7)
      setSong("I Wash the Sheets - Vikas Banerjee Murthy");
    if (currentTrackIndex == 8)
      setSong("Lord of the Flies: Chapter 1 - Vikas Banerjee Murthy");
    if (currentTrackIndex == 9) setSong("Monotony - Vikas Banerjee Murthy");
    if (currentTrackIndex == 10)
      setSong("No Vows, No Veins - Vikas Banerjee Murthy");
    if (currentTrackIndex == 11)
      setSong("Pain, Shame, Memories - Vikas Banerjee Murthy");
    if (currentTrackIndex == 12)
      setSong("Roll Credits - Vikas Banerjee Murthy");
    if (currentTrackIndex == 13)
      setSong("Serenade of Confession - Vikas Banerjee Murthy");
    if (currentTrackIndex == 14)
      setSong("Spirals and Stars - Vikas Banerjee Murthy");
    if (currentTrackIndex == 15) setSong("The Threads - Vikas Banerjee Murthy");
    if (currentTrackIndex == 16)
      setSong("Tungsten Rain - Vikas Banerjee Murthy");

    playCurrentTrack();
  }

  if (audioPlayer !== null) {
    audioPlayer.addEventListener("ended", playNext);
  }

  playCurrentTrack();

  const fadeInOnScroll = () => {
    const sections = document.querySelectorAll(".fade-in-scroll");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top + 100 < window.innerHeight && rect.bottom > 100) {
        section.classList.add("in-view");
        section.classList.remove("not-in-view");
      } else {
        section.classList.remove("in-view");
        section.classList.add("not-in-view");
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);

  const root = document.getElementById("typewriter") as HTMLElement;
  const ghost = document.getElementById("typewriter-ghost") as HTMLElement;

  const originalNodes = Array.from(ghost.childNodes);
  root.innerHTML = "";
  root.classList.add("typewriter-caret");

  type Frame = {
    node: ChildNode;
    parent: HTMLElement;
  };

  const queue: Frame[] = originalNodes.map((node) => ({
    node,
    parent: root,
  }));

  let currentText: Text | null = null;
  let currentParent: HTMLElement | null = null;
  let charIndex = 0;
  let skipped = false;

  const skip = () => {
    if (skipped) return;
    skipped = true;

    root.remove();
    ghost.classList.remove("invisible");
  };

  ["click", "keydown", "touchstart"].forEach((evt) =>
    window.addEventListener(evt, skip, { once: true }),
  );

  function type(): void {
    if (skipped) return;
    if (!currentText && queue.length === 0) {
      return;
    }

    if (!currentText) {
      const frame = queue.shift()!;
      const node = frame.node;

      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const clone = el.cloneNode(false) as HTMLElement;
        frame.parent.appendChild(clone);

        const children = Array.from(el.childNodes).map((child) => ({
          node: child,
          parent: clone,
        }));

        queue.unshift(...children);

        const pause = el.className.includes("pb-[") ? 600 : 0;
        setTimeout(type, pause);
        return;
      }

      if (node.nodeType === Node.TEXT_NODE) {
        currentText = node as Text;
        currentParent = frame.parent;
        charIndex = 0;
      }
    }

    if (currentText && currentParent) {
      const text = currentText.textContent ?? "";
      if (charIndex < text.length) {
        currentParent.append(text[charIndex++]);
      } else {
        currentText = null;
        currentParent = null;
      }
    }

    setTimeout(type, 25);
  }

  type();
};

export async function fetchDiscordStatus(fetchFn: typeof fetch) {
  try {
    const response = await fetchFn(
      'https://api.lanyard.rest/v1/users/1250607214180438016'
    );
    const data = await response.json();

    return {
      discordUserState: data?.data?.activities?.[0]?.state ?? null
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      discordUserState: null
    };
  }
}

import { writable } from "svelte/store";

export const State = writable({
    name: "",
    email: "",
    on1540: false,
    isBuyer: false,
    dayFactor: 0,
    song: "none",
});