<script>
	import { assets } from '$app/paths';
	import { Icons } from '$lib/components/icons';
	import Seo from '$lib/components/seo.svelte';

	// SEO
	const title = 'Koredor Express Invoice Financing';
	const description = "Turn your invoices into opportunities! Here's a quick guide on what type of invoice you should submit to guarantee a hassle-free application."


	const whyKoredorItems = [
		{
			subject: 'Higher Loan-To-Value (LTV) of 80% of the invoice amount',
			description: 'Apply for a higher financing amount of up to ₱15,000,000* per application.',
			footNote:
				'* Final financing amount will be determined during our standard credit and risk assessment process.'
		},
		{
			subject: 'Build stronger relationships and trust with the platform and investors',
			description:
				'Strengthen connections and instill confidence among stakeholders for a mutually rewarding and sustainable partnership.'
		},
		{
			subject: 'Better relationships mean better rates and terms in the future',
			description:
				'Foster a strong relationship by maintaining timely payments, proactive networking and communication, and shared objectives to unlock valuable financial advantages.'
		}
	];
</script>

<Seo
  {title}
  {description}
/>

<div
	class="hero min-h-[50vh] bg-base-200"
	style={`background-image: url("${assets}/images/hero/invoice-financing.jpg");`}
>
	<div class="flex-col hero-content lg:flex-row lg:items-start lg:justify-start">
		<div class="w-full text-center text-white lg:w-5/6 lg:text-left">
			<h1 class="text-5xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
				Express Invoice Financing
			</h1>
			<p class="py-6 text-xl" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);">
				Never miss out on new business opportunities because of lengthy payment terms. Koredor's
				invoice financing allows you to accept larger projects, acquire more clients, and bridge
				unexpected cash flow gaps. To apply, simply register and submit your invoices!
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<div class="flex items-center justify-center bg-secondary">
	<div class="container p-5">
		<h2 class="text-2xl font-bold text-center text-primary lg:text-4xl">
			Why Koredor Invoice Financing?
		</h2>
		<p class="py-6 text-xl text-white">
			Never miss out on new business opportunities because of lengthy payment terms. Investree's invoice financing allows you to accept larger projects, acquire more clients, and bridge unexpected cash flow gaps. To apply, simply register and submit your invoices!
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
					{#if whyKoredorItem.footNote}
						<p class="py-2 text-sm italic">{whyKoredorItem.footNote}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
