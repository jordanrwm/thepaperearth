import { google } from 'googleapis';
import { CALENDAR_ID, API_KEY } from '$env/static/private';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: 'drl0obrlp',
	api_key: '746692577763297',
	api_secret: 'B1u94UKgjkk4t649gVpGtWXbgP8'
});

const getPhotoData = async () => {
	const photos = await cloudinary.api.resources({
		type: 'upload',
		prefix: 'thepaperearth/',
		max_results: 100
	});

	const imageUrls = photos.resources.map((resource: { url: string }) => resource.url);

	return imageUrls;
};

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
		const photoData = await getPhotoData();

		return { calendarData, photoData };
	} catch (error) {
		console.error('Error fetching data: ', error);
	}
};
