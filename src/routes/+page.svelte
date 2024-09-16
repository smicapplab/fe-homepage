<script>
	import { browser } from '$app/environment';
	import { assets } from '$app/paths';
	import { lazyLoadHomeComponents } from '$lib/lazy-loader';
	import { onMount } from 'svelte';

	const title = 'Koredor Capital - Facilitating Financing for SMEs | Funding Opportunities for Investors';
	const description =
		'Discover Koredor’s flexible financing solutions designed to empower your business with no competitive, risk-based rates. Apply online effortlessly and enjoy support tailored to meet your unique business needs.';

	const whyKoredorItems = [
		{
			title: 'Flexible Credit',
			description:
				'Access flexible terms with Koredor. Working capital solutions that fit your needs. Our offerings include collateral free and mortgage backed options. Our platform helps SMEs get the best terms possible from our diverse investor pool through our auction system.',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: 'Affordable & Risk-based',
			description:
				'Our rates are competitive providing SMEs with affordable solutions AND investors attractive returns on risk. Our platform provides both SMEs and investors with peace of mind using our unique approach ensuring both parties meet their needs. Join the Koredor ecosystem today!',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: 'Anywhere in the Philippines',
			description:
				'Apply anytime, from anywhere! Complete your registration online with ease and enjoy exceptional customer support every step of the way. Experience hassle-free service designed to meet your needs on your schedule.',
			url: '/',
			image: 'placeholder.jpg'
		},
		{
			title: 'Seamless Support and Full Transparency',
			description:
				'Your dedicated Relationship Manager provides dedicated support, focusing on a deep understanding of your needs. Experience tailored guidance designed to help you thrive whether as an SME or an investor!',
			url: '/',
			image: 'placeholder.jpg'
		}
	];

	/**
	 * @type {any}
	 */
	let lazyComponents = {};

	onMount(async () => {
		if (browser) {
			// @ts-ignore
			lazyComponents = await lazyLoadHomeComponents();
		}
	});

	const heroProps = {
		backgroundImage: assets + '/images/hero/home.jpg',
		heroLabel:
			'Unlock affordable, flexible financing for your business! Koredor raises financing for SMEs from private investors that best match your risk profile.',
		heroDescription:
			'Discover Koredor’s flexible financing solutions designed to empower your business with no competitive, risk-based rates. Apply online effortlessly and enjoy support tailored to meet your unique business needs.'
	};
</script>

<svelte:component this={lazyComponents.Seo} {title} {description} />
<svelte:component this={lazyComponents.Hero} {...heroProps} />

<div class="flex items-center justify-center p-5 mb-10">
	<div class="container">
		<div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
			{#each whyKoredorItems as whyKoredorItem}
				<div class="card glass">
					<div class="card-body">
						<h2 class="card-title text-primary">
							{whyKoredorItem.title}
						</h2>
						<p class="text-neutral">{whyKoredorItem.description}</p>
						<div class="justify-start card-actions">
							<button class="pl-0 btn btn-link text-secondary" aria-label="learn-more"
								>Learn More</button
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<svelte:component this={lazyComponents.FinancingTimeline} />
<svelte:component this={lazyComponents.DocRequirements} />
<svelte:component this={lazyComponents.FinancingCriteria} />
<svelte:component this={lazyComponents.Newsletter} /> 
