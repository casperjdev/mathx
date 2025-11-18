<script>
	import HeroMain from './HeroMain.svelte';
</script>

<div class="text-ptrn-fg flex w-full flex-row bg-(image:--pattern-r) bg-[size:10px_10px]">
	<HeroMain />
	<img
		src="/hero.png"
		alt="Hero"
		class="h-full w-full object-cover object-center max-xl:absolute max-xl:top-0 max-xl:-z-10 max-xl:opacity-25 xl:w-1/3 xl:mask-l-from-0" />
</div>
