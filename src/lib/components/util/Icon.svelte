<script lang="ts">
	import { icons } from '$lib/constants/icons/index';

	let { name } = $props();

	let displayIcon = icons.find((e) => e.name === name)!;
</script>

{@html displayIcon.path}
