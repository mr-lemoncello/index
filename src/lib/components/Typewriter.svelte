<script lang="ts">
  import { onMount } from "svelte";
  
  onMount (() => {
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
  });
</script>

<div class="relative">
  <p
    id="typewriter-ghost"
    data-typewriter
    class="invisible typewriter container w-full m-3 pr-40 pt-12 pb-8 font-[VerilySerif] text-white"
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
    class="absolute inset-0 container w-full m-3 pr-40 pt-8 pb-8 font-[VerilySerif] text-white"
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

<hr class="bg-white h-px my-8 border-0.5 border-white opacity-70" />