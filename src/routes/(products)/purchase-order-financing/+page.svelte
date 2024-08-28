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
	backgroundImage={assets + '/images/hero/purchase-order-financing.jpg'}
	heroLabel="Grow your client base through Purchase Order Financing"
	heroDescription="Seize bigger opportunities with additional working capital you need!"
/>

<Summary
	whyItems={whyKoredorItems}
	title="Grow your client base through Purchase Order Financing"
	description="Never let cash flow gaps hinder your business growth. Investree’s purchase order financing allows you to procure inventory, fulfill projects faster, and meet unexpected demands. Simply register and submit your purchase orders to apply!"
/>
<TermsMain />
