<script>
	import { assets } from '$app/paths';
	import Hero from '$lib/components/ui/hero/hero.svelte';
</script>

<Hero
	backgroundImage={assets + '/images/hero/anchor.jpg'}
	heroLabel="Empower your ecosystem of suppliers with accessible and affordable financing solutions!"
	heroDescription="Partner with us as an Anchor to support your SME suppliers and service providers in bridging their working capital gap, enabling them to serve you more effectively!"
/>

<div class="flex items-center justify-center bg-secondary">
	<div class="container p-5">
		<h2 class="text-2xl font-bold text-center text-primary lg:text-4xl">
			Why invest and diversify with SMEs as an asset class?
		</h2>
		<!-- <div class="grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
			{#each whyKoredorItems as whyKoredorItem, index}
				<div
					class="relative w-full pt-4 text-white border-t border-white first:border-t-0 lg:border-l lg:border-t-0 lg:border-white lg:pl-4 lg:pt-0 lg:first:border-l-0"
				>
					<h2 class="flex items-start text-lg font-bold lg:text-xl">
						<Icons.circleCheckBig class="flex-shrink-0 mr-2" />
						<span class="flex-grow">{whyKoredorItem.subject}</span>
					</h2>
					<p class="py-3">{whyKoredorItem.description}</p>
				</div>
			{/each}
		</div> -->
	</div>
</div>
