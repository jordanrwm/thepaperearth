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

export const load = async () => {
	try {
		const photoData = await getPhotoData();

		return { photoData };
	} catch (error) {
		console.error('Error fetching data: ', error);
	}
};
