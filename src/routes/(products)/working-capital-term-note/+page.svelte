<script>
	import { assets } from '$app/paths';
	import Seo from '$lib/components/seo.svelte';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import Summary from '$lib/components/ui/products/summary.svelte';
	import { description, title, whyKoredorItems } from './page-data';
	import TermsMain from './terms-main.svelte';
</script>

<Seo {title} {description} />
<Hero
	backgroundImage={assets + '/images/hero/working-capital-term-note.jpg'}
	heroLabel="Working Capital Term Note-flexible, secure, and built for long-term SME success!"
	heroDescription="Use your clean-titled real estate property as collateral, ensuring added security while lowering interest rates."
/>

<Summary
	whyItems={whyKoredorItems}
	title="Why Working Capital Term Note?"
	description="Seize every opportunity without financial constraints. Investree's working capital term note offers affordable and flexible financing for sustained expansion. Register once and apply anytime!"
/>

<TermsMain />