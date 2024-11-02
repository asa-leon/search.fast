// Get time of a day to set ligjt or dark theme
function setColorByTime() {
	const hour = new Date().getHours();
	const body = document.body;
	const themeTogglableClasses = document.getElementsByClassName('theme-togglable')
	
	if (hour >= 8 && hour < 20) {
		
		for (let i = 0; i < themeTogglableClasses.length; i++) {
			const element = themeTogglableClasses[i];
			element.classList.add('light-theme');
		}
		
	} else {
		for (let i = 0; i < themeTogglableClasses.length; i++) {
			const element = themeTogglableClasses[i];
			element.classList.add('dark-theme');
		}
	}
}

window.onload = function() {
	setColorByTime();
	isFound();
}
