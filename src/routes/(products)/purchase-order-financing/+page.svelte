<script>
	import { assets } from '$app/paths';
	import { Icons } from '$lib/components/icons';
	import Hero from '$lib/components/ui/hero/hero.svelte';

	const whyKoredorItems = [
		{
			subject: 'Maximize business potential',
			description:
				'Have immediate access to funds to fulfill larger-than-usual orders, expanding your operations and clientele.'
		},
		{
			subject: 'Increase your revenue',
			description:
				'Say yes to new projects without worrying about cash flow, has purchase order financing covers production costs.'
		},
		{
			subject: 'Build confidence',
			description:
				'Strengthen relationships with suppliers and clients by reliably delivering on orders, enhancing your business reputation.'
		}
	];
</script>

<Hero
	backgroundImage={assets + '/images/hero/purchase-order-financing.jpg'}
	heroLabel="Purchase Order Financing"
	heroDescription="Get additional funds using your purchase orders!"
/>

<div class="relative flex items-center justify-center overflow-hidden bg-secondary">
	<div class="container z-10 p-5">
		<h2 class="text-2xl font-bold text-center text-primary lg:text-4xl">
			Why Koredor Invoice Financing?
		</h2>
		<p class="py-6 text-xl text-white">
			Never let cash flow gaps hinder your business growth. Koredor’s purchase order financing
			allows you to procure inventory, fulfill projects faster, and meet unexpected demands. Simply
			register and submit your purchase orders to apply!
		</p>
		<div class="grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
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
		</div>
	</div>
</div>
