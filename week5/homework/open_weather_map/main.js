/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/

// }

$(document).ready(function() {
            var button = $('#enter').click(function() {
                makeRequest()
            })
            var apiKey = '43344d03d0f794937f2ddf899d737521';
            var weatherUrl =
                'http://api.openweathermap.org/data/2.5/find?q=NYC&units=imperial&APPID=' +
                apiKey;
            $.get(weatherUrl).done(function(res) {
                console.log(res);
                var temp = res.main.temp;
                var humidity = res.main.humidity;
                var windSpeed = res.wind.speed;
                $('#nyc-weather').append('<li>Temperature: ' + temp +
                    '</li>').append('<li>Humidity: ' + humidity +
                    '</li>').append('<li>Wind Speed: ' + windSpeed +
                    '</li>')
            }).fail(function(xhr) {
                console.log("error has ocurred: ", xhr)
            })


    $('#cityForm').submit(function(e){
    	e.preventDefault();
    })


   
    	var city = $('#newCity').val()

   
    	
    	// var weather = JSON.parse(weatherUrl);

 //    var source = $('#title-template').html();
	// var template = Handlebars.compile(source);
	// var weatherObj = {
	// 	city: '',
	// 	temperature: '',
	// 	humidity: '',
	// 	wind: ''
	// }

	// var weatherTemp = $('#weather-template').html()
	// var compileTemplate = Handlebars.compile(weatherTemp)
	// var addObjs = compileTemplate(weatherObj)
	// var weatherList = $('#weather').append(addObjs)
});


	

	 	
	






