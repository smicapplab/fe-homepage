<script>
	import { Icons } from '$lib/components/icons';
</script>

<footer class="p-10 text-white footer bg-neutral">
	<aside>
		<Icons.koredorwhite height="50" />
		<p>
			Koredor Capital Philippines
			<br />
			Providing Financial Services since 2024
		</p>
		<div class="flex space-x-1">
			<Icons.iconButton icon={Icons.facebook} iconSize={24} name="facebook" />
			<Icons.iconButton icon={Icons.instagram} iconSize={24} name="instagram" />
			<Icons.iconButton icon={Icons.youtube} iconSize={24} name="youtube" />
			<Icons.iconButton icon={Icons.linkedin} iconSize={24} name="linkedin" />
		</div>
	</aside>
	<nav>
		<p class="footer-title">Navigation</p>
		<a href="/products" class="link-hover link" aria-label="products">Products</a>
		<a href="/investor" class="link-hover link" aria-label="investor">Investor</a>
		<a href="/anchor" class="link-hover link" aria-label="anchor">Anchor</a>
		<a href="/referral" class="link-hover link" aria-label="referral">Referral</a>
		<a href="/faq" class="link-hover link" aria-label="faq">FAQ</a>
	</nav>
	<nav>
		<p class="footer-title">Company</p>
		<a href="/about-us" class="link-hover link" aria-label="about-us">About us</a>
		<a href="/contact-us" class="link-hover link" aria-label="contact">Contact</a>
		<!-- <a href="/" class="link-hover link">Jobs</a>
		<a href="/" class="link-hover link">Press kit</a> -->
	</nav>
	<nav>
		<p class="footer-title">Legal</p>
		<a href="/terms-of-use" class="link-hover link" aria-label="terms-of-use">Terms of use</a>
		<a href="/privacy-policy" class="link-hover link" aria-label="privacy-policy">Privacy policy</a>
		<a href="/cookie-policy" class="link-hover link" aria-label="cookie-policy">Cookie policy</a>
	</nav>
</footer>
<div class="w-full p-5 text-base font-light text-center text-white bg-neutral">
	Participation through Koredor’s platform, by way of investing in securities, involves risk of loss of your investment. Koredor does not guarantee repayment or return on investment.
	<p>&copy; Koredor Philippines {new Date().getFullYear()}</p>
</div>
