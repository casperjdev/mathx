<script lang="ts">
	import Navbar from '$lib/components/ui/organisms/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>mathx | The Math Learning Platform</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap"
		rel="stylesheet"
	/>

	<meta
		name="description"
		content="Built with the intention of making math accessible to everyone, mathx is a platform for learning mathematics in a concise, organized way."
	/>
</svelte:head>

<Navbar />
<main class="flex h-full w-full pt-6">
	{@render children()}
</main>
