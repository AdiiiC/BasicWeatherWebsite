function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then(response => response.json())
                .then(data => {
                    const cty = data.address.city;
                    document.getElementById("city").value = cty
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}


function print(stuff){
    console.log(stuff)
}

async function fetchWeather() {
    cityval = city.value
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${String(cityval)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2023d6805bmsh91be3e252131ac6p19e6b9jsne0dad2b45049',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const res = await fetch(url, options);
        const response = await res.json();
        dateup = new Date(response.sunrise * 1000);
        datedown = new Date(response.sunset * 1000)
        cityName.innerHTML = city.value
        cloud_pct.innerHTML = `${response.cloud_pct}%`
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = Math.round(response.wind_speed)
        wind_speed2.innerHTML = Math.round(response.wind_speed) 
        wind_degrees.innerHTML = `${Math.round(response.wind_degrees)}°`
        sunrise.innerHTML = `${dateup.getHours()}:${datedown.getMinutes()}`;
        sunset.innerHTML = `${datedown.getHours()}:${datedown.getMinutes()}`;
        console.log()
    } catch (error) {
        console.error(error);
    }
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        fetchWeather(city.value)
    })
}
fetchWeather()


async function LoadDelhi(){
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2023d6805bmsh91be3e252131ac6p19e6b9jsne0dad2b45049',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const res = await fetch(url, options);
        const response = await res.json();
        dateup = new Date(response.sunrise * 1000);
        datedown = new Date(response.sunset * 1000)
        cityName.innerHTML = city.value
        dpct.innerHTML = `${response.cloud_pct}%`
        dtemp.innerHTML = response.temp
        dfl.innerHTML = response.feels_like
        dtemp_min.innerHTML = response.min_temp
        dtemp_max.innerHTML = response.max_temp
        dws.innerHTML = `${Math.round(response.wind_speed)}km/h`
        dwd.innerHTML = `${Math.round(response.wind_degrees)}°`
        dsr.innerHTML = `${dateup.getHours()}:${datedown.getMinutes()}`;
        dss.innerHTML = `${datedown.getHours()}:${datedown.getMinutes()}`;
        console.log()
    } catch (error) {
        console.log(response);
        console.error(error);
    }
}
LoadDelhi()

async function LoadSingapore(){
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=singapore`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2023d6805bmsh91be3e252131ac6p19e6b9jsne0dad2b45049',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const res = await fetch(url, options);
        const response = await res.json();
        dateup = new Date(response.sunrise * 1000);
        datedown = new Date(response.sunset * 1000)
        cityName.innerHTML = city.value
        spct.innerHTML = `${response.cloud_pct}%`
        stemp.innerHTML = response.temp
        sfl.innerHTML = response.feels_like
        stemp_min.innerHTML = response.min_temp
        stemp_max.innerHTML = response.max_temp
        sws.innerHTML = `${Math.round(response.wind_speed)}km/h`
        swd.innerHTML = `${Math.round(response.wind_degrees)}°`
        ssr.innerHTML = `${dateup.getHours()}:${datedown.getMinutes()}`;
        sss.innerHTML = `${datedown.getHours()}:${datedown.getMinutes()}`;
        console.log()
    } catch (error) {
        console.log(response);
        console.error(error);
    }
}
LoadSingapore()

async function NewYork(){
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2023d6805bmsh91be3e252131ac6p19e6b9jsne0dad2b45049',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const res = await fetch(url, options);
        const response = await res.json();
        dateup = new Date(response.sunrise * 1000);
        datedown = new Date(response.sunset * 1000)
        cityName.innerHTML = city.value
        npct.innerHTML = `${response.cloud_pct}%`
        ntemp.innerHTML = response.temp
        nfl.innerHTML = response.feels_like
        ntemp_min.innerHTML = response.min_temp
        ntemp_max.innerHTML = response.max_temp
        nws.innerHTML = `${Math.round(response.wind_speed)}km/h`
        nwd.innerHTML = `${Math.round(response.wind_degrees)}°`
        nsr.innerHTML = `${dateup.getHours()}:${datedown.getMinutes()}`;
        nss.innerHTML = `${datedown.getHours()}:${datedown.getMinutes()}`;
        console.log()
    } catch (error) {
        console.log(response);
        console.error(error);
    }
}
NewYork()

async function Johannesburg(){
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Johannesburg`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2023d6805bmsh91be3e252131ac6p19e6b9jsne0dad2b45049',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const res = await fetch(url, options);
        const response = await res.json();
        dateup = new Date(response.sunrise * 1000);
        datedown = new Date(response.sunset * 1000)
        cityName.innerHTML = city.value
        jpct.innerHTML = `${response.cloud_pct}%`
        jtemp.innerHTML = response.temp
        jfl.innerHTML = response.feels_like
        jtemp_min.innerHTML = response.min_temp
        jtemp_max.innerHTML = response.max_temp
        jws.innerHTML = `${Math.round(response.wind_speed)}km/h`
        jwd.innerHTML = `${Math.round(response.wind_degrees)}°`
        jsr.innerHTML = `${dateup.getHours()}:${datedown.getMinutes()}`;
        jss.innerHTML = `${datedown.getHours()}:${datedown.getMinutes()}`;
        console.log()
    } catch (error) {
        console.log(response);
        console.error(error);
    }
}
Johannesburg()
