<script>
	import { assets } from '$app/paths';
	import { Icons } from '$lib/components/icons';
	import Seo from '$lib/components/seo.svelte';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import InvestmentProcess from './investment-process.svelte';
	import { description, title, whyInvestItems } from './page-data';
	import Qualifications from './qualifications.svelte';
	import RegisterInvestor from './register-investor.svelte';
	import Requirements from './requirements.svelte';
</script>

<Seo {title} {description} />

<Hero
	backgroundImage={assets + '/images/hero/investor.jpg'}
	heroLabel={title}
	heroDescription={description}
	heroButton="Get Started"
	heroAnchorLink="reg-form"
/>

<div
	class="flex items-center justify-center bg-secondary bg-[linear-gradient(to_right,#6966662e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
>
	<div class="container p-5">
		<h2 class="text-center text-2xl font-bold text-primary lg:text-4xl">
			Why invest and diversify with SMEs as an asset class?
		</h2>
		<div class="grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
			{#each whyInvestItems as whyInvestItem}
				<div
					class="relative w-full border-t border-white pt-4 text-white first:border-t-0 lg:border-l lg:border-t-0 lg:border-white lg:pl-4 lg:pt-0 lg:first:border-l-0"
				>
					<h2 class="flex items-start text-lg font-bold lg:text-xl">
						<Icons.circleCheckBig class="mr-2 flex-shrink-0" />
						<span class="flex-grow">{whyInvestItem.subject}</span>
					</h2>
					<p class="py-3">{whyInvestItem.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<Qualifications />
<Requirements />
<InvestmentProcess />
<RegisterInvestor />
