<script lang="ts">
	import Markdown from '$lib/components/util/Markdown.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<article>
	<Markdown src={data.html} />
</article>
