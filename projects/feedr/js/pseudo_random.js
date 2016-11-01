$(document).ready(function() {
    var mashUrl = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';
    var diggUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json";
    var redditUrl = "https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json";

    $.get(mashUrl)
        .fail(function(xhr) {
            console.log(xhr);
        })
        .done(function(res) {
            console.log(res);


            // $.ajax({
            //     url: url,
            //     type: 'GET',
            //     success: function (res) {
            //     
            $.get('https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json', function(res) {

                console.log(res);

                res.new.title.forEach(function(res) {
                    $(".article").append('<p>' + res.new.title + '</p>')
                })

            })

            var article = $('<h1>').html(res.new[''].title);
            var featuredImage = $('<img src>').html(res.new[''].image);
            var link = $('<a href>').html(res.new[''].link)
            var articleContent = $('<p>').html(res.new[0].content.plain);
            var impressions = $('<p>').html(res.new[''].shares.total);
            $('.article')
                .append($article)
                .append($link)
                // $('.section')
                .append($featuredImage)
                // .append($articleContent)
                .append($impressions)



            //   },
            //   error: function (xhr) {
            //     console.log(xhr);
            //   }
            // });

            // function outputData(res){
            //   // console.log('res')

            // var $article= res.new.title;
            // var $featuredImage = res.new.featured_image;
            // var $articleContent = res.new.content;
            // var $impressions = res.new.shares;

            // }
            // $('')
            // .append('<p>'+article+'</p>')

            // // $('.featuredImage')
            // .append('<p>'+featuredImage+ '</p>')
            // // $('.articleContent')
            // .append('<p>'+articleContent+'</p>') 
            // // $('.impressions')
            // .append('<p>'+impressions+'</p>')


            // $('.article')
            //   .append('<h3>' + title + '</h3>')
            // .append('<p>' + image + '</p>')
            // .append('<p>' + content + '</p>')
            // .append('<p>' + shares + '</p>');

        });
});

// function outputData(res) {
//   console.log(res);


//    var title = res.new.title;
//    var image = res.new.featured_image;
//    var content = res.new.content;
//    var shares = res.new.shares.total;
//  }

//
// }


// var template = Handlebars.compile($('#article-template').html());
// var articleObj = { 

//  article: article,
//  featuredImage: featuredImage,
//  articleContent: articleContent,
//  impressions: impressions

// };

// $('#article-template').append(template(articleObj));
