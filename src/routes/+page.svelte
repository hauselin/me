<script lang="ts">
	import { browser } from '$app/environment';

	// play the intro once per tab; later visits to / show everything at once
	const seen = browser && sessionStorage.getItem('intro') === 'seen';
	if (browser) sessionStorage.setItem('intro', 'seen');
</script>

<svelte:head>
	<title>Hause Lin</title>
	<meta name="description" content="I'm Hause, a researcher at Google DeepMind." />
</svelte:head>

<main class={['flex flex-1 flex-col items-center justify-center text-center', { instant: seen }]}>
	<h1 class="typing text-8xl font-medium text-fg">Hi.</h1>
	<p class="reveal mt-2 space-x-8">
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
	</p>
</main>

<style>
	.typing {
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		animation: type 0.6s steps(3) forwards;
	}
	@keyframes type {
		from {
			width: 0;
		}
		to {
			width: 3ch;
		}
	}
	.reveal {
		opacity: 0;
		animation: fade 0.3s 0.6s forwards;
	}
	@keyframes fade {
		to {
			opacity: 1;
		}
	}
	.instant .typing,
	.instant .reveal {
		animation: none;
		width: auto;
		opacity: 1;
	}
</style>
