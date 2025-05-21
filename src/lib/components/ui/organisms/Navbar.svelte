<script lang="ts">
	import MobileMenuToggle from '../atoms/MobileMenuToggle.svelte';
	import NavbarGithub from '../atoms/NavbarGithub.svelte';
	import NavbarLogo from '../atoms/NavbarLogo.svelte';
	import MobileMenu from './MobileMenu.svelte';

	import { page } from '$app/state';

	let open = $state.raw(false);
</script>

<nav
	class="fixed flex h-6 w-full flex-row items-center justify-between border-b border-b-neutral-500 bg-neutral-950 px-1 text-neutral-200"
>
	<div class="flex flex-row items-center justify-between gap-1">
		<MobileMenuToggle bind:open />
		<NavbarLogo />
	</div>
	<NavbarGithub />
	<MobileMenu {open} />
</nav>
