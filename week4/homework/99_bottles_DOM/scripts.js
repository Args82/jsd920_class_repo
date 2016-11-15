$(function() {


    $('button').click(function() {

    	var lyrics = $('#lyrics').val()









        for (var i = 99; i > 0; i--)
            if (i === 2) {
                $('div').append('<p>' +
                    i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall." + '</p>');
            } else if (i === 1) {
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
        } else {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
        }
        lyrics.html()
    })

});
