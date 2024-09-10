// @ts-nocheck
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);
export const sendEmailViaResend = async ({ fullName, email, message, subject }) => {
	try {
		await resend.emails.send({
			from: 'developer@koredorcapital.com',
			to: 's.torrefranca@gmail.com',
			subject,
			html: `
              <strong>From:</strong> ${fullName}<br/>
              <strong>Email:</strong> ${email}<br/>
              <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            `
		});

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};
