<script>
	import { assets } from '$app/paths';
	import { Icons } from '$lib/components/icons';

	const whyKoredorItems = [
		{
			subject: 'Unlock substantial capital',
			description: 'Access ₱1,000,000 to ₱15,000,000 for business expansion.'
		},
		{
			subject: 'Leverage Extended Tenor and Lower Rates',
			description:
				'Enjoy competitive rates as low as 12% per annum with flexible 7-36 month terms, enabling more financial capacity for growth.'
		},
		{
			subject: 'Higher Approval Rate for Increased Creditworthiness',
			description:
				'Improve your creditworthiness, enabling higher loan approval rates and access to larger amounts.'
		}
	];
</script>

<div
	class="hero min-h-[50vh] bg-base-200"
	style={`background-image: url("${assets}/images/hero/working-capital-term-note.jpg");`}
>
	<div class="flex-col hero-content lg:flex-row lg:items-start lg:justify-start">
		<div class="w-full text-center text-white lg:w-5/6 lg:text-left">
			<h1 class="text-5xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
				Working Capital Term Note-flexible, secure, and built for long-term SME success!
			</h1>
			<p class="py-6 text-xl" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);">
				Use your clean-titled real estate property as collateral, ensuring added security while lowering interest rates.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<div class="relative flex items-center justify-center overflow-hidden bg-secondary">
	<div class="container relative z-10 p-5">
		<h2 class="text-2xl font-bold text-center text-primary lg:text-4xl">
			Why Koredor Invoice Financing?
		</h2>
		<p class="py-6 text-xl text-white">
			Seize every opportunity without financial constraints. Koredor's working capital term note offers affordable and flexible financing for sustained expansion. Register once and apply anytime!
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