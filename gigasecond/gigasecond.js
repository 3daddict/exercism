export const gigasecond = () => {
    const gigaseconds = 1000000000000;
	const startDate = date.getTime();
	console.log('StartDate', startDate);
	const output = new Date(startDate + gigaseconds);
	output.setHours(0);
	output.setMinutes(0);
	output.setSeconds(0);
	console.log('output', output);
}