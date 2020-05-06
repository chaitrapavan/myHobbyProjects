let city = document.querySelector('.city');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let minMax = document.querySelector('.min-max');


let newsearch = document.querySelector('.new-search');

//function to track the pressed key(enter key from the keyboard)

newsearch.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        getWeather(newsearch.value);    // calling getWeather function
    }
});

//function to get weather data from openweathermap API

function getWeather(citytemp) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citytemp}&units=metric&appid=f1f91a5575ce1c6beae3d259fa3abb94`)

        .then(result => {
            return result.json();
        })
        .then(data => {
            city.textContent = data.name;
            temperature.textContent = `${(Math.round(data.main.temp))}°C`;
            description.textContent = data.weather[0].description;
            minMax.textContent = `${(Math.round(data.main.temp_min))}°c / ${(Math.round(data.main.temp_max))}°c`;
            var wicon = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + wicon + ".png";
            document.getElementById('weatherIcon').setAttribute('src', iconurl);
        
        }) 
}

            let currentData = document.querySelector('.date');
            let now = new Date();
            currentData.textContent = getTodaysDate(now);

            // function to get current or todays Date

            function getTodaysDate(dt) {
                
                let months = ['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let day = days[dt.getDay()];
                let date = dt.getDate();
                let month = months[dt.getMonth()];
                let year = dt.getFullYear();
                return `${day} ${date} ${month} ${year}`;
            }
