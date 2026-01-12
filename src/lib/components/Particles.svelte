<script lang="ts">
  import { onMount } from "svelte";
  import { Particle } from "../../routes/Particle";

  let canvas: HTMLCanvasElement;

  onMount(() => {
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

      // Resize canvas first
      particles.length = 0;
      for (
        let i = 0;
        i < Math.floor((canvas.width * canvas.height) / 28400);
        i++
      ) {
        particles.push(new Particle(canvas)); // Pass the canvas to the Particle constructor
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
  });
</script>

<canvas
  bind:this={canvas}
  id="particleCanvas"
  class="absolute inset-0 pointer-events-none -z-1"
></canvas>
