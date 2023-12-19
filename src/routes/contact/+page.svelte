<script lang="ts">
	import IconBar from '$lib/components/IconBar.svelte';
	import band from '$lib/images/band.png';
</script>

<div class="p-10 flex flex-1 flex-col">
	<h1 class="md:text-6xl text-xl text-center">Contact Us</h1>
	<div class="my-auto md:py-8 md:px-20 p-6 flex flex-col items-center md:space-y-10 space-y-6">
		<img
			class="md:max-w-[60%] max-w-[90%] aspect-auto rounded-lg"
			src={band}
			alt="band group pic"
		/>
		<p class="text-center md:text-2xl text-md">paperearthband@gmail.com</p>
		<div><IconBar color="#cfcfcf" /></div>
	</div>
</div>
