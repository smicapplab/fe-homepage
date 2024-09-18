<script>
	import Seo from '$lib/components/seo.svelte';
	import { PrivacyAccordion } from './components';
</script>

<Seo title="Privacy Policy" description="Privacy Policy - Koredor Capital" />

<div class="flex items-center justify-center py-6">
	<div class="container p-5">
		<h1 class="text-2xl font-bold text-primary lg:text-4xl">Koredor Privacy Policy</h1>

		<p class="py-5 text-justify text-neutral lg:text-lg">
			At Koredor Capital, we are committed to protecting and respecting your privacy. This Privacy
			Policy explains how we collect, use, disclose, and safeguard your personal information when
			you use our services or visit our website at <a
				href="https://koredorcapital.com"
				class="text-blue-500 underline">koredorcapital.com</a
			>.
		</p>

		<p class="py-3 text-justify text-neutral lg:text-lg">
			By accessing or using our services, you agree to the terms of this Privacy Policy. Please read
			this policy carefully to understand our practices regarding your personal data.
		</p>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">1. Definitions</h2>
			<p class="mt-2">To help you understand our policy better, please refer to these key terms:</p>
			<PrivacyAccordion.definition />
		</section>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">2. Information We Collect</h2>
			<PrivacyAccordion.informationCollection />
		</section>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">3. Use and Disclosure of Information</h2>
			<p class="mt-2 text-neutral">
				We use and may disclose your information for various purposes:
			</p>
			<PrivacyAccordion.disclosureOfInfo />
		</section>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">4. Your Rights and Choices</h2>
			<p class="mt-2 text-neutral">
				You have certain rights regarding your personal information, including:
			</p>
			<ul class="pl-6 mt-2 space-y-2 list-disc text-neutral">
				<li>Accessing and updating your information</li>
				<li>Opting out of marketing communications</li>
				<li>Requesting deletion of your data (subject to legal requirements)</li>
				<li>Setting your browser to refuse cookies</li>
			</ul>
			<p class="mt-2 text-neutral">
				To exercise these rights, please contact us using the information provided in the "Contact
				Us" section.
			</p>
		</section>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">5. Data Security</h2>
			<p class="mt-2 text-neutral">
				We implement appropriate technical and organizational measures to protect your personal
				information. However, no method of transmission over the Internet or electronic storage is
				100% secure. We strive to use commercially acceptable means to protect your Personal Data,
				but we cannot guarantee its absolute security.
			</p>
		</section>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">6. International Data Transfers</h2>
			<p class="mt-2 text-neutral">
				Your information may be transferred to and processed in countries other than your own. We
				ensure appropriate safeguards are in place for such transfers, in compliance with applicable
				data protection laws.
			</p>
		</section>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">7. Changes to This Policy</h2>
			<p class="mt-2 text-neutral">
				We may update this Privacy Policy from time to time to reflect changes in our practices or
				for other operational, legal, or regulatory reasons. We will notify you of any material
				changes by posting the new Privacy Policy on this page and updating the "Last Updated" date
				at the bottom of this page.
			</p>
		</section>

		<section class="mt-8">
			<h2 class="text-xl font-semibold text-primary">8. Contact Us</h2>
			<p class="mt-2 text-neutral">
				If you have any questions about this Privacy Policy or our data practices, please contact
				our Data Protection Officer at <a
					href="mailto:privacy@koredorcapital.com"
					class="text-blue-500 underline">privacy@koredorcapital.com</a
				>.
			</p>
		</section>

		<p class="mt-8 text-sm text-gray-600">Last Updated: September 10, 2024</p>
	</div>
</div>
