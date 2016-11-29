$(document).ready(function() {

    var url = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';

    //pull data from api
    $.get(url)
        .fail(function(xhr) {
            console.log(xhr);
        })
        .done(function(response) {
            console.log(response);


        })


    var articles = {

    }







})

response.new.[0].title
var image = response.new.image

$('.article')
    .append('<p>' + title + '</p>')
    .append('<p>' + image + '</p>')


//       function outputData (response) {
//       console.log(response);




//         var title = response.articles.title
//         var image = response.articles.image

//       $(".article")
//           .append('<li>'+response.articles.title+'</li>')
//           .append('<li>'+response.articles.image+'</li>')

// }
//       });



// response.data.feed.forEach(function(response){
//   $(".article")
//   .append('<li>'+response.new.title+'</li>')
//   .append('<li>'+response.new.image+'</li>')
//  })



// response.data.feed.forEach(function(response){
//   $("ul").append('<li>'+response.new.content.title+'</li>')
//  })

// function that creates the object that recievs data
// function that pulls specific data
// constructor function that holds article objects
// 
// function Car(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
// }
// example
// var Source = function(name, url){
//     this.name = name
//     this.url = url
// } 

// var Source = function(name, url, article){
//    this.name = name
//    this.url = url
//    this.article
// }
// 







// 
// 
// 
// 
// 
// 

// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results) {

//     console.log(results);

//     results.data.feed.forEach(function(result){
//         $("ul").append('<li>'+result.content.title+'</li>')
//     })

// })

















// $('.featuredImage')
//   .append('<p>'b' </p>')

// $('.articleContent')
//   .append('<p>'c' </p>')

//    });












//---------HANDLEBARS-------------


//step1: grab the handlebars html template

//step2: compile the template using Handlebars.compile()

//step3: pass compile the obj

//step4: append the obj(s) to the html element
// $('.article') & $('.articleContent')


var template = Handlebars.compile($('#article-template').html());

var articleObj = {
    article: "",
    section: ""
};
$('.article').append(template(articleObj))

$(document).ready(function() {

    var url = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';


    //make api request
    // $.get(url)
    // .fail(function (xhr) {
    //   console.log(xhr);
    // })
    // .done(function (res) {
    //   console.log(res);


    $.ajax({
        url: url,
        type: 'GET',
        success: function(res) {

            var $title = $('<h1>').text(res.new[0].title);
            var $image = $('<p>').text(res.new[0].featured_image);
            var $content = $('<p>').text(res.new[0].content);
            var $shares = $('<p>').text(res.new[0].shares);

            outputData(res);
        },
        error: function(xhr) {
            console.log(xhr);
        }
    });



});


function outputData(res) {
    // this.article = res.new.title;
    // this.featuredImage = res.new.featured_image;
    // this.articleContent = res.new.content.plain;
    // this.impressions = res.new.shares.total;
    // var title = res.new.title;
    // var image = res.new.featured_image;
    // var content = res.new.content;
    // var shares = res.new.shares;


    $('.article')
        .append('<p>' + title + '</p>')
        // $('.featuredImage')
        .append('<p>' + image + '</p>')
        // $('.articleContent')
        .append('<p>' + content + '</p>')
        // $('.impressions')
        .append('<p>' + shares + '</p>')

}
// });
// $('#search').submit(function (event) {
//     event.preventDefault();
//   // function that creates the object that recieves data
//    }

// function that pulls specific data
// 
// 
// constructor function that holds article objects
// 




//var mycar = new Car("Eagle", "Talon TSi", 1993)


//---------HANDLEBARS-------------


//step1: grab the handlebars html template

//step2: compile the template using Handlebars.compile()

//step3: pass compile the obj

//step4: append the obj(s) to the html element
// $('.article') & $('.articleContent')

var template = Handlebars.compile($('#article-template').html());

var articleObj = {
    article: article
    fea
};
$('.article').append(template(articleObj))






})
