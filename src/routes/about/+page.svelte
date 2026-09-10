<script lang="ts">
	import { books } from '$lib/data/books';
	import { CDN } from '$lib/config';
</script>

<svelte:head><title>About Me | Hause</title></svelte:head>

<main class="space-y-4 pb-12">
	<header class="mx-auto max-w-160 pt-36 pb-16 text-center">
		<h1 class="mb-3 text-[2rem] font-light">About Me</h1>
		<p>
			I'm Hause, a researcher at Google DeepMind. I like to engineer and test solutions to empower
			people. I also like to play piano. If you find anything interesting here or want to chat about
			anything, don't hesitate to reach out!
		</p>
	</header>
	<p>
		I'm currently studying the future impacts of AI. Previously, I worked with
		<a href="https://gordonpennycook.com" target="_blank" rel="noopener">Gordon Pennycook</a>
		(Cornell University),
		<a href="https://davidrand-cooperation.com/" target="_blank" rel="noopener">David Rand</a>
		(Cornell, MIT), and
		<a href="https://www.samuelfraiberger.com/" target="_blank" rel="noopener">Samuel Fraiberger</a>
		(World Bank Group
		<a
			href="https://www.worldbank.org/en/about/unit/unit-dec/impactevaluation"
			target="_blank"
			rel="noopener">Development Impact Evaluation Unit</a
		>). I enjoy integrating ideas from different disciplines and experimenting with computational
		methods for understanding and improving decision making and tackling societal challenges.
	</p>
	<p>
		During my Ph.D., I worked with
		<a href="http://michaelinzlicht.com/" target="_blank" rel="noopener">Michael Inzlicht</a>
		(psychologist and social neuroscientist),
		<a href="https://www.decisionneurolab.com/" target="_blank" rel="noopener">Cendri Hutcherson</a>
		(decision neuroscientist), and
		<a href="http://www.mikexcohen.com/" target="_blank" rel="noopener">Mike X Cohen</a>
		(neuroscientist, writer, and educator). I also worked with
		<a href="https://sites.google.com/site/bernardosoaresblum/home" target="_blank" rel="noopener"
			>Bernardo Blum</a
		> (economist).
	</p>
	<p>
		For my Ph.D., I analyzed simulated and real neural time-series data, and tried to figure out how
		to best use high-dimensional neural data to study how we and/or our brains make decisions.
	</p>
	<p>
		I'm always looking for new opportunities to apply and improve my skills on experimental
		methodology, causal inference, data science, and machine learning, time-series analysis, signal
		processing, and so on (classical and jazz piano playing and composition). I also love building
		stuff with <a href="https://svelte.dev/" target="_blank" rel="noopener">Svelte and SvelteKit</a
		>.
	</p>
	<p>
		Download <a href="{CDN}/me-static/cv_hauselin.pdf" target="_blank" rel="noopener"
			>my academic CV</a
		>
		or see
		<a href="https://www.linkedin.com/in/hauselin" target="_blank" rel="noopener">LinkedIn</a> if
		you want drier facts about me. Feel free to
		<a href="mailto:hauselin@gmail.com">get in touch via email</a>
		or <a href="https://twitter.com/hauselin" target="_blank" rel="noopener">X (@hauselin)</a>. To
		see what I've been up to, check out my <a href="/projects">projects</a>,
		<a href="https://github.com/hauselin" target="_blank" rel="noopener">Github (@hauselin)</a>, or
		<a
			href="https://open.spotify.com/user/e3wz87ytsh3zj0mq6hxl3jsh5?si=PtiUHvGQS4if4KARvHaTNw"
			target="_blank"
			rel="noopener">Spotify playlist</a
		>.
	</p>

	<h2 class="pt-6 text-2xl font-bold">Books I enjoy</h2>
	<ul class="grid gap-3 sm:grid-cols-2">
		{#each books as book (book.title)}
			<li class="flex items-center gap-4 rounded bg-panel p-4">
				<img src={book.image} alt={book.title} class="w-[90px]" />
				<div>
					<a href={book.href} target="_blank" rel="noopener" class="font-semibold">{book.title}</a>
					<p class="text-sm text-muted">by {book.author}</p>
				</div>
			</li>
		{/each}
	</ul>

	<h2 class="pt-6 text-2xl font-bold">A few scientific papers I like</h2>
	<ul class="list-disc space-y-1 pl-5">
		<li>
			<a href="https://www.nature.com/articles/s41586-021-03380-y" target="_blank" rel="noopener"
				>Adams et al. (2021) People systematically overlook subtractive changes.</a
			>
		</li>
		<li>
			<a
				href="https://www.sciencedirect.com/science/article/pii/S0166223614001040"
				target="_blank"
				rel="noopener"
				>Cohen (2014). A neural microcircuit for cognitive conflict detection and signaling.</a
			>
		</li>
		<li>
			<a
				href="https://www.annualreviews.org/doi/abs/10.1146/annurev.neuro.28.061604.135709"
				target="_blank"
				rel="noopener"
				>Aston-Jones & Cohen (2014). An integrative theory of locus coeruleus-norepinephrine
				function: Adaptive gain and optimal performance.</a
			>
		</li>
		<li>
			<a href="https://www.jstor.org/stable/1311345" target="_blank" rel="noopener"
				>Loehle (1990). A guide to increased creativity in research: Inspiration or perspiration.</a
			>
		</li>
		<li>
			<a
				href="https://www.science.org/doi/10.1126/science.177.4047.393"
				target="_blank"
				rel="noopener">Anderson (1970). More is different.</a
			>
		</li>
		<li>
			<a
				href="https://www.science.org/doi/full/10.1126/science.162.3859.1243"
				target="_blank"
				rel="noopener">Hardin (1968). The tragedy of the commons.</a
			>
		</li>
		<li>
			<a href="https://www.jstor.org/stable/1720120" target="_blank" rel="noopener"
				>White (1967). The historical roots of our ecologic crisis.</a
			>
		</li>
	</ul>

	<h2 class="pt-6 text-2xl font-bold">Resources/apps I recommend</h2>
	<ul class="list-disc space-y-1 pl-5">
		<li>
			<a href="https://obsidian.md/" target="_blank" rel="noopener">Obsidian note-taking app</a>
			(<a href="{CDN}/me-static/obsidian.gif" target="_blank" rel="noopener"
				>animated graph of my notes</a
			>
			and thoughts on
			<a
				href="https://medium.com/swlh/why-take-notes-3-common-misconceptions-and-3-better-mindsets-447ef6853aa9"
				target="_blank"
				rel="noopener">why</a
			>
			and
			<a
				href="https://medium.com/swlh/how-to-take-notes-insights-from-ai-neuroscience-a-sociologist-and-a-free-app-34b4be63080a"
				target="_blank"
				rel="noopener">how</a
			>
			to take notes)
		</li>
		<li>
			<a href="https://www.alfredapp.com/" target="_blank" rel="noopener"
				>Alfred productivity app for Mac</a
			>
			and my
			<a href="https://github.com/hauselin/obsidian-alfred" target="_blank" rel="noopener"
				>Obsidian-Alfred workflow</a
			>
		</li>
		<li>
			<a href="https://www.udemy.com/user/mike-x-cohen/" target="_blank" rel="noopener"
				>Mike X Cohen's Udemy courses</a
			>
		</li>
		<li>
			<a
				href="https://www.edx.org/xseries/mitx-computational-thinking-using-python"
				target="_blank"
				rel="noopener">Computational Thinking using Python (Coursera)</a
			>
		</li>
	</ul>
</main>
