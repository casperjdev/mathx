<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import MobileMenuToggle from '../atoms/MobileMenuToggle.svelte';
	import NavbarGithub from '../atoms/NavbarGithub.svelte';
	import NavbarLogo from '../atoms/NavbarLogo.svelte';
	import MobileMenu from './MobileMenu.svelte';

	let open = $state.raw(false);

	onNavigate(({ from, to }) => {
		if (from?.url.pathname !== to?.url.pathname) {
			open = false;
		}
	});
</script>

<nav
	class="fixed z-100 flex h-6 w-full flex-row items-center justify-between border-b border-b-neutral-500 bg-neutral-950 px-1 text-neutral-200">
	<div class="flex flex-row items-center justify-between gap-1">
		<MobileMenuToggle bind:open />
		<NavbarLogo />
	</div>
	<NavbarGithub />
	<MobileMenu {open} />
</nav>
