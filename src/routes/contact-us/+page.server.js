//import { destructureFormData } from '$lib/formDataUtil.js';
import { destructureFormData } from '$lib/formDataUtil.js';
import { contactUsFormSchema } from '$lib/schemas/contact.js';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

export const actions = {
	contact: async ({ request }) => {
        const form = await superValidate(request, zod(contactUsFormSchema));
        if (!form.valid) {
          return {
            form,
          };
        }
        console.log(form)
        if (!form.valid) {
			return fail(400, { form });
		}

		const { fullName, email, companyName, mobile, message } = form.data;
        console.log({ fullName, email, companyName, mobile, message })        

		return {
			form
		};
	}
};
