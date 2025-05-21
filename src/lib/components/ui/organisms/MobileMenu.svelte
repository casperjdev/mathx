<script lang="ts">
	import Sidebar from './Sidebar.svelte';

	let { open }: { open: boolean } = $props();
</script>

<div
	class={`${
		open ? 'w-40' : 'w-0'
	} ease-smooth fixed top-6 left-0 z-50 h-[calc(100svh-1.5rem)] overflow-hidden bg-black transition-all duration-200 lg:hidden`}
>
	<Sidebar />
</div>
