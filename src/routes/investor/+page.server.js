import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import {
	individualInvestorContactSchema,
	institutionInvestorContactSchema
} from '$lib/schemas/contact.js';

export const actions = {
	individualContact: async ({ request }) => {
		const form = await superValidate(request, zod(individualInvestorContactSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		return {
			form
		};
	},
	institutionContact: async ({ request }) => {
		const form = await superValidate(request, zod(institutionInvestorContactSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		return {
			form
		};
	}
};
