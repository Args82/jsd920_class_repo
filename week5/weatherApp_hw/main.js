$(document).ready(function () {
 var apiKey = 'a6d86f5e3f968b512495ef6fc2b1e70d';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

  
  $.get(weatherUrl + 'New York City')
    .fail(function (xhr) {
      console.log(xhr);
    })
  	.done(function (response) {
  		console.log(response);

  		var temp = response.main.temp;
  		var humidity = response.main.humidity;
  		var windSpeed = response.wind.speed;

		$('#nyc-weather')
			.append('<p>Temperature: ' + temp + '</p>')
			.append('<p>Humidity: ' + humidity + '</p>')
			.append('<p>Wind Speed: ' + windSpeed + '</p>');

  	});
  

  	$('#weather-form').submit(function (event) {
  		event.preventDefault();

  		//input
  		var city = $('#city').val();
  		var state = $('#state').val();

  		$.ajax({
  			url: weatherUrl + city + ',' + state,
  			type: 'GET',
  			success: function (response) {
  				
  				outputWeather(response);
  			},
  			error: function (xhr) {
  				console.log(xhr);
  			}
  		});
  	});

  	function outputWeather (response) {
  		console.log(response);

  		var city = response.name;
  		var temp = response.main.temp;
  		var humidity = response.main.humidity;
  		var windSpeed = response.wind.speed;

  	$('#weather-output')
        .empty() 
        .append('<p>City: ' + city + '</p>')
        .append('<p>Temperature: ' + temp + '</p>')
        .append('<p>Humidity: ' + humidity + '</p>')
        .append('<p>Wind Speed: ' + windSpeed + '</p>');

  		

}
      });

var template = Handlebars.compile($('#title-template').html());
var weatherObj = { 
    city: city,
    temp: temp,
    humidity: humidity,
    windSpeed: windSpeed,
};

$('#weather-output').append(template(weatherObj));

