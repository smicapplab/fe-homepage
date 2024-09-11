// @ts-nocheck
import { json } from '@sveltejs/kit';
import natural from 'natural';
import preprocessedFAQ from '$lib/data/preprocessed_faq.json';

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

function preprocessQuery(query) {
	const tokens = tokenizer.tokenize(query.toLowerCase());
	return tokens.map((token) => stemmer.stem(token));
}

function calculateRelevanceScore(queryTokens, itemTokens) {
	const matchingTokens = queryTokens.filter((token) => itemTokens.includes(token));
	return matchingTokens.length / queryTokens.length;
}

function searchFAQ(query) {
	const queryTokens = preprocessQuery(query);

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
	const { query } = await request.json();
	if (!query) {
		return json({ error: 'Query is required' }, { status: 400 });
	}

	const results = searchFAQ(query);
	return json(results);
}
