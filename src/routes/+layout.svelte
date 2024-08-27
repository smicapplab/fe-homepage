<script>
	import { Footer } from '$lib/components/ui/footer';
	import { Navbar } from '$lib/components/ui/navbar';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Toast from '$lib/components/ui/toast/toast.svelte';
	export let data;
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
	<Footer />
</div>
