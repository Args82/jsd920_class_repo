/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/
//JAVASCRIPT
// window.onload = function () {

// 	document.getElementById('output').onclick = makeRequest

// 	function makeRequest(){
// 		var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
// 		// create instance of XML
// 		var httpRequest = new XMLHttpRequest();
// 		// set function to handle request
// 		httpRequest.onreadystatechange = responseMethod
// 		//open GET request to url
// 		httpRequest.open('GET', url)

// 		function responseMethod(){
// 			if (httpRequest.readyState === XMLHttpRequest.DONE){
// 				if(httpRequest.status === 200){

// 					console.log(JSON.parse(httpRequest.response))
// 				}
// 				else { 
// 					console.log('')
// 			}
			
// 		}
// 		}
// 		//check if state is "DONE"

// 		}
// 	};
// 	
//	JQUERY
window.onload = function(){
	var button = $('#getDataButton').click(function(){
		makeRequest()
	})
	var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
	function makeRequest(){
		$.get(url)
		.done(function(res){console.log(res)})
		.fail(function(xhr){console.log('error')})
	}
}

//AJAX
// window.onload = function () {
// $.ajax({
// 	  url: 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json',
// 	  type: 'GET',
// 	  success: function (response) {
// 	  	console.log(response);
// 	  },
// 	  error: function (xhr) {
// 	    console.log(xhr);
// 	  }
// 	})
// }

<<<<<<< HEAD
=======
window.onload = function () {
  var button = $('#getDataButton').click(function(){
    makeRequest()
  })
  var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
  function makeRequest(){
    $.get(url)
      .done(function(res){ console.log(res)})
      .fail(function(xhr){ console.log("error has ocurred: ", xhr)})
  }

  $.ajax({
    url:url,
    type:'GET',
    dataType:'PDF',
    success: function(res) { console.log(res)},
    error: function(xhr) { console.log(xhr)}
  })
};
>>>>>>> e0dc8a2bc4845c11af59e4bbd686ad6966b86a04
