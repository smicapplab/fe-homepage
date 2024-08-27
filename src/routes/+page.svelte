<script>
	import { assets } from '$app/paths';
	import Seo from '$lib/components/seo.svelte';
	import DocRequirements from '$lib/components/ui/doc-requirements/doc-requirements.svelte';
	import FinancingCriteria from '$lib/components/ui/financing-criteria/financing-criteria.svelte';
	import FinancingTimeline from '$lib/components/ui/financing-timeline/financing-timeline.svelte';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import Newsletter from '$lib/components/ui/newsletter/newsletter.svelte';

	const title = 'Koredor Kapital';
	const description =
		"Philippines' 1st SEC-licensed fintech crowdfunding platform that provides the best affordable, low interest rate business loans to DTI and SEC-registered SMEs.";

	const whyKoredorItems = [
		{
			title: 'No Collateral Credit',
			description:
				'Get additional working capital up to ₱5 million pesos on the first two transactions, increasing up to ₱15 million per transaction.',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: 'Affordable & Risk-based',
			description:
				'Rate is comparable to unsecured business loans from banks. Risk-based pricing enable businesses to get lower rate by building good credit history with Koredor.',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: '100% Online Application',
			description:
				'Apply anytime, anywhere! Complete your registration online and get excellent customer support.',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: 'Seamless Support and Full Transparency',
			description:
				'Your dedicated Relationship Manager ensures tailored support, prioritizing an in-depth comprehension of your business and complete transparency on fees and process.',
			url: '/',
			image: 'placeholder.jpg'
		}
	];
</script>

<Seo {title} {description} />
<Hero
	backgroundImage={assets + '/hero.jpg'}
	heroLabel="Affordable Financing"
	heroDescription="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi."
/>

<div class="flex items-center justify-center py-6">
	<div class="container">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each whyKoredorItems as whyKoredorItem}
				<div class="card glass">
					<div class="card-body">
						<h2 class="card-title text-primary">
							{whyKoredorItem.title}
						</h2>
						<p class="text-neutral">{whyKoredorItem.description}</p>
						<div class="justify-start card-actions">
							<button class="pl-0 btn btn-link text-secondary">Learn More</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<FinancingTimeline />
<DocRequirements />
<FinancingCriteria />
<Newsletter />