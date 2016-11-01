


var url = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json'

 
function pullJson(callback){

	return function(url){
		$.get(url).done(function(res){
			if(callback) {return(callback(res))}
				else console.log('')

		})
	}


}
 


	


function callback(res){console.log("this is a callback: ", res)}
var mashAjaxCall = pullJson(callback)
mashAjaxCall(url)