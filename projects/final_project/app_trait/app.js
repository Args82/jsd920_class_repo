$(document).ready(function() {
    /* body... */

    //pulic 	399c11fc4bb447b9d67d175d88
    //secret  	508f7a24948e461475c8858c8a


    var assessmentId = 'd88486bb-3357-4038-857e-38e7f7560258';

    Traitify.setPublicKey("399c11fc4bb447b9d67d175d88");
    Traitify.setHost("https://api-sandbox.traitify.com");
    Traitify.setVersion("v1");



    // 1. hard code the career deck id


 var deck_id = 'career-deck';
   
    $('#notMeBtn').on('click', function(event) {
        event.preventDefault();
		
		
    
        //     when we click the notMeBtn button, 

        // 1. send this current assessment id and the current slide id with the "not me" value to Traitify


        // 2. go to the next slide
        $('#trait-carousel').carousel('next');

    });
		$('#meBtn').on('click', function(event) {
        event.preventDefault();


        //     when we click the notMeBtn button, 

        // 1. send this current assessment id and the current slide id with the "not me" value to Traitify


        // 2. go to the next slide
        $('#trait-carousel').carousel('next');
    });

    //    2. make ajax call to get a new assessment id using the deck id
    // 	POST
    // 	Authorization: Basic {your_secret_key}:x
    // 	https://api.traitify.com/v1/assessments
    // 	{
    // 	  'deck_id': 'career-deck'
    // 	}
    //skip for now
    // Traitify.put('/assessments', {
    //     deck_id: deck_id
    // }).then(function(data) {
    //     console.log('data', data)
    // })


    // 3. with the new assessment id request the slide information
    // 	[
    // 	    {
    // 	        "id": "b93af357-0cd7-494e-b436-c67313c0fab6",
    // 	        "position": 1,
    // 	        "caption": "Using a Microscope ",
    // 	        "image_desktop": "https://traitify-api.s3.amazonaws.com/slides/b93af357-0cd7-494e-b436-c67313c0fab6/desktop",
    // 	        "image_desktop_retina": "https://traitify-api.s3.amazonaws.com/slides/b93af357-0cd7-494e-b436-c67313c0fab6/desktop_retina",
    // 	        "response": null,
    // 	        "time_taken": null,
    // 	        "completed_at": null,
    // 	        "created_at": 1414091516995,
    // 	        "focus_x": 62,
    // 	        "focus_y": 47
    // 	    },
    // 	]

    Traitify.getSlides(assessmentId, "/slides").then(function(slideObj) {
        console.log('slideObj', slideObj)


        var slideTemplate = $('#slide-template').html();
        var buildSlideHtmlFunction = Handlebars.compile(slideTemplate);

        var slides_array = [];
        slideObj.forEach(function(slide) {
            slides_array.push({
                image: slide.image_desktop
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
    // 	button 1 "Me"
    // 	button 2 "Not me"
    // 	** if not too hard, show progress bar

    // 5. depending on which button the user clicked, we want to make another ajax call to record their response
    // 	PUT
    // 		Authorization: Basic {your_public_key}:x
    // 		https://api.traitify.com/v1/assessments/{assessment_id}/slides/{slide_id}
    // 		{
    // 		    "id": "781acd1f-8184-482d-a3d1-e6190d0b7db5",
    // 		    "response": true,
    // 		    "time_taken": 1000
    // 		}

    // 6. at the end make another ajax call to results
    // 	https://api.traitify.com/v1/assessments/{assessment_id}?data=blend,types,traits,career_matches


    // * /
    // var traitify = Traitify.ui.load("careers", assessmentId, ".careers", {
    //     careers: {
    //         experience_levels: "1,2", // Comma deliminated list
    //         number_of_matches: 5, // max 100
    //         columns: 5
    //     }
    // });


})
