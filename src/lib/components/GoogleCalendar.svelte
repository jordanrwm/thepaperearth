<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import listPlugin from '@fullcalendar/list';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';

	onMount(() => {
		let calendarEl = document.getElementById('calendar') as HTMLElement;
		let calendar = new Calendar(calendarEl, {
			plugins: [googleCalendarPlugin, dayGridPlugin, listPlugin],
			initialView: 'dayGridMonth',
			height: 'auto',
			googleCalendarApiKey: 'AIzaSyBLAH3R5fjawzfd6C4g78ffwNOi7E6oOGc',
			events: {
				googleCalendarId:
					'cdf88ae954489f5da5453cf5c80d035f8d254ceeddc2e426800353ff091597ff@group.calendar.google.com'
			}
		});
		calendar.render();
	});
</script>

<div id="calendar" class="calendar" />

<style lang="scss">
	.calendar {
		border: none;
	}
</style>
