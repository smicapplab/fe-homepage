<script>
  // @ts-nocheck

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let measurementId;

	let previousPath = '';

	onMount(() => {
		if (browser) {
			const script = document.createElement('script');
			script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
			script.async = true;
			document.head.appendChild(script);

			window.dataLayer = window.dataLayer || [];
			window.gtag = function () {
				window.dataLayer.push(arguments);
			};
			window.gtag('js', new Date());
			window.gtag('config', measurementId);
		}
	});

	$: if (browser && $page.url.pathname !== previousPath) {
		previousPath = $page.url.pathname;
		window.gtag('config', measurementId, {
			page_path: $page.url.pathname
		});
	}
</script>
