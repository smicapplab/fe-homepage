<script>
	// @ts-nocheck
	export let label = '';
	export let name = '';
	export let errors;
	export let icon;
	export let formData;
	export let prefix = undefined;
</script>

<div class="mb-2">
	<label class="input input-bordered flex items-center gap-2 {$errors[name] ? 'input-error' : ''}">
		{#if icon}
			<svelte:component this={icon} />
		{/if}
		{#if prefix}
			{prefix}
		{/if}
		<input type="text" {name} class="grow" placeholder={label} bind:value={$formData[name]} />
	</label>
	{#if $errors[name]}
		<span class="text-red-600 label-text-alt">{$errors[name]}</span>
	{/if}
</div>
