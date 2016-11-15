$(document).ready(function() {
    /* body... */
    //login/sign up?
    //currently slides repeat themselves and don't stop after 56
    //need to grab data after slide 56
    //find career matches
    //display results
    //** need to clear results for next client



    //pulic     399c11fc4bb447b9d67d175d88
    //secret    508f7a24948e461475c8858c8a

    //     curl https://api-sandbox.traitify.com/v1/assessments \
    // -H "Content-Type: application/json" \
    // -u 508f7a24948e461475c8858c8a:x \
    // -d '{"deck_id": "career-deck"}'
    // {"id":"943f952d-3f7e-45a8-8716-1e2e4d930bcf","deck_id":"career-deck","completed_at":null,"created_at":1479145851948,"locale_key":"en-US","profile_id":"201e1fe7-c4d2-444f-b952-cf88a8794f6e"}ALEXANDRAs-MacBook-Air:~ ATA$ 

    //send request for assessment id to traitify
    var assessmentId = '943f952d-3f7e-45a8-8716-1e2e4d930bcf';

    Traitify.setPublicKey("399c11fc4bb447b9d67d175d88");
    Traitify.setHost("https://api-sandbox.traitify.com");
    Traitify.setVersion("v1");


    //progress bar
    function updateProgress(position) {
        var percentage = Math.ceil(position / parseInt($('#total-slides').text()) * 100);

        $('#current-slide-position').text(position);
        $('#slide-percentage').text(percentage);
        $('#percentage-bar').css('width', percentage + '%');
    }

    // 1. hard code the career deck id
    var deck_id = 'career_deck'; //do I need deck id?

    function slideUpdate(assessment_id, slide_id, time_taken, response) {
        var url = '/assessments/' + assessment_id + '/slides/' + slide_id;
        var params = {
            id: assessment_id,
            response: response, //true/false 
            time_taken: time_taken //need to grab time taken
        }
        return Traitify.put(url, params);
    }

    //at slide 56 grab data and display results
    //NOT ME button
    $('#slides-target').on('click', '.notMeBtn', function(event) {
        event.preventDefault();
        var slide_id = $(this).data('slide_id');
        var assessment_id = $(this).data('assessment_id');
        var position = $(this).data('position');

        // 1. send this current assessment id and the current slide id with the "not me" value to Traitify
        slideUpdate(assessment_id, slide_id, 2000, false).then(function(response) {
            // 2. go to the next slide
            updateProgress(position);
            $('#trait-carousel').carousel('next');
        });
    });

    //ME button
    $('#slides-target').on('click', '.meBtn', function(event) {
        event.preventDefault();
        var slide_id = $(this).data('slide_id');
        var assessment_id = $(this).data('assessment_id');
        var position = $(this).data('position');

        // 1. send this current assessment id and the current slide id with the "not me" value to Traitify
        slideUpdate(assessment_id, slide_id, 2000, true).then(function(response) {
            // 2. go to the next slide
            updateProgress(position + 1);
            $('#trait-carousel').carousel('next');
        });
    });

    //don't know if this works
    function getResults(assessment_id, blend, types, traits, career_matches) {
        var url = /assessments/ + assessment_id + data;
        var params = {
            id: assessment_id,
            blend: blend,
            types: types,
            traits: traits,
            career_matches: career_matches
        }

        return traitify.get(url, data);


        /* body... */
    }
    //* this grabs all 6 decks
    // Traitify.get("/decks", function(data) {
    //         console.log(data, data)
    //     })



    //  POST
    //  Authorization: Basic {your_secret_key}:x
    //  https://api.traitify.com/v1/assessments
    //  {
    //    'deck_id': 'career-deck'
    //  }
    //skip for now
    // Traitify.put('/assessments', {
    //     deck_id: deck_id
    // }).then(function(data) {
    //     console.log('data', data)
    // })


    // Traitify.put(assessmentId).then(function(id, response, time_taken) {
    //     console.log(id, response, time_taken)

    //     var id = slide.id
    //     var response = slide.response
    //     var time_taken = slide.time_taken








    // })



    // 3. with the new assessment id request the slide information




    //  [
    //      {
    //          "id": "b93af357-0cd7-494e-b436-c67313c0fab6",
    //          "position": 1,
    //          "caption": "Using a Microscope ",
    //          "image_desktop": "https://traitify-api.s3.amazonaws.com/slides/b93af357-0cd7-494e-b436-c67313c0fab6/desktop",
    //          "image_desktop_retina": "https://traitify-api.s3.amazonaws.com/slides/b93af357-0cd7-494e-b436-c67313c0fab6/desktop_retina",
    //          "response": null,
    //          "time_taken": null,
    //          "completed_at": null,
    //          "created_at": 1414091516995,
    //          "focus_x": 62,
    //          "focus_y": 47
    //      },
    //  ]

    Traitify.getSlides(assessmentId).then(function(slideObj) {
        console.log(slideObj);
        $('#total-slides').text(slideObj.length);
        var slideTemplate = $('#slide-template').html();
        var buildSlideHtmlFunction = Handlebars.compile(slideTemplate);

        var slides_array = [];
        slideObj.forEach(function(slide) {
            slides_array.push({
                id: slide.id,
                assessment_id: assessmentId,
                image: slide.image_desktop,
                caption: slide.caption,
                position: slide.position
            });
        });
        // console.log('slides_array', slides_array)

        var slideDataObj = {
            slide: slides_array
        };
        //handlebars must always take in an object
        var htmlOfSlides = buildSlideHtmlFunction(slideDataObj);

        $("#slides-target").append(htmlOfSlides);
    });



    // 4. create a carousel (slides) with the image and 2 buttons
    //  button 1 "Me"
    //  button 2 "Not me"
    //  ** if not too hard, show progress bar

    // 5. depending on which button the user clicked, we want to make another ajax call to record their response
    //  PUT
    //     
    //      https://api.traitify.com/v1/assessments/{assessment_id}/slides/{slide_id}
    //      {
    //          "id": "781acd1f-8184-482d-a3d1-e6190d0b7db5",
    //          "response": true,
    //          "time_taken": 1000
    //      }

    // 6. at the end make another ajax call to results
    //  https://api.traitify.com/v1/assessments/{assessment_id}?data=blend,types,traits,career_matches


    // * /
    // var traitify = Traitify.ui.load("careers", assessmentId, ".careers", {
    //     careers: {
    //         experience_levels: "1,2", // Comma deliminated list
    //         number_of_matches: 5, // max 100
    //         columns: 5
    //     }
    // });


})
