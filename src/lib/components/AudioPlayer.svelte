<script lang="ts">

  let index = $state(0);

  const playlist = [
    { src: "/src/lib/assets/blindedsided_surveillance.mp3", title: "Blindsided Surveillance" },
    { src: "/src/lib/assets/Crows at Duskfall.mp3", title: "Crows at Duskfall" },
    { src: "/src/lib/assets/Flim Soundtrack.mp3", title: "Film Soundtrack" },
    { src: "/src/lib/assets/For My Own Sake.mp3", title: "For My Own Sake" },
    { src: "/src/lib/assets/GarageBand Blues.mp3", title: "GarageBand Blues" },
    { src: "/src/lib/assets/Garageille O_Neal.mp3", title: "Garageille O'Neal" },
    { src: "/src/lib/assets/Garlic Bread on Venus.mp3", title: "Garlic Bread on Venus" },
    { src: "/src/lib/assets/I Wash The Sheets.mp3", title: "I Wash The Sheets" },
    { src: "/src/lib/assets/lotf chapter 1.mp3", title: "LOTF Chapter 1" },
    { src: "/src/lib/assets/Monotony.mp3", title: "Monotony" },
    { src: "/src/lib/assets/No Vows, No Veins.mp3", title: "No Vows, No Veins" },
    { src: "/src/lib/assets/Pain, Shame, Memories.mp3", title: "Pain, Shame, Memories" },
    { src: "/src/lib/assets/credits theme.mp3", title: "Roll Credits" },
    { src: "/src/lib/assets/Serenade of Confession.mp3", title: "Serenade of Confession" },
    { src: "/src/lib/assets/Spirals and Stars.mp3", title: "Spirals and Stars" },
    { src: "/src/lib/assets/The Threads.mp3", title: "The Threads" },
    { src: "/src/lib/assets/Tungsten Rain.mp3", title: "Tungsten Rain" },
  ];

  const { onSongChange } = $props<{
    onSongChange: (song: string) => void;
  }>();

</script>

<audio
  controls
  autoplay
  src={playlist[index].src}
  onplay={() => {
    const track = playlist[index];
    onSongChange(`${track.title} - Vikas Banerjee Murthy`);
  }}
  onended={() => {
    index = (index + 1) % playlist.length;
  }}
></audio>