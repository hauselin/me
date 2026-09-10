<script lang="ts">
	import { papers, themes } from '$lib/data/papers';
	import { pdfUrl } from '$lib/config';
</script>

<svelte:head><title>Research | Hause</title></svelte:head>

<main class="space-y-6 pb-12">
	<header class="mx-auto max-w-160 pt-36 pb-16 text-center">
		<h1 class="mb-3 text-[2rem] font-light">Research</h1>
		<p>
			Academic papers I have published or am working on now (non-exhaustive). See
			<a
				href="https://scholar.google.com/citations?user=4_ZopI0AAAAJ&hl=en"
				target="_blank"
				rel="noopener">Google Scholar profile</a
			>
			for full list of published work. <strong>*</strong>Denotes shared first authors; in-prep
			research is in
			<span class="text-muted">lighter font</span>.
		</p>
	</header>

	{#each themes as theme (theme)}
		<section class="rounded bg-panel p-4">
			<h2 class="mb-2 font-bold">{theme}</h2>
			<ul class="list-disc space-y-2 pl-5">
				{#each papers.filter((p) => p.themes?.includes(theme)) as p (p.title)}
					<li class={{ 'text-muted': p.inPrep }}>
						{p.authors} ({p.year}). {p.title}.
						{#if p.venue}<em>{p.venue}</em>{/if}{#if p.detail}, {p.detail}{/if}.
						<span class="space-x-2 whitespace-nowrap">
							{#if p.doi}<a href={p.doi} target="_blank" rel="noopener">doi</a>{/if}
							{#if p.pdf}<a href={pdfUrl(p.pdf)} target="_blank" rel="noopener">pdf</a>{/if}
							{#each p.extras ?? [] as x (x.href)}
								<a href={pdfUrl(x.href)} target="_blank" rel="noopener">{x.label}</a>
							{/each}
						</span>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</main>
