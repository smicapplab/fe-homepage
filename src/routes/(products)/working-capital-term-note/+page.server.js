import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { capitalCalculatorSchema } from '$lib/schemas/calculators.js';

export const actions = {
	sendComputation: async ({ request }) => {
		const form = await superValidate(request, zod(capitalCalculatorSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		return {
			form
		};
	}
};
