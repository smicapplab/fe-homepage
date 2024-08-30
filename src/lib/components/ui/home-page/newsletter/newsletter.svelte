<script>
	import { subscribeSchema } from '$lib/schemas/contact';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Icons } from '$lib/components/icons';
	import { addToast, ToastType } from '../../../../../stores/toastStores';

	let isLoading = false;

	let data = {
		email: ''
	};

	const {
		form: formData,
		errors,
		enhance
	} = superForm(data, {
		validators: zodClient(subscribeSchema),
		dataType: 'json',
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			const { result: formResult } = result;
			if (formResult.type === 'success') {
				addToast(ToastType.success, 'Thanks for signing up for our newsletter!');
				$formData.email = '';
			} else {
				addToast(
					ToastType.error,
					' Oops! Something didn’t quite work. Please give it another shot in a moment.'
				);
			}
		}
	});
</script>

<div class="flex items-center justify-center py-20">
	<div class="container">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:justify-end">
			<div class="lg:justify-self-start">
				<h2 class="mb-4 text-center text-2xl font-bold text-secondary lg:text-left">
					Join Our Newsletter
				</h2>
				<h2 class="py-3 text-xl">
					Stay in the loop with the latest tips, industry insights, and special offers. Sign up
					today and get all the good stuff straight to your inbox—totally free!
				</h2>
			</div>
			<div class="flex justify-center lg:justify-start">
				<form method="POST" class="w-full max-w-lg" use:enhance action="?/subscribeToNewsletter">
					<div class="join mt-10 w-full">
						<label
							class="input join-item input-bordered flex grow items-center gap-2 focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0 {$errors.email
								? 'input-error'
								: ''}"
						>
							<Icons.email />
							<input
								class="bg-transparent focus:outline-none"
								placeholder="Email"
								name="email"
								bind:value={$formData.email}
							/>
						</label>
						<button
							aria-label="Subscribe"
							type="submit"
							class="btn btn-primary join-item rounded-r-lg"
							disabled={isLoading}
						>
							{#if isLoading}
								<span class="loading loading-dots loading-lg"></span>
							{:else}
								Subscribe <Icons.send />
							{/if}
						</button>
					</div>
					{#if $errors.email}
						<span class="label-text-alt text-red-600 lg:-mt-8">{$errors.email}</span>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>
