<script>
	import { Icons } from '$lib/components/icons';
	import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-svelte';
</script>

<footer class="p-10 footer bg-base-200 text-base-content">
	<aside>
		<Icons.koredor height="50" />
		<p>
			Koredor Capital Philippines
			<br />
			Providing Financial Services since 2024
		</p>
		<div class="flex space-x-1">
			<Icons.iconButton icon={Icons.facebook} iconSize={24}/>
			<Icons.iconButton icon={Icons.instagram} iconSize={24}/>
			<Icons.iconButton icon={Icons.youtube} iconSize={24}/>
			<Icons.iconButton icon={Icons.linkedin} iconSize={24}/>
		</div>
	</aside>
	<nav>
		<h6 class="footer-title">Navigation</h6>
		<a href="/products" class="link-hover link">Products</a>
		<a href="/investor" class="link-hover link">Investor</a>
		<a href="/anchor" class="link-hover link">Anchor</a>
		<a href="/referral" class="link-hover link">Referral</a>
		<a href="/faq" class="link-hover link">FAQ</a>
	</nav>
	<nav>
		<h6 class="footer-title">Company</h6>
		<a href="/about-us" class="link-hover link">About us</a>
		<a href="/contact-us" class="link-hover link">Contact</a>
		<!-- <a href="/" class="link-hover link">Jobs</a>
		<a href="/" class="link-hover link">Press kit</a> -->
	</nav>
	<nav>
		<h6 class="footer-title">Legal</h6>
		<a href="/terms-of-use" class="link-hover link">Terms of use</a>
		<a href="/privacy-policy" class="link-hover link">Privacy policy</a>
		<a href="/" class="link-hover link">Cookie policy</a>
	</nav>
</footer>
