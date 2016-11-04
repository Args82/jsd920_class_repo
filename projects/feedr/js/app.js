/*
  Please add all Javascript code to this file.
*/

$(document).ready(function() {

    //array of news sources 
    var sources = [{
            name: 'Mashable',
            url: 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json',
            articles: []
        },

        {
            name: 'Digg',
            url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
            articles: []
        }, {
            name: 'Reddit',
            url: "https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json",
            articles: []
        },
    ]

    //constructor to define object type & properties
    // constructor is useful when you want to create multiple similar objects with the same properties and methods
    function Article(source, title, tags, content, shares, image) {

        this.source = source,
            this.title = title,
            this.tags = tags,
            this.content = content,
            this.shares = shares,
            this.image = image
    }

    //GET api data from each news source
    //grabs mashable
    // $.get(sources[0].url).done(function(res) {
    //         console.log(res);
    //         for (i = 0; i < res.new.length; i++) {
    //             var title = res.new[i].title;
    //             var tags = res.new[i].channel_label
    //             var content = res.new[i].content.plain;
    //             var shares = res.new[i].shares.total;
    //             var image = $('<img>').attr('src', res.new[i].image);
               

    //         }

    //         $('.featuredImage').append(image)

    //         $('.articleContent')

    //             .append('<h3>' + title + '</h3>')
    //             .append('<h6>' + tags + '</h6>')

    //         $('.impressions').append('<p>' + shares + '</p>')

    //         //create new object that holds specific data           //out of scope *review
    //         var newArticle = new Object(sources[0].title, content, shares, image)
    //             //push into articles array
    //         sources[0].articles.push(newArticle)





    //     })
    //     .fail(function(xhr) {
    //         console.log('An error occurred:');
    //         console.log(xhr);
    //     })

    //grabs digg
    $.get(sources[1].url).done(function(res) {
            console.log(res);
            //inerate through data
            for (i = 0; i < res.data.feed.length; i++) {
                var title = res.data.feed[i].content.title_alt;
                var tags = res.data.feed[i].tags;
                var content = res.data.feed[i].content.description;
                var shares = res.data.feed[i].comments.count
                
                      // res.data.feed.content.media.images.forEach( function(image) {
                      //   var image = $('<img>');
                      //       image.attr('src',images.original_url);
                      //     // statements
                      // });                        
            }

            // $('.featuredImage').append(image)

            $('.articleContent')

                .append('<h3>' + title + '</h3>')
                .append('<h6>' + tags + '</h6>')

            $('.impressions').append('<p>' + shares + '</p>')
            //create new object that holds specific data         //out of scope *review
            var newArticle = new Object(sources[1].title, tags, content, image);
            //push into articles array
            sources[1].articles.push(newArticle)




        })
        .fail(function(xhr) {
            console.log('An error occurred:');
            console.log(xhr);
        })



    //grabs reddit
    $.get(sources[2].url).done(function(res) {
        console.log(res);
        for (i = 0; i < res.data.children.length; i++) {
            var title = res.data.children[i].data.title
            var tags = res.data.children[i].data //find tags array
            var content = res.data.children[i].data
            var shares = res.data.children[i].data
           
            var image = $('<img>')
            image.attr('src', res.data.children[i].data.preview.images);
        }
        $('.featuredImage').append(image)
         $('.articleContent')

                .append('<h3>' + title + '</h3>')
                .append('<h6>' + tags + '</h6>')

            $('.impressions').append('<p>' + shares + '</p>')
        //create new object that holds specific data          //out of scope *review
      //create new object that holds specific data         //out of scope *review
            var newArticle = new Object(sources[1].title, tags, content, image);
            //push into articles array
            sources[1].articles.push(newArticle)


    })

    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    })

})







//grab template script
// var source = $('#title-template').html();
// //compile
// var template = Handlebars.compile(source);
// var titleObject = {
//     article: '',
//     section: ''

// };

// // 3
// var titleTemplate = template(titleObject);

// // 4
// $('.article').append(titleTemplate);
