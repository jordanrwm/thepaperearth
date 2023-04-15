<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/svelte-splide/css/core';

	import GoogleCalendar from '$lib/components/GoogleCalendar.svelte';

	import sam from '$lib/assets/main_sam.jpg';
	import pj from '$lib/assets/main_pj.jpg';
	import cj from '$lib/assets/main_cj.jpg';
	import tommy from '$lib/assets/main_tommy.jpg';
	import zac from '$lib/assets/main_zac.jpg';
	import crowd from '$lib/assets/main_crowd.jpg';
	import jj from '$lib/assets/main_jj.jpg';
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
				<img src={sam} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={pj} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={cj} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={tommy} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={zac} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={crowd} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
			<SplideSlide>
				<img src={jj} alt="The Paper Earth at The Bungalow" />
			</SplideSlide>
		</Splide>
	</div>
	<div class="basis-2/4 flex flex-col items-center justify-center h-full">
		<h2 class="text-5xl text-center mb-4 md:mb-0 leading-snug">Upcoming shows</h2>
		<GoogleCalendar />
	</div>
</div>
