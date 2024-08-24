<script>
	export let icon;
	export let iconSize = 24;
	export let iconClass = 'text-white';
	export let buttonClass =
		'flex items-center justify-center w-12 h-12 p-0 m-0 border-none rounded-full btn btn-neutral';
</script>

<button class={buttonClass}>
	<svelte:component this={icon} class={iconClass} size={iconSize} />
</button>
