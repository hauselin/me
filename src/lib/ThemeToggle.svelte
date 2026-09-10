<script lang="ts">
	import { browser } from '$app/environment';

	const prefs = ['system', 'light', 'dark'] as const;
	type Pref = (typeof prefs)[number];

	function saved(): Pref {
		const t = localStorage.getItem('theme');
		return t === 'light' || t === 'dark' ? t : 'system';
	}

	// essential state: the saved override, or 'system' when there is none
	let pref = $state<Pref>(browser ? saved() : 'system');

	function cycle() {
		pref = prefs[(prefs.indexOf(pref) + 1) % prefs.length];
		if (pref === 'system') {
			localStorage.removeItem('theme');
			delete document.documentElement.dataset.theme;
		} else {
			localStorage.setItem('theme', pref);
			document.documentElement.dataset.theme = pref;
		}
	}

	const icons: Record<Pref, string> = { system: '◐', light: '☼', dark: '☾' };
</script>

<button
	onclick={cycle}
	title="Theme: {pref}"
	aria-label="Theme: {pref}. Click to change."
	class="cursor-pointer text-muted hover:text-fg"
>
	{icons[pref]}
</button>
