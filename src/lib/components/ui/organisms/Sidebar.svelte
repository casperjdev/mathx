<script lang="ts">
	import { course } from '$lib/constants/objects/lists';
	import SidebarDropdown from '../molecules/SidebarDropdown.svelte';
</script>

<aside class="flex h-full min-w-max flex-col justify-start overflow-x-hidden overflow-y-auto pb-12">
	{#each course as module}
		<SidebarDropdown {module} />
	{/each}
</aside>
