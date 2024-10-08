<script>
	import { Icons } from '$lib/components/icons';
	import { Input } from '$lib/components/ui/input';
	import { Select } from '$lib/components/ui/select';
	import { industries } from '$lib/lov';
	import { anchorContactSchema } from '$lib/schemas/contact';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addToast, ToastType } from '../../stores/toastStores';

	let data = {
		fullName: '',
		companyName: '',
		email: '',
		mobile: '',
		industry: '',
		message: ''
	};

	let isLoading = false;

	const {
		form: formData,
		errors,
		enhance
	} = superForm(data, {
		validators: zodClient(anchorContactSchema),
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
					'Thank you for reaching out! Your form has been successfully submitted. Our team at Koredor will review your details and contact you shortly to set up an initial discussion on how we can support your supplier ecosystem’s working capital needs. We look forward to partnering with you for your company’s growth.'
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

<div class="container p-5 mx-auto" id="reg-form">
	<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
		<div class="py-5">
			<h2 class="text-xl font-bold text-primary lg:text-2xl">
				Transform your company's operations by partnering with Koredor to support your supplier
				ecosystem's working capital requirements
			</h2>
			<h2 class="py-3 text-xl">
				Fill out the form, and we will set up an initial discussion with you!
			</h2>
		</div>
		<div class="p-5 rounded-lg bg-base-200">
			<h2 class="text-xl font-bold text-primary lg:text-2xl">Partner with Koredor for Growth</h2>
			<form method="POST" class="grid gap-2 py-5" use:enhance action="?/anchorContact">
				<Input label="Full Name" name="fullName" {formData} {errors} icon={Icons.idCard} />
				<Input label="Company Name" name="companyName" {formData} {errors} icon={Icons.building} />
				<Input label="Email" name="email" {formData} {errors} icon={Icons.email} />
				<Input
					prefix="+63"
					label="Mobile Number"
					name="mobile"
					{formData}
					{errors}
					icon={Icons.smartphone}
				/>
				<Select
					icon={Icons.building2}
					label="Company Industry"
					name="industry"
					{formData}
					{errors}
					options={industries}
				/>

				<textarea
					class="textarea textarea-bordered {$errors.message ? 'textarea-error' : ''}"
					placeholder="Your Message"
					bind:value={$formData.message}
					aria-label="message"
					rows="10"
				></textarea>
				{#if $errors.message}
					<span class="text-red-600 label-text-alt">{$errors.message}</span>
				{/if}

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
	</div>
</div>
