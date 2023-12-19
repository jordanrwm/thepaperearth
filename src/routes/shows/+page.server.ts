import { google } from 'googleapis';
import { CALENDAR_ID, API_KEY } from '$env/static/private';

const getCalendarEvents = async () => {
	const calendar = google.calendar({ version: 'v3', auth: API_KEY });
	const response = await calendar.events.list({
		calendarId: CALENDAR_ID,
		timeMin: new Date().toISOString(),
		maxResults: 10,
		singleEvents: true,
		orderBy: 'startTime'
	});
	const events = response.data.items;
	return events;
};

export const load = async () => {
	try {
		const calendarData = await getCalendarEvents();

		return { calendarData };
	} catch (error) {
		console.error('Error fetching data: ', error);
	}
};
