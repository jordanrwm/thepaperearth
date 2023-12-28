<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeaderDrawer from '$lib/components/HeaderDrawer.svelte';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<svelte:head>
	<title>The Paper Earth</title>
</svelte:head>
<div class="flex flex-col w-full">
	<HeaderDrawer />
	<Header />
	<slot />
	<Footer />
</div>
