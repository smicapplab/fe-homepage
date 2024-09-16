<script>
	import { onMount } from 'svelte';
	import { finProcessSteps } from './financing-data';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let show = false;
	/**
	 * @type {Element}
	 */
	let sectionTimelineRef;

	/**
	 * @type {string | any[]}
	 */
	let visibleCards = [];

	// Trigger animation when section is in view
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						show = true;
						animateCards();

						observer.unobserve(entry.target); // Stop observing once triggered
					}
				});
			},
			{
				root: null,
				threshold: 0.5
			}
		);

		observer.observe(sectionTimelineRef);
	});

	function animateCards() {
		const interval = setInterval(() => {
			if (visibleCards.length < finProcessSteps.length) {
				visibleCards = [...visibleCards, finProcessSteps[visibleCards.length]];
			} else {
				clearInterval(interval);
			}
		}, 250);
	}
</script>

<section class="flex bg-neutral">
	<div class="container p-10">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
			<div>
				<h2 class="h-auto text-xl font-bold text-center text-white lg:text-left lg:text-2xl">
					Are you an SME looking for financing?
				</h2>
				<h2 class="py-3 text-xl text-white">
					Our process is 100% online, so you can apply anytime, anywhere!
				</h2>
			</div>

			<div
				class="relative flex flex-col items-center col-span-2 space-y-6"
				bind:this={sectionTimelineRef}
			>
				<!-- Vertical Line -->
				{#each visibleCards as step, i}
					<div
						class="relative flex items-start w-full space-x-4"
						in:fly={{ x: 100, duration: 1500, easing: cubicOut }}
					>
						<!-- Step Circle/Number -->
						<div
							class="z-10 flex items-center justify-center w-12 h-12 text-xl font-bold bg-white rounded-full shadow-lg"
						>
							{i + 1}
						</div>
						<!-- Conditional Line (except for the last step) -->
						{#if i < visibleCards.length - 1}
							<div class="absolute -bottom-10 left-1 top-10 h-full w-0.5 bg-white"></div>
						{/if}

						<!-- Step Card -->
						<div class="w-full p-6 ml-8 bg-white rounded-lg shadow-md">
							<h2 class="mb-2 text-lg font-bold">{step.title}</h2>
							<p class="text-gray-700">{step.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 80vh;
	}
</style>
