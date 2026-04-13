<script lang="ts">
    import { animate } from "animejs";
    import Promotion from "$lib/assets/8thGradePromotion-19.jpg"

    let wrapper!: HTMLDivElement;
    let isOpen = false;

    function toggle() {
        if (!isOpen) {
            wrapper.style.display = "block";
            wrapper.style.height = "0px";
            wrapper.style.opacity = "0";

            requestAnimationFrame(() => {
                const contentHeight = wrapper.scrollHeight;

                animate(wrapper, {
                    height: [0, contentHeight],
                    opacity: [0, 1],
                    duration: 500,
                    easing: "easeInOutQuad",
                    complete: () => {
                        wrapper.style.height = "auto"; // allow auto growth
                    },
                });
            });
        } else {
            const contentHeight = wrapper.scrollHeight;

            animate(wrapper, {
                height: [contentHeight, 0],
                opacity: [1, 0],
                duration: 400,
                easing: "easeInOutQuad",
                complete: () => {
                    wrapper.style.display = "none";
                },
            });
        }

        isOpen = !isOpen;

        animate(".toggle-icon", {
            rotate: isOpen ? 180 : 0,
            duration: 400,
            easing: "easeInOutQuad",
        });
    }
</script>

<div class="mx-auto">
    <button
        onclick={toggle}
        class="w-full text-left py-2 flex justify-between items-center"
    >
        <span class="text-white font-[PrestigeElite] text-xl">
            <em>The Shadows Walk Again</em> - Published Jun 2025
        </span>
        <span
            class="toggle-icon text-white font-[PrestigeElite] text-xl cursor-pointer"
        >
            {isOpen ? "−" : "+"}
        </span>
    </button>

    <div bind:this={wrapper} class="overflow-hidden mt-2" style="display:none;">
        <p class="with-margin-text">
            Published by <a
                class="text-aroace-light-blue"
                href="https://www.instagram.com/p/DLAtD0-g4-B/?img_index=1"
                target="_blank">Catlin Gabel School</a
            >
        </p>

        <img src={Promotion} alt="8th Grade Promotion"/>

        <p class="no-margin-text mt-2">In ink and ash, the panels sigh:</p>
        <p class="no-margin-text">A mouse with haunted, hollow eye.</p>
        <p class="no-margin-text">He walks the wire of memory’s thread</p>
        <p class="with-margin-text">Among the whispers of the dead.</p>

        <p class="no-margin-text">The boots, the gas, the freighted trains,</p>
        <p class="no-margin-text">
            The barbed-wire truths, the numbered names,
        </p>
        <p class="no-margin-text">Lie not in books alone to sleep,</p>
        <p class="with-margin-text">But stir when silence oversteeps.</p>

        <p class="no-margin-text">The past, we think, is locked away,</p>
        <p class="no-margin-text">A ghost that only speaks in grey.</p>
        <p class="no-margin-text">But here, the footsteps sound anew,</p>
        <p class="with-margin-text">A march familiar in its cue.</p>

        <p class="no-margin-text">They come with flags and borrowed lies,</p>
        <p class="no-margin-text">With sharpened tongues and gleaming ties.</p>
        <p class="no-margin-text">They point and blame, they shout and chant</p>
        <p class="with-margin-text">The old disease in modern slant.</p>

        <p class="no-margin-text">And still, we teach, and still we pray</p>
        <p class="no-margin-text">That warnings carved in blood will stay.</p>
        <p class="no-margin-text">But memory fades, and comfort breeds</p>
        <p class="with-margin-text">The fertile ground for ancient seeds.</p>

        <p class="no-margin-text">So read the tale, and read it twice:</p>
        <p class="no-margin-text">Each frame a toll, each word a price.</p>
        <p class="no-margin-text">For what we draw, and what we learn,</p>
        <p class="with-margin-text">Means little if the world won't turn.</p>

        <p class="no-margin-text">Until we see, not just recall</p>
        <p class="no-margin-text">That anyone can build the wall.</p>
        <p class="no-margin-text">And every age, in turn, must choose</p>
        <p class="no-margin-text">o fight the fire, or light the fuse.</p>
        <br />
    </div>
</div>
