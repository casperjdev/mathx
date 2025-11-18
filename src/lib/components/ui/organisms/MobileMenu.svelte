<script lang="ts">
	import Sidebar from './Sidebar.svelte';

	let { open }: { open: boolean } = $props();
</script>

<div
	class={`${
		open ? 'translate-x-0' : '-translate-x-full'
	} ease-smooth fixed top-6 left-0 z-50 h-full overflow-hidden border-r border-neutral-500 bg-neutral-950 transition-all duration-200 lg:hidden`}>
	<Sidebar />
</div>
