<script lang="ts">
    let { active = "home" } = $props();
</script>

<div
    class="text-white font-[PrestigeElite] bg-[rgba(13,16,18,0.5)] overflow-visible flex flex-row-reverse items-center z-10"
>
    <div class="absolute left-10 group">
        <a
            href="/"
            target="_self"
            class="text-[20px] text-white py-3.5 px-4 flex items-center gap-1 hover:bg-[rgba(140,179,223,0.7)] no-underline! hover:no-underline!"
        >
            <span
                class={`no-underline ${
                    ["resume", "contact"].includes(active)
                        ? "underline underline-offset-8"
                        : ""
                }`}
            >
                Vikas Banerjee Murthy
            </span>
            <em class="text-[20px] fa fa-caret-down"></em>
        </a>

        <div
            class="absolute left-0 hidden min-w-40 bg-[#f9f9f9] shadow-lg group-hover:block z-10"
        >
            <a
                href="/resume"
                class="block px-4 py-3 text-[#1C1C1C]! hover:bg-gray-300 no-underline! hover:no-underline! visited:text-[#1C1C1C]!"
            >
                Resume
            </a>
            <a
                href="/contact"
                class="block px-4 py-3 text-[#1C1C1C]! hover:bg-gray-300 no-underline! hover:no-underline! visited:text-[#1C1C1C]!"
            >
                Contact
            </a>
        </div>
    </div>

    <!-- Creative -->
    <div class="relative group">
        <a
            href="/"
            target="_self"
            class="text-[20px] text-white py-3.5 px-4 flex items-center gap-1 hover:bg-[rgba(140,179,223,0.7)] no-underline! hover:no-underline!"
        >
            <span
                class={`no-underline ${
                    ["poetry", "published", "progr"].includes(active)
                        ? "underline underline-offset-8"
                        : ""
                }`}
            >
                Creative Endeavors
            </span>
            <em class="text-[20px] fa fa-caret-down"></em>
        </a>

        <div
            class="absolute right-0 hidden min-w-40 bg-[#f9f9f9] shadow-lg group-hover:block z-10"
        >
            <a
                href="/poetry"
                class="block px-4 py-3 text-[#1C1C1C]! hover:bg-gray-300 no-underline! hover:no-underline! visited:text-[#1C1C1C]!"
            >
                Poetry Books
            </a>
            <a
                href="/published"
                class="block px-4 py-3 text-[#1C1C1C]! hover:bg-gray-300 no-underline! hover:no-underline! visited:text-[#1C1C1C]!"
            >
                Published Work
            </a>
            <a
                href="/programming"
                class="block px-4 py-3 text-[#1C1C1C]! hover:bg-gray-300 no-underline! hover:no-underline! visited:text-[#1C1C1C]!"
            >
                Programming
            </a>
        </div>
    </div>

    <div class="relative group">
        <a
            href="/filmmaking"
            target="_self"
            class="text-[20px] text-white py-3.5 px-4 flex items-center gap-1 hover:bg-[rgba(140,179,223,0.7)] no-underline! hover:no-underline!"
        >
            <span
                class={`no-underline ${
                    active === "filmmaking"
                        ? "underline underline-offset-8"
                        : ""
                }`}
            >
                Filmmaking
            </span>
        </a>
    </div>
</div>