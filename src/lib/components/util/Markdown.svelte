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
			padding-bottom: 1rem;
			font-size: var(--text-4xl);
			line-height: 1;
		}

		@media (max-width: 900px) {
			h1 {
				font-size: var(--text-2xl);
			}
		}
	}
</style>
