// @ts-nocheck
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);
export const sendEmailViaResend = async ({
	message = '<p>No Message</p>',
	subject = 'Koredor capital',
	from = 'Koredor Capital<no-reply@koredorcapital.com>',
	to = 's.torrefranca@gmail.com'
}) => {
	try {
		await resend.emails.send({
			from,
			to,
			subject,
			html: message
		});

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};