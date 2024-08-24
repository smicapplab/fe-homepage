<script>
	import { assets } from '$app/paths';
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

<div class="hero min-h-[50vh] bg-base-200" style={`background-image: url("${assets}/hero.jpg");`}>
	<div class="flex-col hero-content lg:flex-row lg:items-start lg:justify-start">
		<div class="w-full text-center text-white lg:w-1/2 lg:text-left">
			<h1 class="text-5xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
				Affordable Financing
			</h1>
			<p class="py-6 text-xl" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<div class="flex items-center justify-center py-6">
	<div class="container">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each whyKoredorItems as whyKoredorItem}
				<div class="card glass">
					<figure>
						<img src={`${assets}/${whyKoredorItem.image}`} alt={whyKoredorItem.title} />
					</figure>
					<div class="card-body">
						<h2 class="card-title text-primary">
							{whyKoredorItem.title}
						</h2>
						<p class="text-neutral">{whyKoredorItem.description}</p>
						<div class="justify-start card-actions">
							<button class="btn btn-secondary">Learn More</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
