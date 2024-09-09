export const disclaimers = [
	'Amounts presented are estimates only. Final calculations and terms are subject to assessment upon note execution.',
	'The sample computation is based on a 2% monthly interest rate. Actual interest rates may vary depending on the credit rating and auction results.',
	'The financing amount is based on the maximum Loan-To-Value ratio.'
];

/**
 * Calculates the marketplace fee for a given financing amount.
 *
 * The marketplace fee is calculated as 5% of the financing amount,
 * multiplied by a 12% annual appreciation rate.
 *
 * @param {number} financingAmount - The amount borrowed from the marketplace.
 * @returns {number} - The calculated marketplace fee.
 */
export const calculateMarketplaceFee = (financingAmount) => {
	return financingAmount * 0.05 * 1.12;
};
