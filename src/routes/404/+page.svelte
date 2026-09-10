<!-- prerenders to build/404.html, which Workers serves for unknown paths (see wrangler.jsonc) -->
<script lang="ts">
	import NotFound from '$lib/NotFound.svelte';
</script>

<NotFound />
