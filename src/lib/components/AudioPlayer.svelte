<script lang="ts">
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

  let index = $state(0);

  const playlist = [
    { src: blindsided_surveillance, title: "Blindsided Surveillance" },
    { src: crows_at_duskfall, title: "Crows at Duskfall" },
    { src: film_soundtrack, title: "Film Soundtrack" },
    { src: for_my_own_sake, title: "For My Own Sake" },
    { src: garageband_blues, title: "GarageBand Blues" },
    { src: garageille_o_neal, title: "Garageille O'Neal" },
    { src: garlic_bread_on_venus, title: "Garlic Bread on Venus" },
    { src: i_wash_the_sheets, title: "I Wash The Sheets" },
    { src: lord_of_the_flies_chapter_one, title: "LOTF Chapter 1" },
    { src: monotony, title: "Monotony" },
    { src: no_vows_no_veins, title: "No Vows, No Veins" },
    { src: pain_shame_memories, title: "Pain, Shame, Memories" },
    { src: roll_credits, title: "Roll Credits" },
    { src: serenade_of_confession, title: "Serenade of Confession" },
    { src: spirals_and_stars, title: "Spirals and Stars" },
    { src: the_threads, title: "The Threads" },
    { src: tungsten_rain, title: "Tungsten Rain" },
  ];

  const { onSongChange } = $props<{
    onSongChange: (song: string) => void;
  }>();
</script>

<audio
  controls
  autoplay
  class="pt-0 mt-0 w-full shadow-[0px_0px_25px_3px_rgba(255,0,128,0.8)] rounded-lg"
  src={playlist[index].src}
  onplay={() => {
    const track = playlist[index];
    onSongChange(`${track.title} - Vikas Banerjee Murthy`);
  }}
  onended={() => {
    index = (index + 1) % playlist.length;
  }}
></audio>
