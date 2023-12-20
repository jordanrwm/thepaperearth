<script lang="ts">
	import { shufflePhotos } from '$lib/utils/helpers.js';
	export let data;

	const photoData = shufflePhotos(data.photoData) ?? [];
	console.log('photos', photoData);
</script>

<div class="p-10 flex-1">
	<h1 class="mb-10 md:text-6xl text-xl text-center">Photos</h1>
	<div class="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-8">
		{#each photoData as photo}
			<img class="h-auto max-w-full rounded-lg" src={photo} alt="band" />
		{/each}
	</div>
</div>
