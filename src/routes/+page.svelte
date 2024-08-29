<script>
	import { assets } from '$app/paths';
	import Seo from '$lib/components/seo.svelte';
	import FinancingCriteria from '$lib/components/ui/home-page/financing-criteria/financing-criteria.svelte';
	import FinancingTimeline from '$lib/components/ui/home-page/financing-timeline/financing-timeline.svelte';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import DocRequirements from '$lib/components/ui/home-page/doc-requirements/doc-requirements.svelte';
	import Newsletter from '$lib/components/ui/home-page/newsletter/newsletter.svelte';

	const title = 'Koredor Kapital - Unlock affordable, flexible, collateral-free financing';
	const description =
		'Discover Koredor’s flexible financing solutions designed to empower your business growth with no collateral required and competitive, risk-based rates. Apply online effortlessly and enjoy personalized support with complete transparency, tailored to meet your unique business needs.';

	const whyKoredorItems = [
		{
			title: 'No Collateral Credit',
			description:
				'Access additional working capital with Koredor, with no collateral required! Secure up to ₱5 million on your first two transactions, with potential increases up to ₱15 million per transaction as you continue. Empower your business growth effortlessly and without the need for assets as security',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: 'Affordable & Risk-based',
			description:
				'Our rates are competitive with unsecured business loans from banks, offering you a cost-effective financing solution. With risk-based pricing, you have the opportunity to secure even lower rates by establishing a strong credit history with Koredor. Build trust, save more, and grow your business with tailored financial support',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: '100% Online Application',
			description:
				'Apply anytime, from anywhere! Complete your registration online with ease and enjoy exceptional customer support every step of the way. Experience hassle-free service designed to meet your needs on your schedule',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: 'Seamless Support and Full Transparency',
			description:
				'Your dedicated Relationship Manager provides personalized support, focusing on a deep understanding of your business needs and ensuring complete transparency in fees and processes. Experience tailored guidance designed to help your business thrive',
			url: '/',
			image: 'placeholder.jpg'
		}
	];
</script>

<Seo {title} {description} />
<Hero
	backgroundImage={assets + '/images/hero/home.jpg'}
	heroLabel="Unlock affordable, flexible, collateral-free financing with Koredor to boost your business growth"
	heroDescription="Discover Koredor’s flexible financing solutions designed to empower your business growth with no collateral required and competitive, risk-based rates. Apply online effortlessly and enjoy personalized support with complete transparency, tailored to meet your unique business needs."
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
