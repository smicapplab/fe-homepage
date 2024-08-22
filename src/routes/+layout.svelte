<script>
	import { Footer } from '$lib/components/ui/footer';
	import { Navbar } from '$lib/components/ui/navbar';
	import '../app.css';
</script>

<div>
	<Navbar />
	<slot></slot>
	<Footer />
</div>
