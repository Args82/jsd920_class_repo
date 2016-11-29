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


    var id = 0;
    function Article(sources, image, summary, tags, title, shares) {
        this.sources = sources;
        this.image = image;
        this.summary = summary;
        this.tags = tags;
        this.title = title;
        this.shares = shares;
        this.id = id++;



    }





    $.get(sources[0].url).done(function(res) {
            console.log(res)

             res.new.forEach(function(res){
            
        
            // for (i = 0; i < res.new.length; i++) {
                var image = res.new.responsive_images[0].image;
                var summary = res.new.content.plain;
                var tags = [res.new.channel];  //has to be array
                var title = res.new.title;
                var shares = res.new.shares.total;
           

            $('.featuredImage').append($('<img>').attr('src', image))
            $('.articleContent').append('<h3>' + title + '</h3>')
            $('.articleContent').append('<h6>' + tags + '</h6>')
            $('.impressions').append('<p>' + shares + '</p>')


            var newArticle = new Article(sources[0].image, summary, tags, title, shares);
            sources[0].articles.push(newArticle)
             })
     

})

    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    });

})
