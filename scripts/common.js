// Get time of a day to set ligjt or dark theme
function setColorByTime() {
	const hour = new Date().getHours();
	const body = document.body;

	console.log(hour);
	
	if (hour >= 8 && hour < 20) {
		body.className = 'light-theme';
	} else {
		body.className = 'dark-theme';
	}
}

window.onload = setColorByTime;
