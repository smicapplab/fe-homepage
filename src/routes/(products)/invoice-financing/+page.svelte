<script>
	import { assets } from '$app/paths';
	import Seo from '$lib/components/seo.svelte';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import { title, description } from './page-data';
	import Summary from './summary.svelte';
	import TermsMain from './terms-main.svelte';
</script>

<Seo {title} {description} />

<Hero
	backgroundImage={assets + '/images/hero/invoice-financing.jpg'}
	heroLabel="Express Invoice Financing"
	heroDescription="Never miss out on new business opportunities because of lengthy payment terms. Koredor's invoice financing allows you to accept larger projects, acquire more clients, and bridge unexpected cash flow gaps. To apply, simply register and submit your invoices!"
/>
<Summary />
<TermsMain />