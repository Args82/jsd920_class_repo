$(document).ready(function() {
    var assessmentId = '8b31b590-5a9c-4df8-9765-b2c798e06398';
    Traitify.setPublicKey("399c11fc4bb447b9d67d175d88");
    Traitify.setHost("https://api-sandbox.traitify.com");
    Traitify.setVersion("v1");
    //PROGRESS BAR
    function updateProgress(position) {
        var percentage = Math.ceil(position / parseInt($('#total-slides').text()) * 100);
        $('#current-slide-position').text(position);
        $('#slide-percentage').text(percentage);
        $('#percentage-bar').css('width', percentage + '%');
    }
    //DETERMINES WHEN ON LAST SLIDE
    function lastSlide() {
        if ($('#current-slide-position').text() == $('#total-slides').text()) {
            return true;
        } else {
            return false;
        }
    }

    function getResults() {
        Traitify.get("/assessments/" + assessmentId + "?data=blend,types,traits").then(function(res) {
            console.log(res)
            traitify = Traitify.ui.load("results", assessmentId, ".traitify-widget");
            traitify = Traitify.ui.load("personalityTypes", assessmentId, ".traitify-widget");
            traitify = Traitify.ui.load("personalityTraits", assessmentId, ".traitify-widget");
        })
    }

    function showCareers() {
        Traitify.get("/assessments/" + assessmentId + "?data=career_matches").then(function(res) {
            console.log(res)
            traitify = Traitify.ui.load("careers", assessmentId, ".career")
        })
    }
    //GETS EACH SLIDE 
    function slideUpdate(assessment_id, slide_id, time_taken, response) {
        var url = '/assessments/' + assessment_id + '/slides/' + slide_id;
        var params = {
            id: assessment_id,
            response: response, //true/false 
            time_taken: time_taken,
            slide_id: slide_id //need to grab time taken
        }
        return Traitify.put(url, params);
    }
    //NOT ME button
    //COLLECTS AND SENDS DATA BACK AT CLICK BUTTON
    $('#slides-target').on('click', '#notMeBtn', function(event) {
        event.preventDefault();
        var slide_id = $(this).data('slide_id');
        var assessment_id = $(this).data('assessment_id');
        var position = $(this).data('position');
        //COLLECTS EACH SLIDE'S CURRENT DATA AND HIDES ALL SLIDES AT THE LAST ONE AND REQUESTS RESULTS
        slideUpdate(assessment_id, slide_id, 2000, false).then(function(response) {
            if (lastSlide()) {
                //addClass hidden
                $('#ui').addClass('hidden');
                getResults()
                showCareers()
            } else {
                // GO TO NEXT SLIDE
                updateProgress(position + 1);
                $('#trait-carousel').carousel('next');
            }
        });
    });
    //ME button
    //COLLECTS AND SENDS DATA BACK AT CLICK BUTTON
    $('#slides-target').on('click', '#meBtn', function(event) {
        event.preventDefault();
        var slide_id = $(this).data('slide_id');
        var assessment_id = $(this).data('assessment_id');
        var position = $(this).data('position');
        //COLLECTS EACH SLIDE'S CURRENT DATA AND HIDES ALL SLIDES AT THE LAST ONE AND REQUESTS RESULTS
        slideUpdate(assessment_id, slide_id, 2000, true).then(function(response) {
            // 2. go to the next slide
            if (lastSlide()) {
                //addClass hidden
                $('#ui').addClass('hidden');
                getResults()
                    // showTraits()
                    // showTypes()
                showCareers()
            } else {
                // GOT TO NEXT SLIDE
                updateProgress(position + 1);
                $('#trait-carousel').carousel('next');
            }
        });
    });
    Traitify.getSlides(assessmentId).then(function(slideObj) {
        slideObj = slideObj.slice(0, 3);
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
        //     //HACK LOL!!!!!!!!!!
        var slideDataObj = {
            slide: slides_array
        };
        //handlebars must always take in an object
        var htmlOfSlides = buildSlideHtmlFunction(slideDataObj);
        $("#slides-target").append(htmlOfSlides);
    })
});