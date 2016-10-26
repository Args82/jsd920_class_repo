/*
  Please add all Javascript code to this file.
*/

$(document).ready(function () {
 // var apiKey = 'b1950c77e51644e283ac7f6326b45597';
  var newsUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b1950c77e51644e283ac7f6326b45597';

  
    $.get(newsUrl)
    .fail(function (xhr) {
      console.log(xhr);
    })
    .done(function (response) {
      console.log(response);
    });

  

    // $('.article')
    //   .append('<p>'a'</p>')
    
    // $('.featuredImage')
    //   .append('<p>'b' </p>')

    // $('.articleContent')
    //   .append('<p>'c' </p>')

//   	});
  



  		
  










//step1: grab the handlebars html template

//step2: compile the template using Handlebars.compile()

//step3: pass compile the obj

//step4: append the obj(s) to the html element
// $('.article') & $('.articleContent')


// var template = Handlebars.compile($('#article-template').html());

// var articleObj = { 
//     article: "",
//     section: ""
// };
// 	$('.article').append(template(articleObj))



});

