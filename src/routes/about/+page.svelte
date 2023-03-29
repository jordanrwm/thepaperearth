<script lang="ts">
	import band from '$lib/assets/band-about.jpg';
</script>

<svelte:head>
	<title>About - The Paper Earth</title>
</svelte:head>

<div class="flex flex-col md:flex-row justify-center items-center flex-auto p-4">
	<div class="basis-2/4 flex justify-center mb-6 mt-6 md:mb-0 md:mt-0">
		<img src={band} alt="Bungalow 1" />
	</div>
	<div class="basis-2/4 flex flex-col items-center justify-center md:h-3/4">
		<h2 class="text-3xl md:text-5xl text-center mb-4">Who Are We?</h2>
		<p class="px-4 md:px-16 text-lg md:text-2xl leading-10 text-center">
			The Paper Earth is an American alt-punk band that formed in Cincinnati, Ohio in 2018, with the
			current lineup coming together in 2022. The band consists of vocalist/guitarist Sam Moody,
			guitarist PJ Gebhart, guitarist CJ Havens, bassist Tommy Thornton, and drummer Zachary
			Castonguay. The Paper Earth calls on a variety of hardcore and alternative influences for the
			single “Blu”, as well as the upcoming self-titled LP. Their high-energy live performances put
			them on the map in Cincinnati Clifton music scene, frequenting stages such as Legends Bar &
			Venue and The Mockbee, in addition to legendary house shows on UC campus alongside dozens of
			the scenes best acts.The Paper Earths music is available on all streaming platforms and a
			frequently updated calendar of live shows can be found on the home page.
		</p>
	</div>
</div>

<style lang="scss">
	img {
		max-width: 80%;
	}
</style>
