document.addEventListener('DOMContentLoaded', function() {
	const searchBtn = document.getElementById('searchBtn');
	const noticeId = document.getElementById('notice');
	const searchConsoleClass = document.querySelector ('.search-console');
	const resultsContainerId = document.getElementById('resultsContainer');

	const pElement = document.createElement('p');
	const textNode = document.createTextNode('検索結果あり');
	pElement.appendChild(textNode);
  
	searchBtn.addEventListener('click', function(event) {
	event.preventDefault(); // フォームの送信を防ぐ
	console.log('検索開始');
  
	const randomInt = Math.floor(Math.random() * 10) + 1;
	console.log(randomInt);

	if (randomInt % 2 === 0 && resultsContainerId.children) {
	
		noticeId.classList.add('found-nothing');
		searchConsoleClass.classList.remove('found');

		resultsContainerId.removeChild(pElement);

	} else {

		noticeId.classList.remove('found-nothing');
		searchConsoleClass.classList.add('found');
		
		resultsContainerId.appendChild(pElement);
		
	}
	});
});
  