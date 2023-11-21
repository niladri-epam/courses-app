export const getCourseDuration = (duration) => {
	const durationArr = (duration / 60).toFixed(1).split('.');
	const hours = durationArr[0] < 10 ? `0${durationArr[0]}` : durationArr[0];
	const minutes = durationArr[1] < 10 ? `0${durationArr[1]}` : durationArr[1];

	return `${hours}:${minutes} ${parseInt(hours) === 1 ? 'hour' : 'hours'}`;
};
