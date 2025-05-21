<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let { open = $bindable(false) }: { open: boolean } = $props();
</script>

<button onclick={() => (open = !open)} class="block h-full cursor-pointer lg:hidden">
	{#if open}
		<X />
	{:else}
		<Menu />
	{/if}
</button>
