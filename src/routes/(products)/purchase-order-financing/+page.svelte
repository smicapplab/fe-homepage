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
	backgroundImage={assets + '/images/hero/purchase-order-financing.jpg'}
	heroLabel="Expand your client base with Purchase Order Financing and unlock the additional working capital needed to seize bigger opportunities"
	heroDescription="Fuel your growth and take on larger projects with confidence!"
	heroButton="Get Started"
	heroLink={PUBLIC_ISSUER_REGISTRATION}
/>

<Summary
	whyItems={whyKoredorItems}
	title="Why Koredor Purchase Order Financing"
	description="Never let cash flow gaps hinder your business growth. Koredor purchase order financing allows you to procure inventory, fulfill projects faster, and meet unexpected demands. Simply register and submit your purchase orders to apply!"
/>
<TermsMain />
