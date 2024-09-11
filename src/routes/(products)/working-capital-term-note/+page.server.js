// @ts-nocheck
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { capitalCalculatorSchema } from '$lib/schemas/calculators.js';
import { sendEmailViaResend } from '$lib/util/resend.js';
import { assembleMessage } from '$lib/util/calculator-email-template.js';

export const actions = {
	sendComputation: async ({ request }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, zod(capitalCalculatorSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		const additionalData = {
			inputLabel: formData.get('inputLabel'),
			amountInputted: parseFloat(formData.get('amountInputted') || '0'),
			interestRate: parseFloat(formData.get('interestRate') || '0'),
			financingAmount: parseFloat(formData.get('financingAmount') || '0'),
			marketplaceFee: parseFloat(formData.get('marketplaceFee') || '0'),
			amountToPay: JSON.parse(formData.get('amountToPay') || '{}')
		};

		const combinedData = {
			...form.data,
			...additionalData
		};

		const messageHtml = assembleMessage(combinedData);

		await sendEmailViaResend({
			to: combinedData.email,
			message: messageHtml,
			subject: `Koredor Capital: ${combinedData.product} Calculator`
		});

		return {
			form
		};
	}
};
