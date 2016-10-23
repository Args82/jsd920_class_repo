/*
  Please add all Javascript code to this file.
*/


var articleObj = { 
    article: "",
    section: ""
                // }$('#script ID on html')
// var newVariable = $('#title-template').html();
var template = Handlebars.compile( $('#title-template').html() ); 

var articleTemplate = template(articleObj);
$('.article').append(articleTemplate);
=======
//step1: grab the handlebars html template

//step2: compile the template using Handlebars.compile()

//step3: pass compile the obj

//step4: append the obj(s) to the html element