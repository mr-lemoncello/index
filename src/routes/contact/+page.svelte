<script lang="ts">
  import Particles from "$lib/components/Particles.svelte";
  import DayNight from "$lib/components/DayNight.svelte";
  import Clouds from "$lib/components/Clouds.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import FadeInSection from "$lib/components/FadeInSection.svelte";

  let bg: string = $state("");

  let name: string = $state("");
  let email: string = $state("");
  let message: string = $state("");
  let status: string = $state("");

  async function handleSubmit(e: Event) {
    e.preventDefault();

    status = "Sending...";

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      status = "Message sent!";
      name = email = message = "";
    } else {
      status = data.error || "Something went wrong";
    }
  }
</script>

<DayNight />
<Particles />
<Clouds />

<Navbar active="contact" />

<FadeInSection>
  <h2 class="heading">Contact</h2>
</FadeInSection>

<FadeInSection>
  <div
    class="flex flex-col gap-4 p-6 m-3 w-full
    bg-white/10 backdrop-blur-xl
    border border-white/10 rounded-xl shadow-lg"
  >
    <form class="flex flex-col gap-4" onsubmit={handleSubmit}>
      <input
        bind:value={name}
        placeholder="Name"
        required
        class="bg-white/10 text-white placeholder-gray-400
    border border-white/10 rounded-lg
    px-4 py-2 outline-none
    focus:ring-2 focus:ring-white/40
    transition-all duration-200"
      />

      <input
        bind:value={email}
        type="email"
        placeholder="Email"
        required
        class="bg-white/10 text-white placeholder-gray-400
    border border-white/10 rounded-lg
    px-4 py-2 outline-none
    focus:ring-2 focus:ring-white/40
    transition-all duration-200"
      />

      <textarea
        bind:value={message}
        placeholder="Message"
        required
        rows="5"
        class="bg-white/10 text-white placeholder-gray-400
    border border-white/10 rounded-lg
    px-4 py-2 outline-none
    focus:ring-2 focus:ring-white/40
    transition-all duration-200 resize-none"
      ></textarea>

      <button
        type="submit"
        class="bg-white/10 text-white font-semibold
    border border-white/10 rounded-lg
    px-4 py-2
    hover:bg-white/20
    transition-all duration-300
    shadow-lg hover:shadow-xl"
      >
        Send
      </button>
    </form>

    {#if status}
      <p class="text-sm text-gray-300 font-[VerilySerif]">
        {status}
      </p>
    {/if}
  </div>
</FadeInSection>

<div
  id="footer"
  class="flex-col fixed bottom-0 w-auto
  p-2 m-4 flex-background
  transition-[width, height] duration-500 ease-in-out
  hover:scale-105"
  role="tooltip"
  aria-label="Footer"
  style:background={bg}
>
  <p class="content-normal with-margin-text mb-0">
    Having trouble with the form? Contact me at:&nbsp;
  </p>
  <p class="content-normal with-margin-text mb-0">
    <a class="text-aroace-light-blue" href="mailto:vikasarino@gmail.com">
      vikasarino@gmail.com</a>
  </p>
</div>

<Footer />

<style>
  :global(body)::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;
    height: 100vh;
    background-color: #1c1c1e;
  }

  :global(body) {
    margin: 40px;
  }
</style>
