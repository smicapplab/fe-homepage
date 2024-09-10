<script>
	import { Icons } from '$lib/components/icons';
	import { Input } from '$lib/components/ui/input';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addToast, ToastType } from '../../stores/toastStores';
	import { individualInvestorContactSchema } from '$lib/schemas/contact';

	let data = {
		investorType: 'IND',
		fullName: '',
		email: '',
		mobile: '',
		capital: 0
	};

	let isLoading = false;

	const {
		form: formData,
		errors,
		enhance
	} = superForm(data, {
		validators: zodClient(individualInvestorContactSchema),
		dataType: 'json',
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			// @ts-ignore
			const { result: formResult } = result;
			if (formResult.type === 'success') {
				addToast(
					ToastType.success,
					'Thank you for reaching out! Your form has been successfully submitted. Our team at Koredor will review your details and contact you shortly to set up an initial discussion with you.'
				);
				// @ts-ignore
				$formData = {};
			} else {
				addToast(
					ToastType.error,
					'Oops! Something went wrong while submitting the form. Please check your details and try again.'
				);
			}
		}
	});
</script>

<div class="w-full" id="reg-form">
	<form method="POST" class="grid gap-2 py-5" use:enhance action="?/individualContact">
		<Input label="Full Name" name="fullName" {formData} {errors} icon={Icons.idCard} />
		<Input label="Email" name="email" {formData} {errors} icon={Icons.email} />
		<Input
			prefix="+63"
			label="Mobile Number"
			name="mobile"
			{formData}
			{errors}
			icon={Icons.smartphone}
		/>
		<Input
			type="number"
			label="Estimated Capital for Investment with Koredor"
			name="capital"
			{formData}
			{errors}
			icon={Icons.banknote}
		/>

		<button
			type="submit"
			class="mt-2 btn btn-primary max-w-60"
			disabled={isLoading}
			aria-label="submit"
		>
			{#if isLoading}
				<span class="loading loading-dots loading-lg"></span>
			{:else}
				Submit <Icons.send />
			{/if}
		</button>
	</form>
</div>
