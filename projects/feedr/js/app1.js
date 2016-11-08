$(document).ready(function() {



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



    function Article(sources, šimage, summary, tags, title, shares) {
        this.sources = sources
        this.image = image
        this.summary = summary
        this.tags = tags
        this.title = title
        this.shares = shares



    }





    $.get(sources[0].url)
        .done(function(res) {
            console.log(res)
            for (i = 0; i < res.new.length; i++) {
                var image = res.new[i].image;
                var summary = res.new[i].content.plain;
                var tags = res.new[i].channel;
                var title = res.new[i].title;
                var shares = res.new[i].shares.total;

                var img = $('<img>').attr('src', image)

            }

            $('.featuredImage').append(img)
            $('.articleContent').append('<h3>' + title + '</h3>')
            $('.articleContent').append('<h6>' + tags + '</h6>')
            $('.impressions').append('<p>' + shares + '</p>')
        })


    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    })

    var mashArticle = new Article(image, summary, tags, title, shares)
    sources[0].articles.push(mashArticle)




    $.get(sources[1].url)
        .done(function(res) {
            console.log(res)
            for (i = 0; i < res.data.feed.length; i++) {
                var image = res.data.feed[i].content.media.images.original_url;
                var summary = res.data.feed[i].meta.description;
                var tags = res.data.feed[i].content.tags.display;
                var title = res.data.feed[i].content.title;
                var shares = res.data.feed[i].diggs.count;

                var img = $('<img>').attr('src', image)

            }

            $('.featuredImage').append(img)
            $('.articleContent').append('<h3>' + title + '</h3>')
            $('.articleContent').append('<h6>' + tags + '</h6>')
            $('.impressions').append('<p>' + shares + '</p>')
        })


    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    })

    var diggArticle = new Article(image, summary, tags, title, shares)
    sources[1].articles.push(diggArticle)



    $.get(sources[2].url)
        .done(function(res) {
            console.log(res)
            for (i = 0; i < res.data.children.data.length; i++) {
                var image = res.data.children.data[i].
                var summary = res.data.children.data[i]
                var tags = res.data.children.data[i]
                var title = res.data.children.data[i]
                var shares = res.data.children.data[i]

                var img = $('<img>').attr('src', image)

            }

            $('.featuredImage').append(img)
            $('.articleContent').append('<h3>' + title + '</h3>')
            $('.articleContent').append('<h6>' + tags + '</h6>')
            $('.impressions').append('<p>' + shares + '</p>')
        })


    .fail(function(xhr) {
        console.log('An error occurred:');
        console.log(xhr);
    })

    var redditArticle = new Article(image, summary, tags, title, shares)
    sources[2].articles.push(redditArticle)

})
