<script lang="ts">
	const API_KEY = 'AIzaSyBLAH3R5fjawzfd6C4g78ffwNOi7E6oOGc';
	const CLIENT_ID = '976224551943-32sbumm88pl8qhsu08oholtg0oll0bab.apps.googleusercontent.com';
	const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
	const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

	let tokenClient: any;

	const gapiLoaded = () => {
		gapi.load('client', initializeGapiClient);
	};

	const gisLoaded = () => {
		tokenClient = google.accounts.oauth2.initTokenClient({
			client_id: CLIENT_ID,
			scope: SCOPES,
			callback: '' // defined later
		});
	};

	const initializeGapiClient = async () => {
		await gapi.client.init({
			apiKey: API_KEY,
			discoveryDocs: [DISCOVERY_DOC]
		});
	};

	async function listUpcomingEvents() {
		let response;
		try {
			const request = {
				calendarId:
					'cdf88ae954489f5da5453cf5c80d035f8d254ceeddc2e426800353ff091597ff@group.calendar.google.com',
				timeMin: new Date().toISOString(),
				showDeleted: false,
				singleEvents: true,
				maxResults: 10,
				orderBy: 'startTime'
			};
			response = await gapi.client.calendar.events.list(request);
			console.log('response: ', response);
		} catch (err) {
			return;
		}
	}
</script>

<svelte:head>
	<script async defer src="https://apis.google.com/js/api.js" on:load={gapiLoaded}></script>
	<script async defer src="https://accounts.google.com/gsi/client" on:load={gisLoaded}></script>
</svelte:head>

<button on:click={listUpcomingEvents}>Click Me!</button>

<style lang="scss">
</style>
