<script lang="ts">
	import st from '$lib/images/st.png';
	import st2X from '$lib/images/st@2x.png';
	import IconBar from '$lib/components/IconBar.svelte';

	export let data;

	const calendarData = data.calendarData ?? [];

	const gridSizes: { [key: number]: string } = {
		1: 'grid-cols-1',
		2: 'md:grid-cols-2 grid-cols-1'
	};
</script>

<div class="p-10 flex flex-1 flex-col items-center">
	<h1 class="mb-10 md:text-6xl text-xl text-center md:mb-16">Upcoming Shows</h1>
	<div class={`grid justify-items-center gap-8 ${gridSizes[Math.min(2, calendarData.length)]}`}>
		{#each calendarData as event}
			<div class="card md:p-6 p-4 md:w-96 flex flex-col gap-4">
				<h2 class="md:text-4xl text-lg text-primary-500">{event.summary}</h2>
				<p class="text-secondary-500 md:text-2xl text-xs">
					{new Date(event.start?.dateTime ?? '').toLocaleDateString('en-us', {
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>
				<p class="md:text-2xl text-xs underline">
					{@html event.description ?? ''}
				</p>
			</div>
		{/each}
	</div>
</div>
