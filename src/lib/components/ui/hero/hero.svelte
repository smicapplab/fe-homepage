<script>
	import { onMount } from 'svelte';
	let imageLoaded = false;

	export let backgroundImage = '';
	export let heroLabel = '';
	export let heroDescription = '';

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
				class="text-5xl font-bold hero-label"
				style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"
			>
				{heroLabel}
			</h1>
			<p class="py-6 text-xl" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);">
				{heroDescription}
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
