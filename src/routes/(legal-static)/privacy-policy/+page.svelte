<script>
	import Seo from '$lib/components/seo.svelte';
	import { PrivacyAccordion } from './components';
</script>

<Seo title="Privacy Policy" description="Privacy Policy - Koredor Capital" />

<div class="flex items-center justify-center py-6">
	<div class="container p-5">
		<h1 class="text-2xl font-bold text-primary lg:text-4xl">Koredor Privacy Policy</h1>
		<p class="py-5 text-justify text-neutral lg:text-lg">
			Koredor is committed to protect and respect your privacy.
		</p>
		<p class="py-3 text-justify text-neutral lg:text-lg">
			This Privacy Policy applies to all people and entities accessing this Site. By accessing
			and/or using the services available through the Site, you hereby acknowledge that you have
			read, understood and agree to the terms of this Privacy Policy (along with the Terms of Use),
			our Cookie Policy, and any other documents that are referred in this Policy and the Terms of
			Use. This Privacy Policy (together with our Terms of Use, our Cookie Policy, and any other
			documents referred herein) is designed to help you understand how we collect, use, disclose
			and/or process the Personal Data that you have provided to us which will help you in making
			informed decision before giving your Personal Data to us. Read the following carefully to
			understand our views and habits regarding your Personal Data and how we will treat them.
		</p>
		<PrivacyAccordion.definition />
		<PrivacyAccordion.informationCollection />
		<PrivacyAccordion.disclosureOfInfo />
	</div>
</div>
