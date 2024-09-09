<script>
	import { Icons } from '$lib/components/icons';
	import { onMount } from 'svelte';
	import { navItems } from './navigation';
	import { browser } from '$app/environment';

	let isScrolled = false;
	let openDetails = null;
	/**
	 * @type {number | null | undefined}
	 */
	let closeTimer = null;

	const handleScroll = () => {
		if (browser) {
			isScrolled = window.scrollY > 0;
		}
	};

	// @ts-ignore
	const startCloseTimer = (details) => {
		if (closeTimer) clearTimeout(closeTimer);
		closeTimer = setTimeout(() => {
			if (details) {
				details.open = false;
				openDetails = null;
			}
		}, 1000);
	};

	const cancelCloseTimer = () => {
		if (closeTimer) clearTimeout(closeTimer);
	};

	/**
	 * Toggles the visibility of a details element and manages its closing behavior with a delay.
	 *
	 * @param {Event} event - The event object triggered by the toggle action.
	 * @param {number} index - The index of the currently toggled details element.
	 * @returns {void}
	 */
	const toggleDetails = (event, index) => {
		if (browser) {
			const target = event.target;
			if (target instanceof HTMLElement) {
				const details = target.closest('details');

				if (details && details.open) {
					openDetails = index;
					cancelCloseTimer();
				} else {
					openDetails = null;
				}
			}
		}
	};

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<div
	class="navbar sticky top-0 z-50 transition-all duration-300 ease-in-out {isScrolled
		? 'bg-primary text-white'
		: 'bg-base-100 text-black'}"
>
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden" aria-label="Toggle Menu">
				<svg
					aria-labelledby="koredor-menu-icon"
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 {isScrolled ? 'text-white' : 'text-black'}"
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
			<ul
				class="w-fill menu dropdown-content menu-sm z-[1] mt-3 rounded-box p-2 shadow {isScrolled
					? 'bg-primary'
					: 'bg-base-100 '}"
			>
				{#each navItems as navItem}
					<li>
						{#if navItem.subMenus}
							<span class="flex justify-start w-full text-left btn btn-ghost">
								{navItem.name}
							</span>
							<ul
								class="p-2"
								on:mouseenter={cancelCloseTimer}
								on:mouseleave={(e) => startCloseTimer(e.currentTarget.closest('details'))}
							>
								{#each navItem.subMenus as subMenu}
									<li>
										<a
											aria-label={subMenu.name}
											href={subMenu.href}
											style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
										>
											{subMenu.name}
										</a>
									</li>
								{/each}
							</ul>
						{:else}
							<a
								aria-label={navItem.name}
								href={navItem.href}
								class="flex justify-start w-full text-left btn btn-ghost"
							>
								{navItem.name}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-link" href="/" aria-label="logo-link">
			{#if isScrolled}
				<Icons.koredorwhite />
			{:else}
				<Icons.koredor />
			{/if}
		</a>
	</div>
	<div class="hidden navbar-center lg:flex">
		<ul class="px-1 menu menu-horizontal">
			{#each navItems as navItem, index}
				<li>
					{#if navItem.subMenus}
						<details on:toggle={(e) => toggleDetails(e, index)}>
							<summary class={isScrolled ? 'text-white' : 'text-black'}>
								{navItem.name}
							</summary>
							<ul
								class="w-fit rounded-none p-2 {isScrolled ? 'bg-primary' : 'bg-white'}"
								on:mouseenter={cancelCloseTimer}
								on:mouseleave={(e) => startCloseTimer(e.currentTarget.closest('details'))}
							>
								{#each navItem.subMenus as subMenu}
									<li>
										<a
											aria-label={subMenu.name}
											href={subMenu.href}
											style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
											class={isScrolled ? 'text-white' : 'text-black'}
										>
											{subMenu.name}
										</a>
									</li>
								{/each}
							</ul>
						</details>
					{:else}
						<a
							href={navItem.href}
							class={isScrolled ? 'text-white' : 'text-black'}
							aria-label={navItem.name}
						>
							{navItem.name}</a
						>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a
			aria-label="sign-in"
			href="https://issuer.koredorcapital.com/"
			class="btn {isScrolled ? 'btn-ghost' : 'btn-primary'}">Sign In <Icons.logIn /></a
		>
	</div>
</div>
<div class="w-full py-5 text-center text-white bg-secondary">
	Operating Soon! We’re in our beta stage and accepting pre-registrations for the waitlist. For inquiries, email us at developer@koredorcapital.com.
</div>

<style>
	ul.menu li details ul li a {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		height: 50px;
		max-width: 100%;
		line-height: 30px;
	}
	.menu.dropdown-content .p-2 li a {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		max-width: 100%;
		height: 50px;
		line-height: 40px;
	}
</style>
