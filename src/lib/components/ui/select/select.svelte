<script>
	// @ts-nocheck
	import { Icons } from '$lib/components/icons';

	export let label = '';
	export let name = '';
	export let errors;
	export let formData;
	export let icon;
	/**
	 * @type {{ id: string, label: string }[]}
	 */
	export let options = [];
</script>

<div class="relative mb-2">
	<!-- Container for select with icon -->
	<div class="relative">
		{#if icon}
			<svelte:component
				this={icon}
				class="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 pointer-events-none left-3 top-1/2"
			/>
		{/if}

		<select
			{name}
			class="select select-bordered w-full {icon ? 'pl-10' : ''} {$errors[name] ? 'select-error' : ''}"
			bind:value={$formData[name]}
		>
			<option disabled selected value="">{label}</option>
			{#each options as option}
				<option value={option.id}>{option.label}</option>
			{/each}
		</select>
	</div>

	{#if $errors[name]}
		<span class="block mt-1 text-red-600 label-text-alt">{$errors[name]}</span>
	{/if}
</div>