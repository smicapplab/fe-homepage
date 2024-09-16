// @ts-nocheck
import { json } from '@sveltejs/kit';
import natural from 'natural';
import preprocessedIssuerFAQ from '$lib/data/preprocessed_issuer_faq.json';
import preprocessedAnchorFAQ from '$lib/data/preprocessed_anchor_faq.json';
import preprocessedInvestorFAQ from '$lib/data/preprocessed_investor_faq.json';
import preprocessedPartnerFAQ from '$lib/data/preprocessed_partner_faq.json';

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

function preprocessQuery(query) {
	const tokens = tokenizer.tokenize(query.toLowerCase());
	return tokens.map((token) => stemmer.stem(token));
}

function calculateRelevanceScore(queryTokens, itemTokens) {
	let matchingTokens = 0;
	for (const queryToken of queryTokens) {
		for (const itemToken of itemTokens) {
			if (natural.LevenshteinDistance(queryToken, itemToken, { search: true }) <= 2) {
				matchingTokens++;
				break;
			}
		}
	}
	return matchingTokens / queryTokens.length;
}

function searchFAQ({ query, type }) {
	const queryTokens = preprocessQuery(query);

	let preprocessedFAQ = [];
	if (type === 'issuer') {
		preprocessedFAQ = preprocessedIssuerFAQ;
	} else if (type === 'anchor') {
		preprocessedFAQ = preprocessedAnchorFAQ;
	} else if (type === 'investor') {
		preprocessedFAQ = preprocessedInvestorFAQ;
	} else if (type === 'partner') {
		preprocessedFAQ = preprocessedPartnerFAQ;
	}

	const results = preprocessedFAQ.map((item) => {
		const combinedScore = calculateRelevanceScore(queryTokens, item.preprocessedCombined);
		// We give more weight to question matches, but still consider answer matches
		const score = combinedScore;
		return { question: item.question, answer: item.answer, score };
	});

	results.sort((a, b) => b.score - a.score);
	return results.filter((item) => item.score > 0).slice(0, 3);
}

export async function POST({ request }) {
	const { query, topOnly = false, type } = await request.json();
	if (!query) {
		return json({ error: 'Query is required' }, { status: 400 });
	}

	const results = searchFAQ({ query, type });

	// if topOnly is true, return only 1 result
	if (topOnly) {
		return json(results[0]);
	}

	return json(results);
}
