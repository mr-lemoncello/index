<script lang="ts">
    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    const films = [
        {
            runtime: "19 min",
            title: "Borrowed Time",
            description:
                "On the final evening before a neighborhood library permanently closes, a veteran librarian struggles to usher out the last patrons, each silently relying on the building as far more than a place to borrow books.",
        },
        {
            runtime: "4 min",
            title: "Closing Shift",
            description:
                "As a school cafeteria prepares for inspection, a meticulous kitchen manager and a newly hired substitute find unexpected companionship in the rhythms of an ordinary night's work.",
        },
        {
            runtime: "4 min",
            title: "The Last Train",
            description:
                "After missing the final train home, a stranded commuter spends the night with a handful of strangers whose shared delay reveals the unseen ways public spaces sustain lives in transition.",
        },
        {
            runtime: "3 min",
            title: "Yellow Line",
            description:
                "When a train conductor notices a lone passenger lingering on the platform's edge, a routine safety check becomes a conversation about despair, duty, and the choice to step back from the brink.",
        },
    ];
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="filmmaking" />
<section class="m-2" id="filmmaking">
    <header class="flex flex-col justify-center">
        <h2 class="heading">
            <em>Borrowed Time</em> & The Civic Spaces Film Project
        </h2>
        <p class="mt-1 mb-1 pb-2 font-[PrestigeElite] text-xl text-white">
            An anthology of four narrative shorts exploring the workers and
            civic institutions that sustain everyday life—with an interest in
            the quiet ways public institutions shape belonging, resilience, and
            human connection.
        </p>
    </header>

    <section class="mt-8">
        {#each films as film, i}
            <article class="film mb-12">
                <div
                    class="flex flex-col gap-1 md:flex-row md:items-end md:justify-between"
                >
                    <h2
                        class="font-[PrestigeElite] text-4xl md:text-6xl text-white"
                    >
                        <em>{film.title}</em>
                    </h2>

                    <p class="font-[PrestigeElite] text-xl text-white">
                        {film.runtime}
                    </p>
                </div>

                <div
                    class="mt-3 max-w-4xl rounded-lg border-5 border-aroace-dark-blue bg-[hsl(215.09_46.09%_22.55%)] p-1"
                >
                    <div
                        class="rounded-lg border-5 border-aroace-orange bg-aroace-light-blue p-3 font-[PrestigeElite] text-lg text-aroace-dark-blue"
                    >
                        <p class="mb-0">
                            {film.description}
                        </p>
                    </div>
                </div>
            </article>
        {/each}
    </section>

    <section class="mt-16 mb-8">
        <h2 class="font-[PrestigeElite] text-3xl text-white">
            Project Materials
        </h2>

        <div
            class="mt-3 rounded-lg border-5 border-aroace-dark-blue bg-[hsl(215.09_46.09%_22.55%)] p-1"
        >
            <div
                class="rounded-lg border-5 border-aroace-orange bg-aroace-light-blue p-3 font-[PrestigeElite] text-xl text-aroace-dark-blue"
            >
                <a
                    href="https://docs.google.com/document/d/1efylrEDEslFKrllYmndPQ2qyoiXfW8K85ZPKYH-6zws/edit?tab=t.0#heading=h.je49gvhum10s"
                    class="text-hyperlink!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Artistic Statement
                </a>
                <br />

                <a
                    href="https://docs.google.com/document/d/1EWl-wSNUgQZeAQhy_PWq5lMqIoTW6rFPuVftpUt6cDk/edit?tab=t.0"
                    class="text-hyperlink!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Creative Team
                </a>
                <br />

                <a
                    href="https://docs.google.com/document/d/1D6hVCAeEdCwi7JirJFTWhiNfl-3MVhP6u9dMGgKPoBE/edit?tab=t.0#heading=h.146r3sk4wg1e"
                    class="text-hyperlink!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Equipment Inventory & Budget
                </a>
                <br />

                <a
                    href="https://docs.google.com/document/d/1NVcNVIjhx34sj2L3v8hZuTbfA-mQDyTi0pIp_t5Xs7c/edit?tab=t.0#heading=h.f891a82w4374"
                    class="text-hyperlink!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Marketing & Distribution Plan
                </a>
            </div>
        </div>
    </section>
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
