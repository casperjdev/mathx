<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		children,
		variant = 'solid',
		href,
		...restProps
	}: {
		children: Snippet;
		variant?: 'solid' | 'hollow';
		href: string;
	} & HTMLAnchorAttributes = $props();

	function getVariant() {
		switch (variant) {
			case 'solid':
				return 'text-neutral-950';
			case 'hollow':
				return 'bg-clip-text';
		}
	}
</script>

<a
	{href}
	class={`rounded-full border border-neutral-500 bg-(image:--page-gradient) px-3 py-1 font-medium ${getVariant()}`}>
	{@render children()}
</a>
