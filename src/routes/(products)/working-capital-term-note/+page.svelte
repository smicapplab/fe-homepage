<script>
	import { assets } from '$app/paths';
	import { PUBLIC_ISSUER_REGISTRATION } from '$env/static/public';
	import Seo from '$lib/components/seo.svelte';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import Summary from '$lib/components/ui/products/summary.svelte';
	import { description, title, whyKoredorItems } from './page-data';
	import TermsMain from './terms-main.svelte';
</script>

<Seo {title} {description} />
<Hero
	backgroundImage={assets + '/images/hero/working-capital-term-note.jpg'}
	heroLabel="Working Capital Term Note — flexible, reliable, and designed to fuel long-term success for SMEs!"
	heroDescription="Leverage your clean-titled real estate as collateral to enhance security and benefit from reduced interest rates"
	heroButton="Get Started"
	heroLink={PUBLIC_ISSUER_REGISTRATION}
/>

<Summary
	whyItems={whyKoredorItems}
	title="Why Working Capital Term Note?"
	description="Seize every opportunity without financial constraints. Koredor's working capital term note offers affordable and flexible financing for sustained expansion. Register once and apply anytime!"
/>

<TermsMain />
