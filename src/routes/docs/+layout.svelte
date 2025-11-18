<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/organisms/Breadcrumbs.svelte';
	import Sidebar from '$lib/components/ui/organisms/Sidebar.svelte';

	let { children } = $props();
</script>

<div
	class="max-8xl:opacity-0 text-ptrn-fg h-full flex-1 border-x bg-(image:--pattern-r) bg-[size:12px_12px] bg-fixed"
></div>
<div class="max-w-8xl flex w-full">
	<div class="hidden lg:block">
		<Sidebar />
	</div>
	<div
		class="text-ptrn-fg h-full w-4 shrink-0 border-x bg-(image:--pattern-r) bg-[size:12px_12px] bg-fixed max-lg:hidden"
	></div>
	<div class="flex h-full w-full flex-col overflow-y-scroll p-2 break-words">
		<Breadcrumbs />
		{@render children()}
	</div>
</div>
<div
	class="max-8xl:opacity-0 text-ptrn-fg h-full flex-1 border-x bg-(image:--pattern-r) bg-[size:12px_12px] bg-fixed"
></div>
