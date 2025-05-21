<script lang="ts">
	import { page } from '$app/state';
	import { deslugify } from '$lib';
	import { ChevronRight } from 'lucide-svelte';

	let { chapter, lesson } = $derived(page.params);
</script>

{#if chapter}
	<div class="text-2xs flex text-neutral-500 max-sm:flex-col">
		<a href="/docs" class="ease-smooth transition-colors duration-500 hover:text-neutral-200"
			>Home</a
		>
		<ChevronRight class="max-sm:hidden" />
		{#if lesson}
			<a
				href={`/docs/${chapter}`}
				class="ease-smooth transition-colors duration-500 hover:text-neutral-200"
				>{deslugify(chapter)}</a
			>
			<ChevronRight class="max-sm:hidden" />
			<p class="text-neutral-200">{deslugify(lesson)}</p>
		{:else}
			<p class="text-neutral-200">{deslugify(chapter)}</p>
		{/if}
	</div>
{/if}
