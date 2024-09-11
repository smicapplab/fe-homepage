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

			const messageHtml = `
              <strong>Email:</strong> ${form.data.email}<br/>
              <p><strong>Message:</strong><br>${'Join Newsletter'.replace(/\n/g, '<br>')}</p>
            `;

			await sendEmailViaResend({
				to: 's.torrefranca@gmail.com',
				message: messageHtml,
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
