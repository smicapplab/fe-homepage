<script>
	import { Icons } from '$lib/components/icons';
	import { onMount } from 'svelte';
	import { navItems } from './navigation';

	let isScrolled = false;

	// Detect scroll event to toggle transparency
	const handleScroll = () => {
		isScrolled = window.scrollY > 0;
	};
	
	// Add event listener on mount
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="navbar bg-base-100 sticky top-0 z-50 transition-all duration-300 ease-in-out {isScrolled ? 'bg-opacity-60 backdrop-blur' : ''}">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				{#each navItems as navItem}
					<li>
						<a href={navItem.href} class="flex justify-start w-full text-left btn btn-ghost">
							{navItem.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-link" href="/"><Icons.koredor /></a>
	</div>
	<div class="hidden navbar-center lg:flex">
		<ul class="px-1 menu menu-horizontal">
			{#each navItems as navItem}
				<li><a href={navItem.href}>{navItem.name}</a></li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a href="https://issuer.koredorcapital.com/" class="btn btn-primary">Sign In</a>
	</div>
</div>