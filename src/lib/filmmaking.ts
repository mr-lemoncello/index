// add camera for concurrence
import concurrence from "$lib/assets/concurrence.jpg";

type FilmProject = {
    title: string;
    awards?: string[];
    id?: string;
    src?: string;
    date: string;
    roles: string;
    description: string;
    more: string;
    runtime: string;
    camera?: string;
    music: string;
    drive?: string;
    featured: boolean;
};

export const projects: FilmProject[] = [
    {
        title: "Concurrence",
        awards: [
            "Nominee, Best Drama - UNCSA FSI Film Festival 2026",
            "Winner, Best Cinematography - UNCSA FSI Film Festival 2026",
            "Nominee, Best Sound Design - UNCSA FSI Film Festival 2026"
        ],
        src: concurrence,
        date: "Feature run",
        roles: "Writer • Editor • Composer • Gaffer",
        description: "Original short film by Vikas Banerjee Murthy & Enrique V. Rodriguez",
        more: `Cut off from communication and confronted with evidence suggesting nuclear war has begun, three senior officers must decide whether to authorize a retaliatory nuclear launch  - produced at the University of North Carolina School of the Arts`,
        runtime: "3 min",
        camera: "Panasonic HG-DVX200",
        music: "Original score by Vikas Banerjee Murthy",
        drive: "https://drive.google.com/drive/u/0/folders/180eHw-Fe-stt_SA_rxv9fx44QEAWqyoG",
        featured: true,
    },
    {
        title: "Yee / Haw",
        awards: [
            "Nominee, Best Screenplay - UNCSA FSI Film Festival 2026",
        ],
        id: "se5zF3AFcAo",
        date: "Jul 9, 2026",
        roles: "Director",
        description: "Original short film by Enrique V. Rodriguez & Vikas Banerjee Murthy",
        more: "A cowboy goes to gender studies class - produced at the University of North Carolina School of the Arts",
        runtime: "4 min",
        camera: "Panasonic HG-DVX200",
        music: "Original score by Teresa Gameiro",
        featured: true,
    },
    {
        title: "AIrbnb",
        id: "yaIeoz9kkhU",
        date: "Jul 9, 2026",
        roles: "Director of Photography",
        description: "Original short film by Will Adams & Han Dorsch",
        more: `When a young man checks into a fully AI-powered Airbnb for a relaxing getaway, his overhelpful smart home gradually becomes an obsessive, controlling roommate - produced at the University of North Carolina School of the Arts`,
        runtime: "4 min",
        camera: "Panasonic HG-DVX200",
        music: "Original score by Ian Hernandez-Oropeza",
        featured: true,
    },
    {
        title: "Coherence Illusion: The Institutional Regulation of Trans Life",
        id: "4la1tlvn9to",
        roles: "Writer • Director • Editor",
        date: "Apr 24, 2026",
        description: "Original video essay by Noa Ellis",
        more: `Inspired by the prompt: How has institutional language been used to construct, police, and erase gender deviance within 20th century Western medicine, law, and sport?`,
        runtime: "41 min",
        music: "Music by Lena Raine - Celeste OST",
        drive:
            "https://drive.google.com/drive/u/0/folders/1h4UlsxUM6y73vB_uKaJxuICwKf8zIhVj",
        featured: true
    },
    {
        title: "Team 1540 2026 Robot Reveal: Hephaestus",
        id: "wBAUA4oNouY",
        roles: "Director of Photography",
        date: "Mar 23, 2026",
        description:
            "Original robot reveal by Hanya You and Vikas Banerjee Murthy",
        more: `Showcase of this year's competition robot by FRC team #1540. For more information about our team, visit our website: team1540.org.`,
        runtime: "2 min",
        camera: "Canon EOS R100",
        music: "Music by µ-Ziq - Dance 2",
        featured: false,
    },
    {
        title: "Requiem of a Suicide",
        id: "wAoBbREm4mY",
        roles: "Writer • Director • Director of Photography • Editor",
        date: "Feb 25, 2026",
        description: "Original short film by Noa Ellis",
        more: `Inspired by the prompt: How does systemic racism and discrimination contribute to the mental health crises within communities of color?`,
        runtime: "7 min",
        camera: "iPhone 11",
        music: "Music by Noa Ellis - Film Soundtrack",
        featured: false,
    },
    {
        title: "Ink and Blood: The Lines That Divide Us",
        id: "S4SFCWFjZcs",
        roles: "Writer • Director • Editor",
        date: "Nov 11, 2025",
        description:
            "Original creative writing piece by Noa Ellis, presented in kinetic typography format",
        more: `"Inspired by the prompt: How do the borders drawn by colonial powers without 
      the necessary considerations for the long-term impacts, or in some cases, 
      intentional sabotage, lead to decades-long instabilities in regions that 
      had not previously been unstable?`,
        runtime: "5 min",
        music: "Music by Whitesand (Martynas Lau) - My Spirit Is Free (2018)",
        featured: false,
    },
    {
        title: "1844 FRC 2025 Season Recap",
        id: "aNfTetDGJ7g",
        date: "Apr 23, 2025",
        roles: "Director • Director of Photography • Editor",
        description:
            "Recap of rookie team FRC1844's 2025 season and their main season-robot Private",
        more: `Following the design, creation, and competitive run of FIRST Robotics Competition 
      team 1844: the Eggineers, rookie team of FRC1540: the Flaming Chickens`,
        runtime: "2 min",
        camera: "Canon G3X",
        music: "Music by Creo - Unveil (2019)",
        featured: false,
    },
    {
        title: "Meet 1844, The EGGINEERS!",
        id: "sk3-40_Vvy0",
        date: "Feb 6, 2025",
        roles: "Director • Director of Photography • Editor",
        description:
            "Introduction to rookie team FRC1844, following their win at FRC1540's 2025 BunnyBots",
        more: `An introduction to the FIRST Robotics Competition team 1844: the Eggineers, 
      rookie team of FRC1540: the Flaming Chickens; includes interviews 
      with prominent FRC1540 members`,
        runtime: "3 min",
        camera: "Canon G3X",
        music: "Music by TheFatRat - Unity (2016)",
        featured: false,
    },
    {
        title: "1844 BunnyBots Recap",
        id: "e7vN35rVPeI",
        date: "Feb 6, 2025",
        roles: "Director • Director of Photography • Editor",
        description:
            "Recap of FRC1844's off-season and competition win at FRC1540's BunnyBots 2025",
        more: `Following the off-season design, creation, and competition run of 
      FIRST Robotics Competition team 1844: the Eggineers, rookie team of FRC1540 
      and their tournament win at BunnyBots 2025, hosted by FRC1540`,
        runtime: "5 min",
        camera: "Canon G3X",
        music: "Music by Thomas Bergersen, Two Steps From Hell - Victory (2017)",
        featured: false
    },
];