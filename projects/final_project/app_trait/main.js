$(document).ready(function() {
    var assessmentId = '17e5bb42-f56f-46b8-aeb3-9f70bd5bd298';
    Traitify.setPublicKey("399c11fc4bb447b9d67d175d88");
    Traitify.setHost("https://api-sandbox.traitify.com");
    Traitify.setVersion("v1");

     //FUNCTION KEEPS TRACK OF DATA RECEIVED FROM EACH SLIDE

    function slideUpdate(assessment_id, slide_id, response) {
        var url = '/assessments/' + assessment_id + '/slides/' + slide_id;
        var params = {
            id: assessment_id,
            response: response, //true/false 
            slide_id: slide_id 
        }
        return Traitify.put(url, params);
    
    //NOT ME button
  //COLLECTS CURRENT DATA AND SENDS DATA BACK AT CLICK BUTTON FOR EACH SLIDE

    $('#slides-target').on('click', '#notMeBtn', function(event) {
        event.preventDefault();
        var slide_id = $(this).data('slide_id');
        var assessment_id = $(this).data('assessment_id');
        var position = $(this).data('position');
      slideUpdate(assessment_id, slide_id, false).then(function(response) {

            if (lastSlide()) {      //HIDES ALL SLIDES AT THE LAST ONE AND REQUESTS RESULTS
                //addClass hidden
                $('#ui').addClass('hidden');
                getResults()
                showCareers()
            } else {
                                //OTHERWISE GO TO NEXT SLIDE
                updateProgress(position + 1);
                $('#trait-carousel').carousel('next');
            }
        });
    });


    //ME button
    //COLLECTS CURRENT DATA AND SENDS DATA BACK AT CLICK BUTTON FOR EACH SLIDE

    $('#slides-target').on('click', '#meBtn', function(event) {
        event.preventDefault();
        var slide_id = $(this).data('slide_id');
        var assessment_id = $(this).data('assessment_id');
        var position = $(this).data('position');
      slideUpdate(assessment_id, slide_id, true).then(function(response) {
           
            if (lastSlide()) {     //HIDES ALL SLIDES AT THE LAST ONE AND REQUESTS RESULTS
                //addClass hidden
                $('#ui').addClass('hidden');
                getResults()
          
                showCareers()
            } else {
                // OTHERWISE GO TO NEXT SLIDE
                updateProgress(position + 1);
                $('#trait-carousel').carousel('next');
            }
        });
    });



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


    //GRABS PERSONALITY RESULTS FROM THE TRAITIFY API
    function getResults() {
        Traitify.get("/assessments/" + assessmentId + "?data=blend,types,traits").then(function(res) {
            console.log(res)
            traitify = Traitify.ui.load("results", assessmentId, ".traitify-widget");
            traitify = Traitify.ui.load("personalityTypes", assessmentId, ".traitify-widget");
            traitify = Traitify.ui.load("personalityTraits", assessmentId, ".traitify-widget");
        })
    }

    //GRABS CAREER MATCHES FROM THE TRAITIFY API
    function showCareers() {
        Traitify.get("/assessments/" + assessmentId + "?data=career_matches").then(function(res) {
            console.log(res)
            traitify = Traitify.ui.load("careers", assessmentId, ".career")
        })
    }
   
    }


    //HANDLEBARS

    //TAKES SLIDE PROPERTIES GOES THROUGH ALL SLIDES AND PUSHES INFO INTO THE ARRAY
    Traitify.getSlides(assessmentId).then(function(slideObj) {
        slideObj = slideObj.slice(0,3);
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