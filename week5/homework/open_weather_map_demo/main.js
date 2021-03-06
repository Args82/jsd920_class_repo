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


$(document).ready(function () {
  var apiKey = '19ab861f15cfd2e8216a3be1ed615598';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

  // Problem 1
  // $.get(weatherUrl + "New York City")
  // .done(function(response) {
  //   console.log(response)
  //   createDoms(response,'#nyc-weather')
  // })
  // .fail(function(xhr){
  //   console.log(xhr)
  // })

  $('#weather-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val()
    var state = $('#state').val()

    $.ajax({
      url:weatherUrl + city + "," + state,
      type:'GET',
      success: function(response){
        console.log(response)
        createDoms(response,'#nyc-weather')
      },
      error: function(xhr) { console.log(xhr)}
    })
  })

  $('#flicker').click(function(){
    var apiKey = '5888f4afcee00eca4cd92576788b1498';
     var city = $('#city').val();
    var state = $('#state').val();
    var picUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apiKey+'&tags='+city+'&format=json&nojsoncallback=1';

    $.ajax({
      url: picUrl,
      type:'GET',
      success:function(data){
        console.log(data)
        var data = data.photos.photo[0]
        var farmId = data.farm
        var serverId = data.server;
        var id = data.id;
        var secret = data.secret;
debugger;
      var imgUrl = 'https:'+'//'+'farm'+farmId+'.staticflickr.com'+'/'+serverId+'/'+id+'_'+secret+'.jpg';
       $('body').css({'background-image':'url('+ imgUrl + ')'})
      $('body').css("color","white")
      },
      error: function(response){
        console.log(response)
      }
    })
  })
});

function createDoms(data,sel) {
  console.log(data)
    var temp = data.main.temp
    var humidity = data.main.humidity
    var windSpeed = data.wind.speed
    $(sel)
    .append('<p>Temp: ' + temp + '</p')
    .append('<p>Humidity: ' + humidity + '</p')
    .append('<p>Wind Speed: ' + windSpeed + '</p')

    // if(temp > 70) { $('body').css("background-color","red")}
    // else { $('body').css("background-color","blue")}
}


