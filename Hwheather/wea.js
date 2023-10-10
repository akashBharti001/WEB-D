const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec206354d6msh8f99d71702ed83fp1545cbjsn2556968c0e4a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));