<script lang="ts">
    import Destination from "$lib/components/Destination.svelte";
    import StateoftheCreek from "$lib/components/State of the Creek.svelte";
    import TheShadowsWalkAgain from "$lib/components/The Shadows Walk Again.svelte";

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
    import poetry7 from "$lib/assets/poetry7.webp";
    import poetry7back from "$lib/assets/poetry7back.webp";
    import poetry8 from "$lib/assets/poetry8.webp";
    import poetry8back from "$lib/assets/poetry8back.webp";
    import BookCard from "$lib/components/BookCard.svelte";

    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

     type Book = {
        title: string;
        front: string;
        back: string;
        pages: string;
        description: string;
    };

    const books: Book[] = [
        {
            title: "Book 8: Wingless Crows; Lead Messengers",
            front: poetry8,
            back: poetry8back,
            pages: "29 pages",
            description:
                "On ruin, memory, and the persistence of love amid violence and decay",
        },
        {
            title: "Book 7: I Used to Float",
            front: poetry7,
            back: poetry7back,
            pages: "21 pages",
            description:
                "On the search for connection and selfhood in a fractured world",
        },
        {
            title: "Book 6: Bridges in Low Light",
            front: poetry6,
            back: poetry6back,
            pages: "15 pages",
            description: "On the highs and lows of urban living",
        },
        {
            title: "Book 5: Love Letters",
            front: poetry5,
            back: poetry5back,
            pages: "35 pages",
            description: "On love, existentialism, and cathartic release",
        },
        {
            title: "Book 4: Seeds in Ash",
            front: poetry4,
            back: poetry4back,
            pages: "19 pages",
            description: "On isolation , redeption, and resilience",
        },
        {
            title: "Book 3: Burnt into Being",
            front: poetry3,
            back: poetry3back,
            pages: "17 pages",
            description: "On rage, revolution, and the fire that inspires us",
        },
        {
            title: "Book 2: Through the Fingers",
            front: poetry2,
            back: poetry2back,
            pages: "23 pages",
            description: "On moments of shock and hopelessness",
        },
        {
            title: "Book 1: Of the Other Shore",
            front: poetry1,
            back: poetry1back,
            pages: "11 pages",
            description: "On grief, loss, and hope things will get better",
        },
    ];
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="writing"/>

<section class="mx-2 mt-2 mb-10" id="published">
    <h2 class="heading">Published Work</h2>
    <TheShadowsWalkAgain/>
    <Destination />
    <StateoftheCreek />
</section>

<section class="m-2" id="poetry">
    <h2 class="heading">Poetry Books</h2>

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

<Footer/>

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
