<script lang="ts">
	import GoogleCalendar from '$lib/components/GoogleCalendar.svelte';
</script>

<svelte:head>
	<title>Calendar - The Paper Earth</title>
</svelte:head>

<div class="flex flex-col items-center justify-center flex-auto p-0 mt-8 md:p-8 md:mt-0">
	<GoogleCalendar />
</div>
