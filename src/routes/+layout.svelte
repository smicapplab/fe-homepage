<!-- svelte-ignore missing-declaration -->
<script>
	import { Footer } from '$lib/components/ui/layout/footer';
	import { Navbar } from '$lib/components/ui/layout/navbar';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Toast from '$lib/components/ui/toast/toast.svelte';
	import Chat from '$lib/components/ui/chat/chat.svelte';
	export let data;

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let GA_MEASUREMENT_ID = 'G-34KG9BD86Q';
	// $: if (browser) {
	// 	// @ts-ignore
	// 	window.gtag('config', GA_MEASUREMENT_ID, {
	// 		// @ts-ignore
	// 		page_path: $page.url.pathname
	// 	});
	// }

	onMount(() => {
		const link = document.createElement('link');
		link.href =
			'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap';
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.media = 'all';
		link.onload = () => {
			document.body.classList.add('font-loaded');
		};
		document.head.appendChild(link);
	});
</script>


<div>
	<Navbar />
	{#key data.url}
		<!-- This is for page navigation animation -->
		<div in:fly={{ duration: 500, x: -200, delay: 200 }} out:fly={{ x: 300, duration: 200 }}>
			<slot></slot>
		</div>
	{/key}
	<Toast />
	<Chat />
	<Footer />
</div>
