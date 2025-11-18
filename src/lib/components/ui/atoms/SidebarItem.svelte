<script lang="ts">
	import { page } from '$app/state';
	import { slugify } from '$lib';

	let { dropdown, name, isOpen }: { dropdown: string; name: string; isOpen: boolean } = $props();

	let isCurrent = $derived(page.params.lesson === slugify(name));
</script>

<a
	tabindex={isOpen ? 0 : -1}
	class="text-2xs group/item flex w-40 shrink-0 flex-row items-center justify-start gap-2 px-2"
	href={`/docs/${slugify(dropdown)}/${slugify(name)}`}
	data-sveltekit-noscroll>
	<span
		class="ease-smooth h-0 w-px min-w-px shrink-0 bg-neutral-200 transition-all duration-500 group-hover/item:h-3/4"
	></span>
	<p
		class={`${
			isCurrent ? 'text-neutral-200' : 'text-neutral-500'
		} ease-smooth transition-colors duration-500 group-hover/item:text-neutral-200`}>
		{name}
	</p>
</a>
