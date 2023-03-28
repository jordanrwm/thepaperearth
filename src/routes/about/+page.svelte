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
			The Paper Earth is an American Alt-punk band that formed in Cincinnati, Ohio in 2018. With
			their current lineup coming together in 2022. The band consists of vocalist/guitarist Sam
			Moody, guitarist PJ Gebhart, guitarist CJ Havens, bassist Tommy Thornton, and drummer Zachary
			Castonguay. The band's 2022 single "Blu" found them rocking the local music scene around
			Cincinnati. You can find The Paper Earth in a local venue or house. The Paper Earth is set to
			release their awaited debut album in 2023.
		</p>
	</div>
</div>

<style lang="scss">
	img {
		max-width: 80%;
	}
</style>
