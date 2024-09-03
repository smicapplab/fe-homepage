<script>
	// @ts-nocheck
	import { Navbar } from '$lib/components/ui/layout/navbar';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { lazyLoadLayoutComponents } from '$lib/lazy-loader';

	export let data;

	let lazyComponents = {};
	
	onMount(async () => {
		if (browser) {
			lazyComponents = await lazyLoadLayoutComponents();
			console.log("Components loaded:", Object.keys(lazyComponents));
		}

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
	<svelte:component this={lazyComponents.Toast} />
	<svelte:component this={lazyComponents.Footer} />
	<svelte:component this={lazyComponents.Chat} />
</div>
