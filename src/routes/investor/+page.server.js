import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { investorContactSchema } from '$lib/schemas/contact.js';

export const actions = {
	anchorContact: async ({ request }) => {
		const form = await superValidate(request, zod(investorContactSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		console.log(form.data);
		return {
			form
		};
	}
};
