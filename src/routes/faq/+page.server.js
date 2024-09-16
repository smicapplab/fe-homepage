import issuerFaqData from '$lib/data/preprocess-issuer-data.json';
import issuerAnchorData from '$lib/data/preprocess-anchor-data.json';
import investorFaqData from '$lib/data/preprocess-investor-data.json';
import partnerFaqData from '$lib/data/preprocess-partner-data.json';

export async function load() {
	return {
		issuerFaqData,
		issuerAnchorData,
		investorFaqData,
		partnerFaqData,
	};
}
