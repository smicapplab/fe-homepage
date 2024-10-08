import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { navItems } from './src/lib/components/ui/layout/navbar/navigation.js';

// Define the base URL of your website
const baseUrl = 'https://koredorcapital.com/';

const staticRoutes = ['/terms-of-use', '/privacy-policy', '/cookie-policy'];

for (let navItem of navItems) {
	staticRoutes.push(navItem.href);
}

// Generate the sitemap
async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname: baseUrl });

	// Add static routes to the sitemap
	staticRoutes.forEach((route) => {
		sitemap.write({ url: route, changefreq: 'weekly' });
	});

	sitemap.end();

	// Convert the sitemap stream to a string
	const sitemapString = await streamToPromise(sitemap).then((data) => data.toString());

	// Write the sitemap to the public directory
	writeFileSync('./static/sitemap.xml', sitemapString);

	console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
