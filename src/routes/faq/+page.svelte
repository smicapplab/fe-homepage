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

		<div role="tablist" class="mt-10 tabs tabs-bordered">
			<button
				type="button"
				role="tab"
				class="tab-bordered tab text-lg {faq === 'Issuer'
					? 'tab-active !border-primary font-bold text-primary'
					: ''}"
				aria-selected={faq === 'Issuer'}
				on:click={() => (faq = 'Issuer')}
			>
				Issuer
			</button>
			<button
				type="button"
				role="tab"
				class="tab-bordered tab text-lg {faq === 'Investor'
					? 'tab-active !border-primary font-bold text-primary'
					: ''}"
				aria-selected={faq === 'Investor'}
				on:click={() => (faq = 'Investor')}
			>
				Investor
			</button>
			<button
				type="button"
				role="tab"
				class="tab-bordered tab text-lg {faq === 'Anchor'
					? 'tab-active !border-primary font-bold text-primary'
					: ''}"
				aria-selected={faq === 'Anchor'}
				on:click={() => (faq = 'Anchor')}
			>
				Anchor
			</button>
			<button
				type="button"
				role="tab"
				class="tab-bordered tab text-lg {faq === 'Partner'
					? 'tab-active !border-primary font-bold text-primary'
					: ''}"
				aria-selected={faq === 'Partner'}
				on:click={() => (faq = 'Partner')}
			>
				Partner
			</button>
		</div>

		{#if faq === 'Issuer'}
			<Issuer data={data.issuerFaqData} />
		{:else if faq === 'Anchor'}
			<Anchor data={data.issuerAnchorData} />
		{:else if faq === 'Investor'}
			<Investor data={data.investorFaqData} />
		{:else if faq === 'Partner'}
			<Partner data={data.partnerFaqData} />
		{/if}
	</div>
</div>
