<script lang="ts" src="https://apis.google.com/js/platform.js">
	const API_KEY = 'AIzaSyBLAH3R5fjawzfd6C4g78ffwNOi7E6oOGc';
	const CLIENT_ID = '976224551943-32sbumm88pl8qhsu08oholtg0oll0bab.apps.googleusercontent.com';
	const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
	const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

	const start = async () => {
		console.log('we started');
		gapi.client
			.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				discoveryDocs: [DISCOVERY_DOC],
				scope: SCOPES
			})
			.then(() => {
				const request = {
					calendarId: 'primary',
					timeMin: new Date().toISOString(),
					showDeleted: false,
					singleEvents: true,
					maxResults: 10,
					orderBy: 'startTime'
				};
				console.log('hit', gapi.client);
				// return gapi.client.request({
				// 	path: 'https://www.googleapis.com/calendar/v3/users/me/calendarList'
				// });
			});
	};

	const initializeGapi = async () => {
		gapi.load('client', start);
	};
</script>

<style lang="scss">
</style>
