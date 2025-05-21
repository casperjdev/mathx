<script lang="ts">
	let { src }: { src: string } = $props();
</script>

<article>
	{@html src}
</article>

<style lang="postcss">
	article :global {
		color: var(--color-neutral-200);
		font-size: var(--text-2xs);

		h1 {
			padding-block: 1rem;
			font-size: var(--text-4xl);
		}

		@media (max-width: 1024px) {
			h1 {
				font-size: var(--text-xl);
			}
		}
	}
</style>
