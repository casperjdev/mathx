<script lang="ts">
	import { page } from '$app/state';
	import { slugify } from '$lib';
	import type { Module } from '$lib/constants/types';
	import SidebarItem from '../atoms/SidebarItem.svelte';
	import SidebarToggle from '../atoms/SidebarToggle.svelte';

	let { module }: { module: Module } = $props();

	const current = page.url.pathname.includes(`/docs/${slugify(module.title)}`);
	let open: boolean = $state.raw(current);

	let container: HTMLDivElement = $state(null!);

	$effect(() => {
		if (container) {
			container.style.height = open ? `${container.scrollHeight}px` : '56px';
		}
	});
</script>

<div
	bind:this={container}
	class="transition-height ease-smooth flex shrink-0 flex-col overflow-hidden duration-200"
	style={`height: ${open ? container && `${container.scrollHeight}px` : '56px'}`}>
	<SidebarToggle bind:open name={module.title} />
	<div class="flex flex-col gap-2">
		{#each module.items as item}
			<SidebarItem dropdown={module.title} name={item} isOpen={open} />
		{/each}
	</div>
</div>
