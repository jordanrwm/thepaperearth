export const shufflePhotos = (photoLinkArray: string[]) => {
	let currentIndex = photoLinkArray.length,
		randomIndex;

	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[photoLinkArray[currentIndex], photoLinkArray[randomIndex]] = [
			photoLinkArray[randomIndex],
			photoLinkArray[currentIndex]
		];
	}

	return photoLinkArray;
};
