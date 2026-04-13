<script lang="ts">
    let dayFactor = $state(0);
    let time: number = 0;

    function getDayFactor(time: number) {
        const result = (1 - Math.cos((2 * Math.PI * time) / 500)) / 2;
        return result;
    }

    setInterval(() => {
        time = time + 1;
        dayFactor = getDayFactor(time);
    }, 1000);
</script>

<div
    class="day-night"
    style="
    background: linear-gradient(
      to bottom,
      rgba(54, 147, 235, 0.75),
      rgba(20, 79, 128, 0.65)
    );
    opacity: {0.25 + Math.pow(dayFactor, 1.4) * 0.425};
  "
></div>

<div
    class="day-night"
    style="
    background:
      linear-gradient(
        to bottom,
        rgba(20, 30, 70, 0.7),
        rgba(0, 0, 0, 0.9)
      ),
      radial-gradient(
        circle at 70% 20%,
        rgba(180, 210, 255, 0.35),
        transparent 60%
      );
    opacity: {3 * Math.pow(1 - dayFactor, 2)};
  "
></div>

<div
    class="day-night"
    style="
    background: linear-gradient(
      to top,
      rgba(255, 140, 90, 0.9),
      rgba(255, 200, 160, 0.4),
      transparent 60%
    );
    opacity: {0.25 * Math.pow(dayFactor, 1.4)};
  "
></div>

<div
    class="day-night"
    style="
    background: rgba(255, 255, 255, 0.25);
    opacity: {Math.pow(dayFactor, 1.6) * 0.45};
  "
></div>
