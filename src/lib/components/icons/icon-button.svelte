<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';

	export let name;
	export let icon;
	export let iconSize = 24;
	export let iconClass = 'text-white';
	export let buttonClass =
		'flex items-center justify-center w-12 h-12 p-0 m-0 border-none rounded-full btn btn-neutral';

	const dispatch = createEventDispatcher();

	function handleClick(event) {
		dispatch('click', event);
	}
</script>

<!-- Use $$restProps directly in the button element -->
<button class={buttonClass} id={name} aria-label={name} on:click={handleClick} {...$$restProps}>
	<svelte:component this={icon} class={iconClass} size={iconSize} />
</button>
