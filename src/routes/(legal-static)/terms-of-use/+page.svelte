<script>
	import Seo from '$lib/components/seo.svelte';
	import { TermsOfUseAccordion } from './components';
</script>

<Seo title="Terms and Conditions" description="Terms and Conditions - Koredor Capital" />

<div class="flex items-center justify-center py-6">
	<div class="container p-5">
		<h1 class="mb-6 text-2xl font-bold text-primary lg:text-4xl">Koredor Terms of Use</h1>

		<div class="p-4 mb-6 text-blue-700 bg-blue-100 border-l-4 border-blue-500" role="alert">
			<p class="font-bold">Important Notice</p>
			<p>
				By using our Site and services, you agree to be bound by these Terms of Use. If you do not
				agree, please discontinue use immediately.
			</p>
		</div>

		<div class="mb-6 space-y-4">
			<p class="text-justify text-neutral lg:text-lg">
				These Terms of Use govern your use of our Site and services. Please read them carefully
				before using our platform. We recommend saving or printing a copy for your records.
			</p>
			<p class="text-justify text-neutral lg:text-lg">
				Your access to and use of our Site and services signifies your acceptance of these Terms of
				Use and all referenced documents. You agree that these terms are fair and reasonable, and
				your acceptance is voluntary and not a result of any undue influence.
			</p>
			<p class="text-justify text-neutral lg:text-lg">
				<strong>PLEASE NOTE:</strong> These Terms of Use constitute a legal agreement between you and
				Koredor.
			</p>
		</div>

		<div class="p-4 mb-6 text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500" role="alert">
			<p class="font-bold">Updates to Terms</p>
			<p>
				We may update these Terms of Use at any time. Your continued use of the Site after changes
				are posted constitutes your acceptance of the updated terms.
			</p>
		</div>

		<h2 class="mb-4 text-xl font-semibold">Key Sections</h2>
		<div class="mb-6 space-y-4">
			<TermsOfUseAccordion.definition />
			<TermsOfUseAccordion.approvalRegistration />
		</div>

		<h2 class="mb-4 text-xl font-semibold">Additional Information</h2>
		<div class="space-y-4">
			<p class="text-justify text-neutral lg:text-lg">
				All Site features, functions, services, and products must comply with the Master Agreement
				in addition to these Terms of Use.
			</p>
			<p class="text-justify text-neutral lg:text-lg">
				Your use of the Site or our services must follow these Terms of Use. Any use not in
				accordance with these terms is considered a material breach of this Agreement.
			</p>
		</div>

		<div class="mt-8 text-sm text-gray-600">
			<p>Last Updated: September 10, 2024</p>
			<p>
				For any questions regarding these Terms of Use, please contact us at <a
				href="mailto:privacy@koredorcapital.com"
				class="text-blue-500 underline">privacy@koredorcapital.com</a
			>.
			</p>
		</div>
	</div>
</div>
