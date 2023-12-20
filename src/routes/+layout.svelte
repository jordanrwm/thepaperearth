<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeaderDrawer from '$lib/components/HeaderDrawer.svelte';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<div class="flex flex-col w-full">
	<HeaderDrawer />
	<Header />
	<slot />
	<Footer />
</div>
