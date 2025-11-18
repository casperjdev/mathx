<script lang="ts">
	import { page } from '$app/state';
	import { slugify } from '$lib';
	import { ChevronRight } from 'lucide-svelte';

	let { name, open = $bindable(false) }: { name: string; open: boolean } = $props();

	let path = $derived(page.url.pathname);
	let isCurrent = $derived(page.params.chapter === slugify(name));

	const linkHref = `/docs/${slugify(name)}`;

	let element: HTMLAnchorElement;

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			open = !open;
			element.focus();
		}
	}

	function onClick(e: Event) {
		if (!open || path === linkHref) {
			open = !open;
			element.focus();
		}
	}
</script>

<a
	href={linkHref}
	bind:this={element}
	class={`${
		isCurrent ? 'text-neutral-200' : 'text-neutral-500'
	} text-2xs ease-smooth flex h-7 w-40 items-center justify-between p-2 transition-colors duration-500 hover:text-neutral-200`}
	onclick={onClick}
	onkeydown={onKeyDown}>
	{name}
	<ChevronRight
		class={`${open ? 'rotate-90' : 'rotate-0'} ease-smooth transition-transform duration-200`} />
</a>
