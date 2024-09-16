<script>
	import Seo from '$lib/components/seo.svelte';
	import Anchor from './components/anchor.svelte';
	import Investor from './components/investor.svelte';
	import Issuer from './components/issuer.svelte';
	import Partner from './components/partner.svelte';

	export let data;

	let faq = 'Issuer';
</script>

<Seo
	title="Koredor Crowdfunding Platform & Products | Frequently Asked Questions (FAQs)"
	description="Find answers to common questions about Koredor, the crowdfunding platform. Learn who provides funding to businesses, how Koredor works, and whether Koredor itself invests directly.”"
/>

<div class="flex items-center justify-center p-10 bg-base-200">
	<div class="container">
		<h1 class="pt-16 text-5xl font-bold text-center text-primary">
			Koredor frequently asked questions
		</h1>
		<p class="pt-5 text-lg text-center">
			Find answers to commonly asked questions about Koredor and its products
		</p>
	</div>
</div>
<div class="flex items-center justify-center px-5 py-10">
	<div class="container">
		<div class="py-5">
			<p>
				You may browse and read questions and answers related to Koredor, but if you want to post a
				question, you can use our contact us form.
			</p>
			<p>
				<a href="/contact-us" class="btn btn-link">Contact Us form.</a>
			</p>
		</div>

		<div role="tablist" class="tabs tabs-lifted">
			<input type="radio" name="faq_tabs" role="tab" class="text-xl tab" aria-label="Issuer" checked />
			<div role="tabpanel" class="p-6 tab-content rounded-box border-base-300 bg-base-100">
				<Issuer data={data.issuerFaqData} />
			</div>

			<input type="radio" name="faq_tabs" role="tab" class="text-xl tab" aria-label="Investor" />
			<div role="tabpanel" class="p-6 tab-content rounded-box border-base-300 bg-base-100">
				<Investor data={data.investorFaqData} />
			</div>

			<input type="radio" name="faq_tabs" role="tab" class="text-xl tab" aria-label="Anchor" />
			<div role="tabpanel" class="p-6 tab-content rounded-box border-base-300 bg-base-100">
				<Anchor data={data.issuerAnchorData} />
			</div>

			<input type="radio" name="faq_tabs" role="tab" class="text-xl tab" aria-label="Partner" />
			<div role="tabpanel" class="p-6 tab-content rounded-box border-base-300 bg-base-100">
				<Partner data={data.partnerFaqData} />
			</div>
		</div>
	</div>
</div>
