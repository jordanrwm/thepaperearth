<script lang="ts">
	import st from '$lib/images/st.png';
	import st2X from '$lib/images/st@2x.png';
	import merch from '$lib/images/merch.png';
	import IconBar from '$lib/components/IconBar.svelte';

	export let data;

	const calendarData = data.calendarData ?? [];
	const photoData = data.photoData ?? [];
</script>

<div class="flex flex-1 flex-col">
	<div class="w-screen relative flex flex-col text-black">
		<div class="flex">
			<img
				src={st}
				srcset="{st} 1080w, {st2X} 4320w"
				sizes="(max-width: 1080) 1080px,
						4320px"
				alt="the paper earth self-titled album cover"
			/>
		</div>
		<div
			class="md:absolute md:w-[35%] w-full md:px-8 md:py-8 px-4 py-4 h-full flex flex-col bg-gradient-to-b from-primary-300 to-primary-500"
		>
			<div class="basis-[50%] flex flex-col justify-end text-center">
				<h1 class="md:mb-4 md:text-6xl text-xl">
					<strong>The Paper Earth</strong>
				</h1>
				<p class="md:text-lg text-xs">out now // all platforms</p>
			</div>
			<div class="flex justify-center basis-[50%] text-center md:text-lg text-xs md:mt-6 mt-4">
				<IconBar color="#000" />
			</div>
		</div>
	</div>
	<div class="w-screen md:my-12 md:py-8 md:px-20 mb-2 p-6 flex flex-col items-center">
		<h1 class="basis-1/3 md:text-6xl text-xl underline md:mb-16 mb-4">Upcoming Shows</h1>
		<div class="basis-2/3 flex flex-col items-end space-y-8">
			{#each calendarData as event}
				<div class="card md:p-6 p-4 md:w-96">
					<h2 class="md:text-4xl text-lg text-primary-500">{event.summary}</h2>
					<p class="md:text-2xl text-xs">
						{new Date(event.start?.dateTime ?? '').toLocaleDateString('en-us', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>
					<p class="md:text-2xl text-xs">
						{event.location ?? ''}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<span class="divider-vertical md:h-20 h-14" />
	<div
		class="w-screen md:my-12 md:py-8 md:px-20 p-6 flex md:flex-row flex-col items-center justify-center"
	>
		<img
			class="basis-1/2 md:max-w-[50%] max-w-[70%] rounded-lg aspect-square"
			src={merch}
			alt="band merch"
		/>
		<h1 class="basis-1/2 p-16 text-center md:text-4xl text-lg">merch coming soon...</h1>
	</div>
</div>
