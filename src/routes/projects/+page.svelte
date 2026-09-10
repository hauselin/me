<script lang="ts">
	import PaperSearch from '$lib/PaperSearch.svelte';
	import { pdfUrl } from '$lib/config';
</script>

<svelte:head><title>My Projects | Hause</title></svelte:head>

<main class="space-y-6 pb-12">
	<header class="mx-auto max-w-160 pt-36 pb-16 text-center">
		<h1 class="mb-3 text-[2rem] font-light">My Projects</h1>
		<p>
			A few ongoing or recently completed projects. See also
			<a href="https://github.com/hauselin" target="_blank" rel="noopener">Github @hauselin</a> for more.
			If you find anything interesting, don't hesitate to reach out!
		</p>
	</header>

	<div class="grid gap-3 sm:grid-cols-2">
		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Academic publications</h2>
			<p class="mb-2">
				See <a
					href="https://scholar.google.com/citations?user=4_ZopI0AAAAJ&hl=en"
					target="_blank"
					rel="noopener">Google Scholar profile</a
				>
				or <a href="/research">key papers sorted by themes</a>. Or search below.
			</p>
			<PaperSearch />
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Large-scale digital field experiments</h2>
			<p>
				Reduced misinformation sharing by up to 6.3% on Twitter and Facebook by delivering <a
					href="https://osf.io/u8anb/download"
					target="_blank"
					rel="noopener">accuracy prompt ads</a
				> to 33 million Facebook users and 75k Twitter users.
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Human-AI experimentation</h2>
			<p>
				I (with <a href="https://www.linkedin.com/in/tawab-safi/" target="_blank" rel="noopener"
					>Tawab Safi</a
				>
				and <a href="https://www.thcostello.com/" target="_blank" rel="noopener">Tom Costello</a>)
				built <a href="https://www.vegapunkdoc.dev/" target="_blank" rel="noopener">Vegapunk</a>, an
				app that enables human-AI (LLM) interaction experiments/studies with minimal JavaScript
				coding.
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Learning to love challenges</h2>
			<p>
				I developed a <a
					href={pdfUrl('Lin_Inzlicht_2024-effort.pdf')}
					target="_blank"
					rel="noopener">new method (reinforcement learning)</a
				> to motivate people to perservere and take on challenges they would otherwise avoid. The method
				is based on the idea that people can learn to enjoy effortful tasks.
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Cognitive and computational modeling</h2>
			<p>
				I applied drift diffusion and hierarchical Bayesian modeling (<a
					href="https://github.com/hauselin/depletion_bayes"
					target="_blank"
					rel="noopener">download code</a
				>) to investigate the
				<a
					href="https://journals.sagepub.com/doi/pdf/10.1177/0956797620904990"
					target="_blank"
					rel="noopener">effects of mental effort exertion</a
				>
				and how
				<a
					href="https://www.sciencedirect.com/science/article/abs/pii/S0010027722003018"
					target="_blank"
					rel="noopener">accuracy prompts reduce misinformation sharing</a
				>.
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Social media experimentation platform</h2>
			<p>
				<a href="http://zive.info" target="_blank" rel="noopener">Zivvy Epstein</a> and I built
				<a href="https://www.yourfeed.social" target="_blank" rel="noopener">Yourfeed</a>, a
				platform to study social media consumption behavior. We used
				<a href="https://svelte.dev" target="_blank" rel="noopener">Svelte</a>
				for the frontend and
				<a href="https://flask.palletsprojects.com" target="_blank" rel="noopener">Flask</a> for the backend.
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Creativity as decision making</h2>
			<p>
				I (with <a
					href="https://www.amazon.com/s?i=digital-text&rh=p_27%3AOshin+Vartanian"
					target="_blank"
					rel="noopener">Oshin Vartanian</a
				>) proposed
				<a href={pdfUrl('Lin2018creativity.pdf')} target="_blank" rel="noopener"
					>a new framework for creativity</a
				> that integrates decades of research on decision making and neuromodulation (specifically the
				locus ceruleus-norepinephrine system).
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Quantify online discourse quality</h2>
			<p>
				<a href="https://mohsenmosleh.com" target="_blank" rel="noopener">Mohsen Mosleh</a> and I
				made an <a href="https://misinfoexpose.com/" target="_blank" rel="noopener">app</a> to
				determine how much misinformation people are exposed to. I also created a
				<a href="https://www.domain-quality.info/" target="_blank" rel="noopener"
					>database of news domain quality scores</a
				>.
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Problems with experimentation</h2>
			<p>
				I discuss the <a href={pdfUrl('Lin2021experimentation.pdf')} target="_blank" rel="noopener"
					>mutual-internal-validity problem</a
				>, how theory-driven experiments can ironically produce bad theories. I also explain why
				experimenters should think deeply about why they are running experiments.
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Data science and statistics tutorials</h2>
			<p>
				I occasionally create <a
					href="https://hausetutorials.netlify.app/"
					target="_blank"
					rel="noopener">data science tutorials</a
				>. They are mostly for my forgetful future self and you can also find FAQs (e.g.,
				<a
					href="https://hausetutorials.netlify.app/0002_tidyverse_datatable.html"
					target="_blank"
					rel="noopener">data.table vs tidyverse's dplyr</a
				>,
				<a
					href="https://hausetutorials.netlify.app/posts/2019-07-06-interpreting-interaction-regression-coefficients/"
					target="_blank"
					rel="noopener">interpret statistical interactions</a
				>,
				<a
					href="https://hausetutorials.netlify.app/posts/2020-05-14-reshaping-data-in-python-pandas/"
					target="_blank"
					rel="noopener">reshape dataframes</a
				>,
				<a
					href="https://hausetutorials.netlify.app/posts/2019-04-09-gentle-and-intuitive-intro-to-markov-chain-monte-carlo-mcmc/"
					target="_blank"
					rel="noopener">MCMC</a
				>).
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Effect size converter</h2>
			<p>
				A <a href="https://www.escal.site/" target="_blank" rel="noopener"
					>simple website that helps you convert between commonly used effect size metrics</a
				> (e.g., Cohen's d, Pearson's r, odds ratio, AUC, Cohen's f).
			</p>
		</section>

		<section class="rounded bg-panel p-4">
			<h2 class="mb-1 font-bold">Writing on Medium</h2>
			<p>
				I occasionally <a href="https://medium.com/@ausius" target="_blank" rel="noopener"
					>write on Medium (@ausius)</a
				>, a blogging platform founded by
				<a
					href="https://en.wikipedia.org/wiki/Evan_Williams_(Internet_entrepreneur)"
					target="_blank"
					rel="noopener">Evan Williams</a
				>. It's a place with
				<a
					href="https://medium.com/@ev/welcome-to-medium-9e53ca408c48"
					target="_blank"
					rel="noopener"
					>"little stories that make your day better and manifestos that change the world."</a
				>
			</p>
		</section>
	</div>
</main>
