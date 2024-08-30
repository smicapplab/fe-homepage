<script>
	// @ts-nocheck
	export let label = '';
	export let name = '';
	export let errors;
	export let icon;
	export let formData;
	export let prefix = undefined;
	export let type = 'text';
	export let placeholder = '';
</script>

<div class="mb-2">
	<label class="input input-bordered flex items-center gap-2 {$errors[name] ? 'input-error' : ''}">
		{#if icon}
			<svelte:component this={icon} />
		{/if}
		{#if prefix}
			{prefix}
		{/if}
		{#if type === 'number'}
			<input
				type="number"
				{name}
				class="join-item grow"
				placeholder={placeholder || label}
				bind:value={$formData[name]}
			/>
		{:else}
			<input
				type="text"
				{name}
				class="join-item grow"
				placeholder={placeholder || label}
				bind:value={$formData[name]}
			/>
		{/if}
	</label>
	{#if $errors[name]}
		<span class="label-text-alt text-red-600">{$errors[name]}</span>
	{/if}
</div>
