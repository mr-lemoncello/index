<script lang="ts">
	type Track = {
		title: string;
		src: string;
	};

	let {
		playlist,
		index = $bindable(0),
	}: {
		playlist: Track[];
		index?: number;
	} = $props();

	let audio: HTMLAudioElement;

	let playing = $state(false);
	let currentTime = $state(0);
	let duration = $state(0);
	let volume = $state(1);

	function playPause() {
		if (!audio) return;

		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	}

	function previous() {
		index = (index - 1 + playlist.length) % playlist.length;
	}

	function next() {
		index = (index + 1) % playlist.length;
	}

	function format(seconds: number) {
		if (!Number.isFinite(seconds)) return "0:00";

		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);

		return `${mins}:${secs.toString().padStart(2, "0")}`;
	}

	$effect(() => {
		if (!audio) return;

		audio.src = playlist[index].src;
		audio.load();

		audio.play().catch(() => {});
	});

	$effect(() => {
		if (audio) audio.volume = volume;
	});
</script>

<audio
	bind:this={audio}
	class="hidden"
	onplay={() => (playing = true)}
	onpause={() => (playing = false)}
	onloadedmetadata={() => (duration = audio.duration)}
	ontimeupdate={() => (currentTime = audio.currentTime)}
	onended={next}
></audio>

<section
	class="flex flex-col gap-4 rounded-lg border-5 border-aroace-orange bg-aroace-light-blue p-4 shadow-[0_0_25px_3px_rgba(174,87,242,0.5)]"
>
	<header>
		<p class="font-[PrestigeElite] text-xs uppercase tracking-widest text-aroace-dark-blue pl-1">
			Now Playing
		</p>

		<h2 class="font-[PrestigeElite] text-2xl text-aroace-dark-blue">
			{playlist[index].title}
		</h2>
	</header>

	<input
		type="range"
		min="0"
		max={duration || 0}
		step="0.01"
		bind:value={currentTime}
		oninput={() => (audio.currentTime = currentTime)}
		class="h-2 w-full cursor-pointer accent-aroace-orange"
	/>

	<div class="flex justify-between font-[PrestigeElite] text-sm text-aroace-dark-blue">
		<span>{format(currentTime)}</span>
		<span>{format(duration)}</span>
	</div>

	<div class="flex items-center justify-center gap-4">
		<button
			type="button"
			aria-label="Previous track"
			onclick={previous}
			class="flex h-11 w-11 items-center justify-center rounded-full! border-4 border-aroace-orange bg-aroace-yellow text-aroace-dark-blue transition hover:scale-110 hover:shadow-[0_0_12px_rgba(255,200,0,0.5)] active:scale-95"
		>
			<i class="fa-solid fa-backward-step" aria-hidden="true"></i>
		</button>

		<button
			type="button"
			aria-label={playing ? "Pause" : "Play"}
			onclick={playPause}
			class="flex h-14 w-14 items-center justify-center rounded-full! border-4 border-aroace-orange bg-aroace-yellow text-2xl text-aroace-dark-blue transition hover:scale-110 hover:shadow-[0_0_16px_rgba(255,200,0,0.6)] active:scale-95"
		>
			<i
				class={`fa-solid ${playing ? "fa-pause" : "fa-play"}`}
				aria-hidden="true"
			></i>
		</button>

		<button
			type="button"
			aria-label="Next track"
			onclick={next}
			class="flex h-11 w-11 items-center justify-center rounded-full! border-4 border-aroace-orange bg-aroace-yellow text-aroace-dark-blue transition hover:scale-110 hover:shadow-[0_0_12px_rgba(255,200,0,0.5)] active:scale-95"
		>
			<i class="fa-solid fa-forward-step" aria-hidden="true"></i>
		</button>
	</div>

	<div class="flex items-center gap-3">
		<i
			class="fa-solid fa-volume-high text-aroace-dark-blue"
			aria-hidden="true"
		></i>

		<input
			type="range"
			min="0"
			max="1"
			step="0.01"
			bind:value={volume}
			class="flex-1 accent-aroace-orange"
			aria-label="Volume"
		/>
	</div>
</section>