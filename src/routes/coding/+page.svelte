<script lang="ts">
    import Team1540 from "$lib/assets/team1540.png"
    import MrLemoncello from "$lib/assets/mr-lemoncello.png"
    import Catan from "$lib/assets/catan.jpg"
    
    import Coding from "$lib/components/Coding.svelte";
    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    type Code = {
        title: string;
        image: string;
        github: string;
        link: string;
        description: string;
    };

    const codes: Code[] = [
        {
            title: "1540website",
            image: Team1540,
            github: "https://github.com/flamingchickens1540/1540website",
            link: "",
            description: "Catlin Gabel's Engineering program is among the largest extracurricular activities on campus with around 20% of the student body taking part",
        },
        {
            title: "mr-lemoncello.github.io",
            image: MrLemoncello,
            github: "https://github.com/mr-lemoncello/mr-lemoncello.github.io",
            link: "https://mr-lemoncello.github.io/",
            description: "my personal website! you're here right now! :3.",
        },
        {
            title: "Catan",
            image: Catan,
            github: "https://github.com/mr-lemoncello/catan",
            link: "https://cs.catlin.edu/catan",
            description:
                "Online multiplayer Settlers of Catan, a popular Eurogame where players build settlements, cities, and roads on a fictional island",
        },
        {
            title: "Catena",
            image: "",
            github: "https://github.com/mr-lemoncello/catena",
            link: "",
            description:
                "Portal and file-sharing app for media members of First Robotics Competition PNW",
        },
    ];
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="coding" />

<section class="m-2" id="coding">
    <h2 class="heading">Coding Projects</h2>
    {#each codes as code}
        <Coding
            title={code.title}
            image={code.image}
            github={code.github}
            link={code.link}
            description={code.description}
        />
    {/each}
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
