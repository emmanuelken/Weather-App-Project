const apiKey = 'c4e3cc6f46de56530d59788e30027040';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=c4e3cc6f46de56530d59788e30027040&units=metric';

//fetch weather data
function fetchData() {
    fetch(apiUrl)
    .then(response => {
        if (!response === 200) {
            throw new Error('response was not successful');
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const location = data.name;

        //Update HTML content
        document.getElementById('temp').textContent = temperature + " °C";
        document.getElementById('desc').textContent = description;
        document.getElementById('loc').textContent = location;
    })
    .catch(error => {
        console.error('Could not fetch weather data', error);
    });
}

fetchData();