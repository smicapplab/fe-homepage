<script>
	import { assets } from '$app/paths';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let measurementId = 'G-34KG9BD86Q';
	let previousPath = '';

	export let title = 'Koredor Kapital';
	export let siteName = 'Koredor Kapital';
	export let description = 'Koredor Kapital';
	export let image = `${assets}/images/koredor-cap.jpg`;

	$: url = $page.url.href;

	/**
	 * @param {string} title
	 * @param {string} description
	 */
	function generateSEOKeywords(title, description) {
		// List of common stopwords to remove
		const stopwords = [
			'i',
			'me',
			'my',
			'myself',
			'we',
			'our',
			'ours',
			'ourselves',
			'you',
			'your',
			'yours',
			'yourself',
			'yourselves',
			'he',
			'him',
			'his',
			'himself',
			'she',
			'her',
			'hers',
			'herself',
			'it',
			'its',
			'itself',
			'they',
			'them',
			'their',
			'theirs',
			'themselves',
			'what',
			'which',
			'who',
			'whom',
			'this',
			'that',
			'these',
			'those',
			'am',
			'is',
			'are',
			'was',
			'were',
			'be',
			'been',
			'being',
			'have',
			'has',
			'had',
			'having',
			'do',
			'does',
			'did',
			'doing',
			'a',
			'an',
			'the',
			'and',
			'but',
			'if',
			'or',
			'because',
			'as',
			'until',
			'while',
			'of',
			'at',
			'by',
			'for',
			'with',
			'about',
			'against',
			'between',
			'into',
			'through',
			'during',
			'before',
			'after',
			'above',
			'below',
			'to',
			'from',
			'up',
			'down',
			'in',
			'out',
			'on',
			'off',
			'over',
			'under',
			'again',
			'further',
			'then',
			'once',
			'here',
			'there',
			'when',
			'where',
			'why',
			'how',
			'all',
			'any',
			'both',
			'each',
			'few',
			'more',
			'most',
			'other',
			'some',
			'such',
			'no',
			'nor',
			'not',
			'only',
			'own',
			'same',
			'so',
			'than',
			'too',
			'very',
			's',
			't',
			'can',
			'will',
			'just',
			'don',
			'should',
			'now'
		];

		const cleanAndSplit = (/** @type {string} */ text) => {
			return (
				text
					.toLowerCase() // Convert to lowercase
					.replace(/[^a-zA-Z0-9\s]/g, '') // Remove punctuation
					.split(/\s+/) // Split by spaces
					// @ts-ignore
					.filter((word) => word.length > 1 && !stopwords.includes(word))
			); // Remove stopwords and short words
		};

		const titleKeywords = cleanAndSplit(title);
		const descriptionKeywords = cleanAndSplit(description);

		const allKeywords = [...new Set([...titleKeywords, ...descriptionKeywords])];

		return allKeywords.join(', ');
	}

	onMount(() => {
		if (browser) {
			const script = document.createElement('script');
			script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
			script.async = true;
			document.head.appendChild(script);

			// @ts-ignore
			window.dataLayer = window.dataLayer || [];
			// @ts-ignore
			window.gtag = function () {
				// @ts-ignore
				window.dataLayer.push(arguments);
			};
			// @ts-ignore
			window.gtag('js', new Date());
			// @ts-ignore
			window.gtag('config', measurementId);
		}
	});

// @ts-ignore
		$: if (browser && $page.url.pathname !== previousPath) {
		previousPath = $page.url.pathname;
		// @ts-ignore
		window.gtag('config', measurementId, {
			page_path: $page.url.pathname
		});
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={generateSEOKeywords(title, description)} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter Card -->
	<!-- <meta name="twitter:card" content={siteName} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:site" content="@yourTwitterHandle" /> -->

	<!-- Canonical URL -->
	<link rel="canonical" href={url} />

	<!-- Robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>
