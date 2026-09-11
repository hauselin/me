<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	import { page } from '$app/state';

	let { children } = $props();
	const home = $derived(page.url.pathname === '/');
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if home}
	<div class="fixed top-4 right-4">
		<ThemeToggle />
	</div>
	<div class="mx-auto flex min-h-screen max-w-207.5 flex-col px-6">
		{@render children()}
	</div>
{:else}
	<header
		class="fixed inset-x-0 bottom-0 z-10 bg-bg shadow-[0_-1px_3px_rgba(0,0,0,0.06)] sm:top-0 sm:bottom-auto sm:shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
	>
		<nav class="mx-auto flex max-w-207.5 items-center gap-4 px-6 py-2">
			<a href="/" class="mr-auto text-[2rem] leading-12 text-body hover:no-underline">Hause</a>
			<a href="/about" class="text-body">About</a>
			<a href="/projects" class="text-body">Projects</a>
			<ThemeToggle />
		</nav>
	</header>
	<div class="mx-auto max-w-207.5 px-6 pb-16 sm:pt-16 sm:pb-0">
		{@render children()}
	</div>
{/if}
