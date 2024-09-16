// @ts-nocheck
export async function lazyLoadLayoutComponents() {
	const components = {};

	// const imports = [
	// 	import('$lib/components/ui/layout/footer'),
	// 	import('$lib/components/ui/chat/chat.svelte'),
	// 	import('$lib/components/ui/toast/toast.svelte')
	// ];

	const imports = [
		import('$lib/components/ui/layout/footer'),
		import('$lib/components/ui/toast/toast.svelte')
	];

	const [footerModule, toastModule] = await Promise.all(imports);

	components.Footer = footerModule.Footer;
	components.Toast = toastModule.default;

	return components;
}

export async function lazyLoadHomeComponents() {

	const components = {};
	const imports = [
		import('$lib/components/seo.svelte'),
		import('$lib/components/ui/home-page/financing-criteria/financing-criteria.svelte'),
		import('$lib/components/ui/home-page/financing-timeline/financing-timeline.svelte'),
		import('$lib/components/ui/hero/hero.svelte'),
		import('$lib/components/ui/home-page/doc-requirements/doc-requirements.svelte'),
		import('$lib/components/ui/home-page/newsletter/newsletter.svelte')
	];

	const [
		seoModule,
		financingCriteriaModule,
		financingTimelineModule,
		heroModule,
		docRequirementsModule,
		newsletterModule
	] = await Promise.all(imports);

	components.Seo = seoModule.default;
	components.FinancingCriteria = financingCriteriaModule.default;
	components.FinancingTimeline = financingTimelineModule.default;
	components.Hero = heroModule.default;
	components.DocRequirements = docRequirementsModule.default;
	components.Newsletter = newsletterModule.default;

	return components;
}
