const navItems = [
	{ name: 'Home', href: '/' },
	{
		name: 'Products',
		href: '/products',
		subMenus: [
			{ name: 'Invoice Financing', href: '/invoice-financing' },
			{ name: 'Purchase Order Financing', href: '/purchase-order-financing' },
			{ name: 'Working Capital Term Note', href: '/working-capital-term-note' }
		]
	},
	{ name: 'Investor', href: '/investor' },
	{ name: 'Anchor', href: '/anchor' },
	{ name: 'Referral', href: '/referral' },
	{ name: 'About Us', href: '/about-us' },
	{ name: 'FAQ', href: '/faq' },
	{ name: 'Contact Us', href: '/contact-us' }
];

export { navItems };
