<script>
	import { TermsOfUseAccordion } from "./components";
	import ApprovalRegistration from "./components/approval-registration.svelte";
	import Definition from "./components/definition.svelte";

</script>
<div class="flex items-center justify-center py-6">
	<div class="container p-5">
		<h1 class="text-2xl font-bold text-primary lg:text-4xl">Koredor Terms of Use</h1>
		<p class="py-5 text-justify text-neutral lg:text-lg">
			Koredor is committed to protect and respect your privacy.
		</p>
		<p class="py-3 text-justify text-neutral lg:text-lg">
			This page specifies the terms of use of our Site and services ("Terms of Use") by you. Read
			the Terms of Use carefully before you start using our Site and services. Aside from these
			Terms of Use, all Site features and functions, as well as our services and products must be in
			compliance with the Master Agreement. We advise you to print these Terms of Use for future
			reference.
		</p>
		<p class="py-3 text-justify text-neutral lg:text-lg">
			By accessing, browsing, and / or using our Site and services, or by receiving services through
			the Site, you acknowledge and agree that you have read, understood, accepted, and agreed to be
			legally bound by these Terms of Use and the documents referred herein, including any
			additions, changes or modifications therein which may be introduced by us from time to time
			without prior notice.
		</p>
		<p class="py-3 text-justify text-neutral lg:text-lg">
			You likewise agree that the provisions, disclosures and disclaimers set forth herein are fair
			and reasonable and that your agreement to follow and be bound by these Terms of Use is
			voluntary and is not a result of fraud, duress, or undue influence exercised upon you by any
			person or entity. <strong
				>PLEASE READ THESE TERMS CAREFULLY AS THEY CONSTITUTE A LEGAL AGREEMENT BETWEEN YOU AND US.</strong
			>
		</p>
		<p class="py-3 text-justify text-neutral lg:text-lg">
			If you do not agree with these Terms of Use, you are required to immediately cease , exit, or
			stop using our Site and /or services.
		</p>
		<p class="py-3 text-justify text-neutral lg:text-lg">
			We may at any time and at our sole discretion, amend and update this Terms of Use. You are
			responsible for regularly reviewing these Terms of Use in our Site. Any such amendments,
			modifications and/or updates will be effective immediately upon posting in our Site. Your
			continued access or use of the Site or our services after such posting such amendments,
			modifications and/or updates confirms your acceptance, agreement, and consent to be bound by
			the terms, as amended. Your use of the Site or our services must follow the Terms of Use. Any
			other use of the Site or our services, not in accordance with the Terms of Use is a material
			breach of this Agreement.
		</p>

        <TermsOfUseAccordion.definition />
        <TermsOfUseAccordion.approvalRegistration />
	</div>
</div>
