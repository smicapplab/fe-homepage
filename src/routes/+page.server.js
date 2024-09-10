import { subscribeSchema } from '$lib/schemas/contact.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { sendEmailViaResend } from '$lib/util/resend.js';

export const actions = {
	subscribeToNewsletter: async ({ request }) => {
		try {
			const form = await superValidate(request, zod(subscribeSchema));

			if (!form.valid) {
				return fail(400, { form });
			}

			await sendEmailViaResend({
				fullName: '',
				email: form.data.email,
				message: 'Join Newsletter',
				subject: 'Join Newsletter'
			});

			return {
				form
			};
		} catch (error) {
			console.error(error);
		}
	}
};
