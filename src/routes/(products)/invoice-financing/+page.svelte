<script>
	import Seo from '$lib/components/seo.svelte';
	import Hero from './hero.svelte';
	import { title, description } from './page-data'
	import Summary from './summary.svelte';
	import Calculator from './calculator.svelte';
	import TermsMain from './terms-main.svelte';
</script>

<Seo
  {title}
  {description}
/>

<Hero />
<Summary />
<TermsMain />