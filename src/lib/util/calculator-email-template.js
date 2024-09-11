// @ts-nocheck
import numeral from 'numeral';

/**
 * Construct a table body given an object of repayment terms.
 *
 * @param {Object} [amountToPay={}] - An object where the keys are the repayment terms, and the values are the amount to pay for each term.
 *
 * @returns {string} The table body as a string.
 */
const constructTableBody = (amountToPay = {}) => {
	let tbody = ``;

	for (let key of Object.keys(amountToPay)) {
		tbody += `<tr>
            <td style="padding: 10px;">${key === '1' ? 'One time payment' : `${key} Monthly Installments`}</td>
            <td style="padding: 10px; text-align: right;">₱${numeral(amountToPay[key]).format('0,0.00')}</td>
        </tr>`;
	}
	return tbody;
};

export const assembleMessage = ({
	email = '',
	product = '',
    inputLabel = '',
	amountInputted = 0,
	interestRate = 0,
	financingAmount = 0,
	marketplaceFee = 0,
	amountToPay = {}
}) => {
	const tbody = constructTableBody(amountToPay);
	const html = `
<!DOCTYPE html>
<html lang="en">
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 1000px; margin: 0 auto; padding: 20px;">
    <header style="background-color: #f4f4f4; padding: 20px; text-align: left;">
        <img src="https://www.koredorcapital.com/images/koredor.png" alt="Koredor">
    </header>
    <main style="padding: 20px;">
        <h2 style="color: #F57C00;">${product} Details</h2>
        <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>${inputLabel}:</strong> <span style="color: #28a745;">₱${numeral(amountInputted).format('0,0.00')}</span></li>
            <li style="margin-bottom: 10px;"><strong>Financing Amount:</strong> <span style="color: #28a745;">₱${numeral(financingAmount).format('0,0.00')}</span></li>
            <li style="margin-bottom: 10px;"><strong>Marketplace Fee:</strong> <span style="color: #28a745;">₱${numeral(marketplaceFee).format('0,0.00')}</span></li>
        </ul>
        
        <h2 style="color: #F57C00;">Payment Options</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr style="background-color: #F57C00; color: white;">
                    <th style="padding: 10px; text-align: left;">Terms</th>
                    <th style="padding: 10px; text-align: right;">Amount</th>
                </tr>
            </thead>
            <tbody>
                ${tbody}
            </tbody>
        </table>
    </main>
    <footer style="background-color: #f4f4f4; padding: 20px; text-align: center; margin-top: 20px;">
        <p style="margin: 0;">For more information, please visit <a href="https://www.koredorcapital.com/" style="color: #F57C00; text-decoration: none;">koredorcapital.com</a></p>
    </footer>
</body>
</html>   
    `;

	return html;
};
