<script>
	import { assets } from '$app/paths';
	import { Icons } from '$lib/components/icons';
	import Input from '$lib/components/ui/input/input.svelte';
	import { contactUsFormSchema } from '$lib/schemas/contact.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addToast, ToastType } from '../../stores/toastStores';
	import Toast from '$lib/components/ui/toast/toast.svelte';

	let isLoading = false;

	let data = $$props;
	const form = superForm(data, {
		validators: zodClient(contactUsFormSchema),
		dataType: 'json', // Add this line
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			const { result: formResult } = result;
			console.log(formResult);
			if (formResult.type === 'success') {
				addToast(
					ToastType.success,
					'Thank you for contacting us. We will get back to you shortly.'
				);
			}
		}
	});

	const { form: formData, errors, enhance } = form;
</script>

<div
	class="hero min-h-[50vh] bg-base-200"
	style={`background-image: url("${assets}/images/hero/contact.jpg");`}
>
	<div class="flex-col hero-content lg:flex-row lg:items-start lg:justify-start">
		<div class="w-full text-center text-white lg:w-5/6 lg:text-left">
			<h1 class="text-5xl font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
				Let’s Connect!
			</h1>
			<p class="py-6 text-xl" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);">
				Whether you have a question or feedback we are here to assist you.
			</p>
		</div>
	</div>
</div>
<div class="flex items-center justify-center">
	<div class="container p-5">
		<div class="grid grid-cols-1 gap-5 py-10 lg:grid-cols-2">
			<div>
				<h2 class="text-2xl font-bold text-primary">Get in touch with us!</h2>
				<p class="text-secondary">
					Fill out the form and we will get back to you as soon as possible.
				</p>
			</div>
			<div>
				<form method="POST" class="grid gap-2" use:enhance action="?/contact">
					<Input label="Full Name" name="fullName" {formData} {errors} icon={Icons.idCard} />
					<Input
						label="Company Name"
						name="companyName"
						{formData}
						{errors}
						icon={Icons.building}
					/>
					<Input label="Email" name="email" {formData} {errors} icon={Icons.email} />
					<Input
						prefix="+63"
						label="Mobile Number"
						name="mobile"
						{formData}
						{errors}
						icon={Icons.smartphone}
					/>

					<textarea
						class="textarea textarea-bordered {$errors.message ? 'textarea-error' : ''}"
						placeholder="Your Message"
						bind:value={$formData.message}
					></textarea>
					{#if $errors.message}
						<span class="text-red-600 label-text-alt">{$errors.message}</span>
					{/if}

					<button type="submit" class="mt-2 btn btn-primary" disabled={isLoading}>
						{#if isLoading}
							<span class="loading loading-dots loading-lg"></span>
						{:else}
							Submit
						{/if}
					</button>
				</form>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-5 py-10 lg:grid-cols-2">
			<div>
				<h2 class="text-2xl font-bold text-primary">Koredor Capital</h2>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div class="flex items-center space-x-4">
						<Icons.mapPin class="text-secondary" />
						<div>
							<h4 class="text-lg font-semibold text-secondary">Address</h4>
							<p>1234 Street Name, City, State, Zip Code</p>
						</div>
					</div>

					<!-- Office Hours Section -->
					<div class="flex items-center space-x-4">
						<Icons.clock class="text-secondary" />
						<div>
							<h4 class="text-lg font-semibold text-secondary">Office Hours</h4>
							<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
							<p>Saturday: 10:00 AM - 4:00 PM</p>
						</div>
					</div>

					<!-- Mobile Numbers Section -->
					<div class="flex items-center space-x-4">
						<Icons.smartphone class="text-secondary" />
						<div>
							<h4 class="text-lg font-semibold text-secondary">Mobile Numbers</h4>
							<p>+1 (555) 123-4567</p>
							<p>+1 (555) 987-6543</p>
						</div>
					</div>

					<!-- Email Section -->
					<div class="flex items-center space-x-4">
						<Icons.email class="text-secondary" />
						<div>
							<h4 class="text-lg font-semibold text-secondary">Emails</h4>
							<p>info@example.com</p>
							<p>support@example.com</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="relative h-80">
					<iframe
					  title="addressmap"
					  class="w-full h-full rounded-lg shadow-lg"
					  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9177472883294!2d-122.084249!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24d3c59f4b1%3A0xe2b47cf0983b30c6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617970120652!5m2!1sen!2sus&zoom=15&disableDefaultUI=true&disableDoubleClickZoom=true&scrollwheel=false&fullscreenControl=false"
					  style="border:0;"
					  allowfullscreen={false}
					  loading="lazy"
					></iframe>
				  </div>
			</div>
		</div>
	</div>
	<Toast />
</div>
