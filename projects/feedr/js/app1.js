$(document).ready(function() {



    var sources = [

        {
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


    // function Source(name, url, articles) {
    //      this.name = name;
    //     this.url = url;
    //     this.articles = [articles]
    // }

    // sources.forEach( function(source) {
    //     var name = sources.name
    //     var url = sources.url
    //     var articles = sources.articles

    //     sources.push(source)
    //     // statements
    // });



 // $('#source').append('<li>' + sources[0].name, url, articles+ '</li>')
  
    

    function Article(sources, image, summary, tags, title, shares) {
        this.sources = sources;
        this.image = image;
        this.summary = summary;
        this.tags = tags;
        this.title = title;
        this.shares = shares;
       



    }





    $.get(sources[0].url).done(function(res) {
            console.log(res)


            for (i = 0; i < res.new.length; i++) {
                var image = res.new[i].responsive_images[0].image;
                var summary = res.new[i].content.plain;
                var tags = [res.new[i].channel];  //has to be array
                var title = res.new[i].title;
                var shares = res.new[i].shares.total;
           
           // var aTag = $('<a>');
           //  aTag.attr('href', content.plain);
           //  $('<li>').append(aTag)
           // var aTag = $('<a>');
           //  aTag.attr('href', summary);
           //  $('.articleContent').append(aTag)


           $('.featuredImage').append($('<img>').attr('src', image))
            
            $('.articleContent').append('<h6>' + tags + '</h6>')
             $('.articleContent').append('<h3>' + title + '</h3>')
            $('.impressions').append('<p>' + shares + '</p>')
}

            var newArticle = new Article(sources[0].image, summary, tags, title, shares);
            sources[0].articles.push(newArticle)
             
        
})

    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    });

    


   

       




    $.get(sources[1].url).done(function(res) {
            console.log(res)


            for (i = 0; i < res.data.feed.length; i++) {
                var image = res.data.feed[i].content.media.images.original_url;
                var summary = res.data.feed[i].content.description;
                var tags = res.data.feed[i].content.tags.display;
                var title = res.data.feed[i].content.title;
                var shares = res.data.feed[i].diggs.count;

               

            }

            
            $('.featuredImage').append($('<img>').attr('src', image))
            $('#summary').append($('<a>').attr('href', summary))
            $('.articleContent').append('<h3>' + title + '</h3>')
            $('.articleContent').append('<h6>' + tags + '</h6>')
            $('.impressions').append('<p>' + shares + '</p>')
   
            var newArticle = new Article(sources[1].image, summary, tags, title, shares);
            sources[1].articles.push(newArticle)
             
        
})

    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    })

   


  $.get(sources[2].url).done(function(res) {
            console.log(res)

            for (i = 0; i < res.data.children.length; i++) {
                // var image = res.data.children.data[i].
                var summary = res.data.children[i].data.title;
                var tags = [res.data.children[i].data.subreddit];
                var title = res.data.children[i].data.title;
                var shares = res.data.children[i].data.score;


            }
  
            $('.featuredImage').append($('<img>').attr('src', image))
            $('.articleContent').append($('<a>').attr('href', summary))
            $('.articleContent').append('<h3>' + title + '</h3>')
            $('.articleContent').append('<h6>' + tags + '</h6>')
            $('.impressions').append('<p>' + shares + '</p>')
   
            var newArticle = new Article(sources[2].image, summary, tags, title, shares);
            sources[2].articles.push(newArticle)

 })

    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    })

// HANDLEBARS ARTICLE
//     var sourceOfArticle = $('#article-template').html();
//     var articleTemplates = Handlebars.compile(sourceOfArticle);



// var sourceObject = sourceObject
// var source_array = [];
//      sourceObject.forEach( function(source) {
//         source_array.push({
//         image: sources.image,
//         summary: sources.summary,
//         tags: sources.tags,
//         title: sources.title,
//         shares: sources.shares,
//         // id: 'id'

//         })
//      });
        
//     var sourceDataObj = {
//         source: source_array
//     }

//     // 3
//     var articleTemplate = articleTemplates(sourceDataObj);

//     // 4
//     $('#main').append(articleTemplate);











   

});
