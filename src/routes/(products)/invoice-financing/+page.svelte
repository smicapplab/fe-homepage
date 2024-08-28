<script>
	import { assets } from '$app/paths';
	import Seo from '$lib/components/seo.svelte';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import Summary from '$lib/components/ui/products/summary.svelte';
	import { title, description, whyKoredorItems } from './page-data';
	import TermsMain from './terms-main.svelte';
</script>

<Seo {title} {description} />

<Hero
	backgroundImage={assets + '/images/hero/invoice-financing.jpg'}
	heroLabel="Fast-track your application with Express Invoice Financing"
	heroDescription="Check the financing eligibility of your outstanding invoices in just 1 day!"
/>

<Summary
	whyItems={whyKoredorItems}
	title="Why Koredor Invoice Financing?"
	description="Never miss out on new business opportunities because of lengthy payment terms. Koredor's invoice financing allows you to accept larger projects, acquire more clients, and bridge unexpected cash flow gaps. To apply, simply register and submit your invoices!"
/>

<TermsMain />
