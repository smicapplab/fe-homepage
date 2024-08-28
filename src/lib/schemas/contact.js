import { z } from 'zod';

const mobileRegex = /^\d{10,}$/;
const mobile = z
	.string({
		required_error: 'Please enter your mobile number.'
	})
	.refine((val) => mobileRegex.test(val), {
		message: 'Mobile number must be at least 10 numeric digits'
	});

export const email = z
	.string({
		required_error: 'Email is required.'
	})
	.email('Please enter a valid email address so we can reach you.');

export const subscribeSchema = z.object({
	email,
})

export const contactUsFormSchema = z.object({
	fullName: z
		.string({
			required_error: 'Kindly provide your full name so we can address you properly.'
		})
		.min(1, 'Kindly provide your full name so we can address you properly.'),
	companyName: z
		.string({
			required_error: 'Please provide your company name so we know where you are from.'
		})
		.min(1, 'Please provide your company name so we know where you are from.'),
	email,
	mobile,
	message: z
		.string({
			required_error: 'Please share your thoughts with us by entering a message.'
		})
		.min(1, 'Please share your thoughts with us by entering a message.')
});
