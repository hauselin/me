<script lang="ts">
	import { papers } from '$lib/data/papers';
	import { pdfUrl } from '$lib/config';

	let query = $state('');

	// derived, not stored: the haystack is fixed data, the hits follow the query
	const indexed = papers
		.filter((p) => p.pdf)
		.map((p) => ({
			paper: p,
			text: `${p.authors} ${p.year} ${p.title} ${p.venue ?? ''} ${(p.tags ?? []).map((t) => '#' + t).join(' ')}`.toLowerCase()
		}));

	let hits = $derived(
		query.trim().length < 2
			? []
			: indexed.filter((i) => i.text.includes(query.trim().toLowerCase()))
	);
</script>

<div class="relative">
	<input
		type="search"
		bind:value={query}
		placeholder="search title, author, year, #tag"
		class="w-full rounded-md border border-muted/40 bg-bg px-3 py-2"
	/>
	{#if hits.length}
		<ul
			class="absolute inset-x-0 top-full z-10 mt-1 max-h-80 overflow-y-auto rounded-md border border-muted/40 bg-bg py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
		>
			{#each hits as { paper } (paper.title)}
				<li>
					<a
						href={pdfUrl(paper.pdf!)}
						target="_blank"
						rel="noopener"
						class="block px-3 py-1.5 hover:bg-panel hover:no-underline"
					>
						{paper.authors.split(',')[0]} ({paper.year}). {paper.title}
					</a>
				</li>
			{/each}
		</ul>
	{:else if query.trim().length >= 2}
		<p
			class="absolute inset-x-0 top-full z-10 mt-1 rounded-md border border-muted/40 bg-bg px-3 py-1.5 text-sm text-muted"
		>
			No matches.
		</p>
	{/if}
</div>
