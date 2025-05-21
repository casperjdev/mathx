<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/organisms/Breadcrumbs.svelte';
	import Sidebar from '$lib/components/ui/organisms/Sidebar.svelte';

	let { children } = $props();
</script>

<main class="max-w-8xl mx-auto flex h-full w-full flex-row pt-6">
	<div class="hidden lg:block">
		<Sidebar />
	</div>
	<div class="flex h-full w-full flex-col overflow-y-scroll p-6 break-words">
		<Breadcrumbs />
		{@render children()}
	</div>
</main>
