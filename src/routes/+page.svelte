<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/svelte-splide/css/core';

	import GoogleCalendar from '$lib/components/GoogleCalendar.svelte';

	import bungalow1 from '$lib/assets/bungalow1.jpg';
	import bungalow2 from '$lib/assets/bungalow2.jpg';
	import bungalow3 from '$lib/assets/bungalow3.jpg';
	import bungalow4 from '$lib/assets/bungalow4.jpg';
	import bungalow5 from '$lib/assets/bungalow5.jpg';
	import bungalow6 from '$lib/assets/bungalow6.jpg';
	import bungalow7 from '$lib/assets/bungalow7.jpg';
</script>

<svelte:head>
	<title>The Paper Earth</title>
</svelte:head>

<div class="flex flex-col md:flex-row justify-center items-center flex-auto p-4">
	<div class="basis-2/4 flex justify-center mb-10 md:mb-0">
		<Splide
			aria-label="My Favorite Images"
			options={{
				type: 'loop',
				width: '40vw',
				heightRatio: 1
			}}
		>
			<SplideSlide>
				<img src={bungalow1} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={bungalow2} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={bungalow3} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={bungalow4} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={bungalow5} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={bungalow6} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={bungalow7} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
		</Splide>
	</div>
	<div class="basis-2/4 flex flex-col items-center justify-center h-full">
		<h2 class="text-5xl text-center mb-4 md:mb-0 leading-snug">Upcoming shows</h2>
		<GoogleCalendar />
	</div>
</div>
