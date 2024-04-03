const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b83587e86mshb9fe0d53cf25739p1a76ffjsn6bcf94f408ac',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const unixTimestamp = 1625451842; // Replace with your Unix timestamp

// Convert the Unix timestamp to milliseconds
const milliseconds = unixTimestamp * 1000;

// Create a new Date object with the milliseconds
const dateObj = new Date(milliseconds);

// Format the date object as a human-readable string
const formattedDateTime = dateObj.toLocaleString();

console.log(formattedDateTime);

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
            
			
			
			// cloud_pct.innerHTML = response.cloud_pct
			// cloud_pct2.innerHTML = response.cloud_pct
			
			feels_like.innerHTML = response.feels_like
			// feels_like2.innerHTML = response.feels_like
			
			humidity.innerHTML = response.humidity
			// humidity2.innerHTML = response.humidity
			
			max_temp.innerHTML = response.max_temp
			max_temp2.innerHTML = response.max_temp
			
			min_temp.innerHTML = response.min_temp
			min_temp2.innerHTML = response.min_temp
		
			
			sunrise.innerHTML = response.sunrise
			// sunrise2.innerHTML = response.sunrise
			
			sunset.innerHTML = response.sunset
			// sunset2.innerHTML = response.sunset
			
			temp.innerHTML = response.temp
			// setBackgroundColor(response.temp);
			temp2.innerHTML = response.temp

			// wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			// wind_speed2.innerHTML = response.wind_speed

		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")


// function setBackgroundColor(temp) {
// 	let backgroundColor = "";
// 	if (temp >= 30) {
// 	  backgroundColor = "Orange";
// 	} else if (temp >= 20 && temp < 30) {
// 	  backgroundColor = "#FFD580";
// 	} else if(temp<20) {
// 	  backgroundColor = "lightblue";
// 	}	
// 	document.body.style.backgroundColor = backgroundColor;
//   }
  
 