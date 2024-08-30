<script>
	import { scrollToSection } from '$lib/util';
	import { onMount } from 'svelte';

	let imageLoaded = false;

	export let backgroundImage = '';
	export let heroLabel = '';
	export let heroDescription = '';
	/**
	 * @type {string|null}
	 */
	export let heroButton = null;
	/**
	 * @type {string|null}
	 */
	export let heroLink = null;
	/**
	 * @type {string|null}
	 */
	export let heroAnchorLink = null;

	// Trigger content visibility after 1 second delay
	onMount(() => {
		setTimeout(() => {
			imageLoaded = true;
		}, 300);
	});
</script>

<div class="hero min-h-[50vh] bg-base-200" style={`background-image: url("${backgroundImage}");`}>
	<div
		class="hero-content flex-col lg:flex-row lg:items-start lg:justify-start {imageLoaded
			? 'content-visible'
			: ''}"
	>
		<div class="w-full text-center text-white lg:w-5/6 lg:text-left">
			<h1
				class="hero-label text-5xl font-bold"
				style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"
			>
				{heroLabel}
			</h1>
			<p class="py-6 text-xl" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);">
				{heroDescription}
			</p>

			{#if heroButton}
				<div class="group relative inline-flex">
					<div
						class="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-secondary via-[#FF44EC] to-primary opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"
					></div>
					{#if heroAnchorLink}
						<button
							aria-label="hero-button"
							on:click={() => scrollToSection(heroAnchorLink)}
							class="font-pj relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
							>{heroButton}</button
						>
					{:else}
						<a
							aria-label="hero-button"
							href={heroLink ?? '/'}
							title="Get quote now"
							class="font-pj relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
							role="button"
							>{heroButton}
						</a>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>
